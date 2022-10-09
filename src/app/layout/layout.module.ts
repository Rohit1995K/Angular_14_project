import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from '../components/content/content.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class LayoutModule { }
