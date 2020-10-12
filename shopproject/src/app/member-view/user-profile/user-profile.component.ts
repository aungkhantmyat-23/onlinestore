import { Member } from './../../model/member';
import { MemberService } from './../../service/member.service';
import { AuthService } from './../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  member:Member;
  constructor(private route:ActivatedRoute,private router:Router,
    private authService:AuthService,private memberService:MemberService) { }

  ngOnInit(): void {
    this.member = this.memberService.findOne(
      this.authService.loginUser);
  }

}
