import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeCzech from '@angular/common/locales/cs';
registerLocaleData(localeCzech, 'cs');

import { AppComponent } from './app.component';
import { RiskFilterComponent } from './risk-filter/risk-filter.component';
import { ZonkyDemoCalculatorComponent } from './zonky-demo-calculator/zonky-demo-calculator.component';
import { MaterialComponentsModule } from './material-components/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    RiskFilterComponent,
    ZonkyDemoCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialComponentsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'cs'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
