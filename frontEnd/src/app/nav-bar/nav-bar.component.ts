import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 200) {
      let element = document.getElementById('navbar-nav');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar-nav');
      element.classList.remove('sticky');
    }
  }
}
