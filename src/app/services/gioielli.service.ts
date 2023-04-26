import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gioiello } from '../interface/gioiello';

@Injectable({
  providedIn: 'root'
})

export class GioielliService {
  constructor(private http: HttpClient) { }

  getGioielli(): Observable<Gioiello[]> {
    return this.http.get<any[]>('https://albertodemaria.github.io/jsonDB/Esethic_database.json')
      .pipe(
        map((data: any[]) => {
          const gioielliArray: Gioiello[] = [];
          data.forEach(gioielloData => {
            const gioiello: Gioiello = {
              id: gioielloData.id,
              nome: gioielloData.nome,
              codice: gioielloData.codice,
              edizione: gioielloData.edizione,
              materiale: gioielloData.materiale,
              lavorazione: gioielloData.lavorazione,
              size: gioielloData.size,
              price_no_iva: gioielloData.price_no_iva,
              price_iva: gioielloData.price_iva,
              tipologia: gioielloData.tipologia
            };
            gioielliArray.push(gioiello);
          });
          return gioielliArray;
        })
      );
  }



}
