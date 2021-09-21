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
      'link': 'https://www.mustafaguer.de/jsprojects/Sharkie/index.html'
    },
    // {
    //   'id': 'burritocompany',
    //   'name': 'Burrito Company',
    //   'description': 'Javascript based Object-Oriented Restaurant Website',
    //   'link': 'https://www.mustafaguer.de/jsprojects/burrito-company/index.html'
    // },
    {
      'id': 'quizapp',
      'name': 'QuizApp',
      'description': 'Javascript based Quiz Game',
      'link': 'https://www.mustafaguer.de/jsprojects/Quizapp%20Dark/index.html'
    },
    // {
    //   'id': 'postserver',
    //   'name': 'Post API',
    //   'description': 'Javascript based Web Component for searching addresses',
    //   'link': 'https://www.mustafaguer.de/jsprojects/postserver-webkcomponent/index.html'
    // }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
