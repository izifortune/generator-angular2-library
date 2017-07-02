/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<sample-component></sample-component>`
})
class AppComponent {

  constructor() {
  }
}

import { SampleModule }  from '../dist';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SampleModule ]
})
class AppModule {}
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
