package com.shop.api;

import com.shop.common.ApplicationException;
import com.shop.entity.ActivationKey;
import com.shop.entity.Member;

import com.shop.service.ActivationKeyService;
import com.shop.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberApi {

    @Autowired
    private MemberService memberService;
    @Autowired
    private ActivationKeyService activationService;

    @PostMapping
    public ResponseEntity<Member> save(@RequestBody Member member) {
        return ResponseEntity.accepted().body(memberService.save(member));
    }

    @GetMapping
    public List<Member> findAll() { return memberService.findAll(); }

    @GetMapping(path = "/activate", params = {"token"})
    public void activateAccount(@RequestParam("token") String token) {
        ActivationKey activationKey = activationService.findByAuthKey(token);
        if (null == activationKey || activationKey.isExpire()) {
            throw new ApplicationException("Token is expired " + " or invalid!!");
        }

        Member member = activationKey.getMember();
        member.setEnable(true);
        memberService.save(member);
    }
}
