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
      let element_title = document.getElementById("nav-title");
      element_title.classList.add('sticky-title');
    } else {
      let element = document.getElementById('navbar-nav');
      element.classList.remove('sticky');
      let element_title = document.getElementById("nav-title");
      element_title.classList.remove('sticky-title');
    }
  }
  
}
