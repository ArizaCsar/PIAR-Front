import { Component, OnInit } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment} from 'moment';

const moment = _moment;

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.component.html',
  styleUrls: ['./plantilla1.component.scss']
})
export class Plantilla1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
