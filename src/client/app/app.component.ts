import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Config } from './shared/config/env.config';
import { correctHeight, detectBody } from './app.helpers';
import './operators';

declare var jQuery: any;
/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor() {
    console.log('Environment config', Config);
  }

  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind('load resize', function () {
      correctHeight();
      detectBody();
    });
    jQuery(document).ready(function () {
      correctHeight();
      detectBody();
    });
  }
}
