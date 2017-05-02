import { Component, OnInit, Input } from '@angular/core';
import { BackgroundService } from '../background.service';

@Component({
	selector: 'tekkl-trigger',
	templateUrl: './trigger.component.html',
	styleUrls: ['./trigger.component.sass']
})
export class TriggerComponent implements OnInit {
	@Input() url: string
	constructor(private backgroundService: BackgroundService) { }

	ngOnInit() {
	}

	get count(){
		return this.backgroundService.getUrlItems(this.url).length;
	}

	isActive(){
		return (this.count > 0 && !this.backgroundService.isOffCanvasOpen()) ? true: false;
	}

	openOffCanvas(){
		this.backgroundService.toggleOffCanvas('open');
	}
}
