import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-angular',
  templateUrl: './projects-angular.component.html',
  styleUrls: ['./projects-angular.component.scss']
})
export class ProjectsAngularComponent implements OnInit {

  projects = [
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
      'link': 'http://mustafa-guer.developerakademie.com/simplecrm/index.html'
    },
    {
      'id': 'burritocompany',
      'name': 'Burrito Company',
      'description': 'Restaurant Website with Angular',
      'link': 'http://mustafa-guer.developerakademie.com/burritoCompany/'
    },
    {
      'id': 'doctordatabase',
      'name': 'Doctor Database',
      'description': 'Angular Website for searching Doctor',
      'link': 'http://mustafa-guer.developerakademie.com/doctor-database/'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
