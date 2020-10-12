import { MemberService } from './../../../service/member.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let AOS: any;

declare let $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit(): void {
    AOS.init()

  }
  signUp(signUpForm: NgForm) {
    this.memberService.save(signUpForm.value)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          state: {
            alert: {message: 'Check your email to account activate', cssClass: 'alert-info'}
              
          }
        })
      })
  }


}
