import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { GraphqlModule } from '@graphql/modules/graphql.module';


@NgModule({
  declarations: [VotesComponent, BarChartComponent],
  imports: [
    GraphqlModule,
    CommonModule,
    HttpClientModule,
    VotesRoutingModule,
    ChartsModule
  ]
})
export class VotesModule { }
