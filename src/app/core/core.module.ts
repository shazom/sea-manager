import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from "../../environments/environment"
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: []
})
export class CoreModule { }
