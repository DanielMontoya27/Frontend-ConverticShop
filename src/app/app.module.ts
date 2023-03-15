import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro-page/registro-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({

  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
