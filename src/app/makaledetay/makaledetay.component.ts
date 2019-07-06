import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'app-makaledetay',
  templateUrl: './makaledetay.component.html',
  styleUrls: ['./makaledetay.component.scss']
})
export class MakaledetayComponent implements OnInit {
  environment: {} = environment;
  makale: any;
  
  constructor(private router: ActivatedRoute, private makalelerService: MakalelerService) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makalelerService.getMakaleDetail(res.id)
        .subscribe(makale => {
          this.makale = makale;
        });
    })
  }

}
