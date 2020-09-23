import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule)
      },
      {
        path: 'monitoring',
        loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule)
      },
      {
        path: 'network',
        loadChildren: () => import('./network/network.module').then(m => m.NetworkModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'votes',
        loadChildren: () => import('./votes/votes.module').then(m => m.VotesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
