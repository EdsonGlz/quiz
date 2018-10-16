import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpPage } from './sp';

@NgModule({
  declarations: [
    SpPage,
  ],
  imports: [
    IonicPageModule.forChild(SpPage),
  ],
})
export class SpPageModule {}
