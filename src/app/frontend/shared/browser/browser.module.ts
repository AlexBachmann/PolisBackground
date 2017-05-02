import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from './iframe/iframe.component';
import { UrlBarComponent } from './url-bar/url-bar.component';
import { FormsModule } from '../../../shared/forms/forms.module';
import { MockComponent } from './mock/mock.component';

@NgModule({
	imports: [
	CommonModule,
	FormsModule
	],
	declarations: [IframeComponent, UrlBarComponent, MockComponent],
	exports: [IframeComponent, UrlBarComponent, MockComponent]
})
export class BrowserModule { }
