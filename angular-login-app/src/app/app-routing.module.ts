import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GaleriComponent } from './about/galeri.component';
import { HakkimdaComponent } from './about/hakkimda.component';
import { AnaSayfaComponent } from './about/anasayfa.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'anasayfa', component: AnaSayfaComponent },
  { path: 'galeri', component: GaleriComponent },
  { path: 'hakkimda', component: HakkimdaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
