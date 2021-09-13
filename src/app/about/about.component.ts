import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// function calculateAge(){
//   let birthYear = 1990;
//   let currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// }