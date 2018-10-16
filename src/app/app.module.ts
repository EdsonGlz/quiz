import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TvPage } from '../pages/tv/tv';
import { LamparaPage } from '../pages/lampara/lampara';
import { BocinaPage } from '../pages/bocina/bocina';
import { SpPage } from '../pages/sp/sp';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TvPage,
    LamparaPage,
    BocinaPage,
    SpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TvPage,
    LamparaPage,
    BocinaPage,
    SpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
