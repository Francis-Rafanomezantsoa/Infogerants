import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact',component: ContactComponent},
  {path: 'config', component: ConfigComponent},
  { path:'notification', component: NotificationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
