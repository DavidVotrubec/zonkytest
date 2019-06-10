import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class MaterialComponentsModule { }
