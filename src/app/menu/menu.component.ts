import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  isMobile = window.innerWidth < 600;
  ifClicked = false;

  constructor() { }

  ngOnInit(): void {

  }

  openMenu() {
    this.ifClicked = true;
  }

  closeMenu() {
    this.ifClicked = false;
  }

  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 600;
  }

}
