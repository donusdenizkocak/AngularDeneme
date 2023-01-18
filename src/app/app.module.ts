import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'

import { NavbarComponent } from './navbar/navbar.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopWithModelComponent } from './laptop-with-model/laptop-with-model.component';
import { OgrenciDetayComponent } from './ogrenci-detay/ogrenci-detay.component';
import { SatisGrafikComponent } from './satis-grafik/satis-grafik.component';
import { BarComponent } from './bar/bar.component';
import { NgifOrnekComponent } from './ngif-ornek/ngif-ornek.component';
import { NgifThenElseComponent } from './ngif-then-else/ngif-then-else.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LaptopAddComponent } from './laptop-add/laptop-add.component';
import { DemirbasComponent } from './demirbas/demirbas.component';
import { SiteYonetimiComponent } from './site-yonetimi/site-yonetimi.component';
import { Demirbas2Component } from './demirbas2/demirbas2.component';
import { OdemelerComponent } from './odemeler/odemeler.component';
import { JsonPlaceholderApiComponent } from './json-placeholder-api/json-placeholder-api.component';
import { KelimelerComponent } from './kelimeler/kelimeler.component';
import { OgrenciekleComponent } from './ogrenciekle/ogrenciekle.component';
import { KelimeekleComponent } from './kelimeekle/kelimeekle.component';
import { KelimeKontrolComponent } from './kelime-kontrol/kelime-kontrol.component';
import { KelimeDuzenleComponent } from './kelime-duzenle/kelime-duzenle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LaptopComponent,
    LaptopWithModelComponent,
    OgrenciDetayComponent,
    SatisGrafikComponent,
    BarComponent,
    NgifOrnekComponent,
    NgifThenElseComponent,
    NotfoundComponent,
    LaptopAddComponent,
    DemirbasComponent,
    SiteYonetimiComponent,
    Demirbas2Component,
    OdemelerComponent,
    JsonPlaceholderApiComponent,
    KelimelerComponent,
    OgrenciekleComponent,
    KelimeekleComponent,
    KelimeKontrolComponent,
    KelimeDuzenleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
