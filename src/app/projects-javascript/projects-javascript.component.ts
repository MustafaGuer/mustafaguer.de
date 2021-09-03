import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-javascript',
  templateUrl: './projects-javascript.component.html',
  styleUrls: ['./projects-javascript.component.scss']
})
export class ProjectsJavascriptComponent implements OnInit {

  projects = [
    {
      'id': 'sharkie',
      'name': 'Sharkie',
      'description': 'Javascript based game',
      'link': 'http://mustafa-guer.developerakademie.com/SHARKIE/index.html'
    },
    {
      'id': 'burritocompany',
      'name': 'Burrit Company',
      'description': 'Javascript based Object-Oriented Restaurant Website',
      'link': 'http://mustafa-guer.developerakademie.com/burrito-company/index.html'
    },
    // {
    //   'id': 'pokedex',
    //   'name': 'Pokedex',
    //   'description': 'Work with API',
    //   'link': 'http://mustafa-guer.developerakademie.com/Pokedex/index.html'
    // },
    {
      'id': 'join',
      'name': 'Join',
      'description': 'Canban Board with JavaScript in Group Work',
      'link': 'http://mustafa-guer.developerakademie.com/Join/html/login-submit.html'
    },
    {
      'id': 'quizapp',
      'name': 'QuizApp',
      'description': 'Javascript based Quiz Game',
      'link': 'http://mustafa-guer.developerakademie.com/Quizapp%20Dark/index.html'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
