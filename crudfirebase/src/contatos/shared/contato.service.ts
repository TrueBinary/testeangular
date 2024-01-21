import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from './contato';
import { map } from 'rxjs/operators';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) { }

  insert(contato: Contato) {
    this.db.list('contato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(contato: Contato, key: string) {
    this.db.list('contato').update(key, contato)
      .catch((error: any) => {
        console.error(error);
      });
  }

  return changes.map((c: any) => ({ key: c.payload.key, ...c.payload.val() }));
}
