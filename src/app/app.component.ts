import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { MakalelerService } from './makaleler.service';


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

  @HostListener('window:resize', ['$event']) handleResize() {

    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 992) {
        this.navbarMobileOpen = false;
      } else {
        this.navbarMobileOpen = true;
        this.mobileMenuOpen = false;
      }
    }

  }

  constructor(private makalelerService: MakalelerService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 992) {
        this.navbarMobileOpen = false;
      } else {
        this.navbarMobileOpen = true;
      }
    }
    
    // Get first Articles at first.
    this.makalelerService.getFirstSixArticle()
      .subscribe(res => this.makalelerService.firstSixArticle.next(res['results']) );

    this.makalelerService.getFirstFourUyusturucumaddesuclari()
    .subscribe(res => this.makalelerService.firstFourUyusturucumaddesuclari.next(res['results']));

    this.makalelerService.getFirstFourBeyazyakalisuclari()
      .subscribe(res => this.makalelerService.firstFourBeyazyakalisuclari.next(res['results']));

    this.makalelerService.getFirstFourHakaret()
      .subscribe(res => this.makalelerService.FirstFourHakaret.next(res['results']));

    this.makalelerService.getFirstFourYaralama()
      .subscribe(res => this.makalelerService.firstFourYaralama.next(res['results']));

    this.makalelerService.getFirstFourOrgutsuclari()
      .subscribe(res => this.makalelerService.firstFourOrgutsuclari.next(res['results']));
  }


  changeMenuState() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.uzmanliklarOpened = false;
  }

  changeUzmanliklarSubMenu() {
    this.uzmanliklarOpened = !this.uzmanliklarOpened;
  }

}
