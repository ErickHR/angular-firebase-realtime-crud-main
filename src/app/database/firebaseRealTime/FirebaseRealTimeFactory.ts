
import { Injectable } from '@angular/core'

import { AngularFireDatabase } from '@angular/fire/compat/database'
import IDatabase from '../IDatabase'
import { FirebaseService } from '../firebase/firebase.database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseFactory<T> {
  constructor (private readonly db: AngularFireDatabase) {
  }

  database (table: string): IDatabase<T> {
    return new FirebaseService<T>(this.db, table)
  }
}
