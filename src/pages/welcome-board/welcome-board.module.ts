import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeBoardPage } from './welcome-board';

@NgModule({
  declarations: [
    WelcomeBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeBoardPage),
  ],
})
export class WelcomeBoardPageModule {}
