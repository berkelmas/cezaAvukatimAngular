import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('mobileMenuAnimation', [
      transition('void => displayMobileMenu', [style({height: 0, transform: 'scaleY(0)', opacity: 0}), animate('500ms')]),
      transition('displayMobileMenu => void', animate('500ms ease-out', style({height: 0, opacity: 0, transform: 'scaleY(0)'})))
    ])
  ]
})
export class AppComponent implements OnInit {
  navbarMobileOpen: boolean;
  mobileMenuOpen: boolean = false;

  uzmanliklarOpened: boolean = false;
  desktopSubState: boolean = false;

  @HostListener('window:resize', ['$event']) handleResize(event) {
    if (window.innerWidth < 992) {
      this.navbarMobileOpen = false;
    } else {
      this.navbarMobileOpen = true;
      this.mobileMenuOpen = false;
    }
  }



  ngOnInit() {

    if (window.innerWidth < 992) {
      this.navbarMobileOpen = false;
    } else {
      this.navbarMobileOpen = true;
    }
  }

  changeMenuState() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.uzmanliklarOpened = false;
  }

  changeUzmanliklarSubMenu() {
    this.uzmanliklarOpened = !this.uzmanliklarOpened;
  }

}
