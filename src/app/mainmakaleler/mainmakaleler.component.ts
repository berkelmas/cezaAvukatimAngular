import { Component, OnInit } from '@angular/core';
import { MakalelerService } from '../makaleler.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mainmakaleler',
  templateUrl: './mainmakaleler.component.html',
  styleUrls: ['./mainmakaleler.component.scss']
})
export class MainmakalelerComponent implements OnInit {
  environment: {} = environment;
  sayfa: number;
  kategori: string;

  constructor(private makalelerService: MakalelerService, private router: ActivatedRoute) {}

  fourMakale: any;

  ngOnInit() {
    this.router.params.subscribe(res => {
      if (res.sayfa) {
        this.sayfa = parseInt(res.sayfa);

        if (res.kategori) {
          this.kategori = res.kategori;
        } else {
          this.kategori = '';
        }
      } else {
        this.sayfa = 1;

        if (res.kategori) {
          this.kategori = res.kategori;
        } else {
          this.kategori = '';
        }
      }

      this.makalelerService.getFourMakale(this.kategori, this.sayfa)
        .subscribe(res => {
          if (res['results']) {
            this.fourMakale = res['results'];
          } else {
            this.fourMakale = res;
          }
        });
    })

  }

}
