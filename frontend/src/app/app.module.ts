import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';
import { StartComponent } from './start/start.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistComponent,
    LoginComponent,
    HeaderComponent,
    GuideComponent,
    StartComponent,
    SuccessComponent
  ],
  imports: [
      HttpModule,
      JsonpModule,
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    RouterModule.forRoot([
        { path: '', component: StartComponent },
        { path: 'guidepage', component: GuideComponent },
        { path: 'successpage', component:  SuccessComponent },
        { path: 'registpage', component:  RegistComponent },
        { path: 'loginpage', component:   LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
