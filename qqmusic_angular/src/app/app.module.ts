import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommendComponent } from './components/commend/commend.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SearchComponent } from './components/search/search.component';
import { RanklistComponent } from './components/ranklist/ranklist.component';
import { MydirDirective } from './mydir.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommendComponent,
    RankingComponent,
    SearchComponent,
    RanklistComponent,
    MydirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
