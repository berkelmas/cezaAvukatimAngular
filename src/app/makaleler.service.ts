import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MakalelerService {
  firstSixArticle: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourUyusturucumaddesuclari: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourBeyazyakalisuclari: BehaviorSubject<any> = new BehaviorSubject([]);
  FirstFourHakaret: BehaviorSubject<any> = new BehaviorSubject([]);

  kategoriHakaret: string = 'hakaret';
  kategoriYaralama: string = 'yaralama';
  kategoriOrgutsuclari: string = 'orgutsuclari';
  kategoriUyusturucumaddesuclari: string = 'uyusturucumaddesuclari';
  kategoriBeyazyakalisuclari: string = 'beyazyakalisuclari';

  constructor(private http: HttpClient) {}

  getFirstSixArticle() {
    return this.http.get(`${environment.apiEndpoint}mainpagenocontent/`);
  }

  getFirstFourUyusturucumaddesuclari() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriUyusturucumaddesuclari}`);
  }

  getFirstFourBeyazyakalisuclari() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriBeyazyakalisuclari}`);
  }

  getFirstFourHakaret() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriHakaret}`);
  }

}
