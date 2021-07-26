import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CreateofferComponent } from './components/createoffer/createoffer.component'


const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path:'createoffer',component:CreateofferComponent},
  { path: '**', component: PageNotFoundComponent }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
