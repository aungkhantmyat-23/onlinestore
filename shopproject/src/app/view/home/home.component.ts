import { Component, OnInit } from '@angular/core';
declare let AOS: any;
declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    $(function () {

      let jumbContent = document.querySelector('.jumb')
      let directionCue = document.querySelector('.direction-cue')

      function proMover() {

        let top = window.pageYOffset
        let currentCuePosition = jumbContent.getBoundingClientRect().top

        currentCuePosition < 0
          ? directionCue.classList.add(`d-none`)
          : directionCue.classList.remove(`d-none`)

        window.requestAnimationFrame(proMover)
      }
      window.requestAnimationFrame(proMover)
    })
  }

}
