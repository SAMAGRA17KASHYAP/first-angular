import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { NavComponent } from './nav/nav.component';
import { ProductModule } from './products/product.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'welcome',component: WelcomeComponent},
        {path:'',redirectTo:'welcome',pathMatch:'full'},
        
      ]
    )
    ,ProductModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
