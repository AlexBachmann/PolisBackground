import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { TriggerComponent } from './trigger/trigger.component';
import { BackgroundService } from './background.service';
import { UiModule } from '../../../shared/ui/ui.module';

@NgModule({
	imports: [
		CommonModule,
		UiModule
	],
	providers: [ BackgroundService ],
	declarations: [
		OffcanvasComponent, 
		VideoItemComponent, 
		LinkItemComponent, 
		AccordionItemComponent, 
		TriggerComponent
	],
	exports: [
		OffcanvasComponent, 
		VideoItemComponent, 
		LinkItemComponent, 
		AccordionItemComponent, 
		TriggerComponent
	]
})
export class BackgroundModule { }
