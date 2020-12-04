import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from './../../service/member.service';
import { Member } from './../../model/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  members:Member[];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.findAll()
    this.members =this.memberService.data;
   
    this.memberService.dataChanged.subscribe(
      (members: Member[]) => this.members = members
    )

  }search(name:string){
    this.members=this.memberService.findByName(name)
  }

}
