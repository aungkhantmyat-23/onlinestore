package com.shop.service;

import com.shop.entity.ActivationKey;
import com.shop.entity.Member;
import com.shop.repo.BaseRepo;
import com.shop.repo.MemberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MemberService extends BaseService<Member, String>{

    @Autowired
    private MemberRepo repo;
    @Autowired
    private ActivationKeyService activationKeyService;
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    protected BaseRepo<Member,String> repo(){
        return repo;
    }

    @Override
    public Member save(Member member) {
        if(!member.isEnable())
            member.setPassword(passwordEncoder.encode(member.getPassword()));

        ActivationKey activationKey = new ActivationKey(repo.save(member));
        activationKeyService.save(activationKey);

        String url = String.format("Click below link to activate your account!%nhttp://localhost:4200/members/activate?token=%s",
                activationKey.getAuthKey()
        );
        sendEmail(member.getEmail(),"Account activation",url);
        return member;
    }

    private void sendEmail(String email, String subject, String body){
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
