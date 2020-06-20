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
import { QuickStartComponent } from './quick-start/quick-start.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { PersonalComponent } from './personal/personal.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { Game3Component } from './games/game3/game3.component';
import { Game4Component } from './games/game4/game4.component';
import { Game5Component } from './games/game5/game5.component';
import { Game6Component } from './games/game6/game6.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistComponent,
    LoginComponent,
    HeaderComponent,
    GuideComponent,
    StartComponent,
    SuccessComponent,
    QuickStartComponent,
    GamesComponent,
    GameDetailsComponent,
    PersonalComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component
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
        { path: 'loginpage', component:   LoginComponent },
        { path: 'quickStart', component: QuickStartComponent },
        { path: 'personalpage', component: PersonalComponent },
        { path: 'gamesList', component: GamesComponent },
        { path: 'gamesList/game1', component: GameDetailsComponent },
        { path: 'gamesList/game2', component: Game2Component },
        { path: 'gamesList/game3', component: Game3Component },
        { path: 'gamesList/game4', component: Game4Component },
        { path: 'gamesList/game5', component: Game5Component },
        { path: 'gamesList/game6', component: Game6Component }
    ])
  ],
    schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
