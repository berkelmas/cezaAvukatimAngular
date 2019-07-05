import { Component, OnInit } from '@angular/core';
import { MakalelerService } from '../makaleler.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  firstSixArticle: any;
  firstFourYaralama: any;
  firstFourBeyazyakalisuclari: any;
  FirstFourHakaret: any;

  environment: {} = environment;

  constructor(private makalelerService: MakalelerService) {}

  ngOnInit() {
    this.makalelerService.firstSixArticle.subscribe(res => this.firstSixArticle = res);
    this.makalelerService.firstFourUyusturucumaddesuclari.subscribe(res => this.firstFourYaralama = res);
    this.makalelerService.firstFourBeyazyakalisuclari.subscribe(res => this.firstFourBeyazyakalisuclari = res);
    this.makalelerService.FirstFourHakaret.subscribe(res => this.FirstFourHakaret = res);
  }

}
