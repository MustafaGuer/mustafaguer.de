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
      'link': 'https://ring-of-fire-2e805.web.app/'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
