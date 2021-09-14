import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      'img': 'javascript-icon.png',
      'name': 'JavaScript'
    },
    {
      'img': 'angular2.png',
      'name': 'Angular'
    },
    {
      'img': 'java script.png',
      'name': 'HTML'
    },
    {
      'img': 'Group 205.png',
      'name': 'CSS'
    },
    {
      'img': 'angular-material-logo.svg',
      'name': 'Material Design'
    },
    {
      'img': 'Group 226.png',
      'name': 'SCRUM'
    },
    {
      'img': 'Git-Icon-1788C 2.png',
      'name': 'Git'
    },
    {
      'img': 'icons8-rest-api-80 2.png',
      'name': 'Rest API'
    },
    {
      'img': 'icons8-database-52 2.png',
      'name': 'Firebase Database'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
