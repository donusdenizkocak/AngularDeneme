import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { DemirbasComponent } from './demirbas/demirbas.component';
import { Demirbas2Component } from './demirbas2/demirbas2.component';
import { JsonPlaceholderApiComponent } from './json-placeholder-api/json-placeholder-api.component';
import { KelimeDuzenleComponent } from './kelime-duzenle/kelime-duzenle.component';
import { KelimeKontrolComponent } from './kelime-kontrol/kelime-kontrol.component';
import { KelimeekleComponent } from './kelimeekle/kelimeekle.component';
import { KelimelerComponent } from './kelimeler/kelimeler.component';
import { LaptopAddComponent } from './laptop-add/laptop-add.component';
import { LaptopWithModelComponent } from './laptop-with-model/laptop-with-model.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NgifOrnekComponent } from './ngif-ornek/ngif-ornek.component';
import { NgifThenElseComponent } from './ngif-then-else/ngif-then-else.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OdemelerComponent } from './odemeler/odemeler.component';
import { OgrenciDetayComponent } from './ogrenci-detay/ogrenci-detay.component';
import { OgrenciekleComponent } from './ogrenciekle/ogrenciekle.component';
import { SatisGrafikComponent } from './satis-grafik/satis-grafik.component';
import { SiteYonetimiComponent } from './site-yonetimi/site-yonetimi.component';

const routes: Routes = [
  {path:'satis-grafik',component:SatisGrafikComponent},
  {path:'laptop-model',component:LaptopWithModelComponent},
  {path:'ogrenci-detay',component:OgrenciDetayComponent},
  {path:'bar',component:BarComponent},
  {path:'',component:SatisGrafikComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'ngif-ornek',component:NgifOrnekComponent},
  {path:'ngif-then-else',component:NgifThenElseComponent},
  {path:'laptop-add',component:LaptopAddComponent},
  {path:'demirbas',component:DemirbasComponent},
  {path:'demirbas2',component:Demirbas2Component},
  {path:'siteYonetimi',component:SiteYonetimiComponent},
  {path:'odemeler',component:OdemelerComponent},
  {path:'kelimeler',component:KelimelerComponent},
  {path:'ogrenciekle',component:OgrenciekleComponent},
  {path:'kelimeekle',component:KelimeekleComponent},
  {path:'kelime-kontrol',component:KelimeKontrolComponent},
  {path:'kelime-duzenle',component:KelimeDuzenleComponent},
  {path:'jsonPlaceholder',component:JsonPlaceholderApiComponent},
  {path:'**',component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
