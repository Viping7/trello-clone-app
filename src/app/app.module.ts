import { TasksPage } from './../pages/tasks/tasks';
import { WelcomeBoardPage } from './../pages/welcome-board/welcome-board';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TasksProvider } from '../providers/tasks/tasks';
import { BoardsProvider } from '../providers/boards/boards';

@NgModule({
  declarations: [
    MyApp,
    WelcomeBoardPage,
    TasksPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomeBoardPage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksProvider,
    BoardsProvider
  ]
})
export class AppModule {}
