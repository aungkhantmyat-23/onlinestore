import { switchMap } from 'rxjs/operators';
import { AuthService } from './../../../service/auth.service';
import { MemberService } from './../../../service/member.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let AOS: any;
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: { message: string, cssClass: string };

  constructor(private router: Router, private route: ActivatedRoute,
    private memberService: MemberService, private authService: AuthService) { }

  ngOnInit(): void {
    AOS.init()
    this.alert = history.state.alert

    this.route.queryParams.subscribe(
      (params: Params) => {
        let token = params['token'];
        if (token)
          this.memberService.activateAccount(token).subscribe(
            {
              error: errorObj => this.alert = { message: errorObj.error?.message, cssClass: 'alert-danger' },
              complete: () =>
                this.alert = { message: 'Account had been successfully actived', cssClass: 'alert-success' }
            }
          )
      }
    )

  }
  signUp() {
    this.router.navigate(['/signup'])
  }
  login(signInForm: NgForm) {
    this.authService.login(signInForm.value).subscribe({
      error: error => {
        this.alert = { message: 'Something was wrong.Try again', cssClass: 'alert-danger' }
      },
      complete: () => {
        if (!this.authService.url) {
          this.router.navigate(['/home']);
          return;
        }
        this.router.navigate([this.authService.url]);
        this.authService.url = null;

      }
    })
  }
}
