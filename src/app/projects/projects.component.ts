import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  all = true;
  javascript = false;
  angular = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAll() {
    this.all = true;
    this.javascript = false;
    this.angular = false;
  }

  showJavascript() {
    this.javascript = true;
    this.angular = false;
    this.all = false;
  }

  showAngular() {
    this.javascript = false;
    this.angular = true;
    this.all = false;
  }

}
