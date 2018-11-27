import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommendComponent } from './components/commend/commend.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SearchComponent } from './components/search/search.component';
import { RanklistComponent } from './components/ranklist/ranklist.component';


const routes: Routes = [
  {
    path:'commend',
    component:CommendComponent
  },{
    path:'ranking',
    component:RankingComponent
  },{
    path:'search',
    component:SearchComponent
  },
  {
    path:'',
    redirectTo:'/commend',
    pathMatch:'full'
  },
  //{
  //   path:'**',
  //   component:CommendComponent
  // }
  {
    path:'ranklist/:aid',
    component:RanklistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
