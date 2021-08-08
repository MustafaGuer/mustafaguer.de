import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  javascript = false;
  angular = false;

  projects = [
    {
      'id': 'sharkie',
      'name': 'Sharkie',
      'description': 'Javascript based game',
      'link': 'http://mustafa-guer.developerakademie.com/SHARKIE/index.html'
    },
    {
      'id': 'elPolloLocco',
      'name': 'El Pollo Locco',
      'description': 'Javascript based Jump and Run Game',
      'link': 'http://mustafa-guer.developerakademie.com/EL_POLLO_LOCO/index.html'
    },
    {
      'id': 'pokedex',
      'name': 'Pokedex',
      'description': 'Work with API',
      'link': 'http://mustafa-guer.developerakademie.com/Pokedex/index.html'
    },
    {
      'id': 'join',
      'name': 'Join',
      'description': 'Canban Board',
      'link': 'http://mustafa-guer.developerakademie.com/Join/html/login-submit.html'
    },
    {
      'id': 'ringoffire',
      'name': 'Ring of Fire',
      'description': 'Angular based Card Counting Game',
      'link': 'https://ring-of-fire-2e805.web.app/'
    },
    {
      'id': 'simplecrm',
      'name': 'Simple CRM',
      'description': 'Angular based Business App',
      'link': 'https://ring-of-fire-2e805.web.app/'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
