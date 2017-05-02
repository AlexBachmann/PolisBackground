import { Component, OnInit, Input } from '@angular/core';
import { BackgroundService } from '../background.service';

@Component({
	selector: 'tekkl-offcanvas',
	templateUrl: './offcanvas.component.html',
	styleUrls: ['./offcanvas.component.sass']
})
export class OffcanvasComponent implements OnInit {
	@Input() url: string;
	constructor(private backgroundService: BackgroundService) { }

	ngOnInit() {}

	get items(){
		return this.backgroundService.getUrlItems(this.url);
	}

	get count(){
		return this.items.length;
	}

}
