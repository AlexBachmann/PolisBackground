import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tekkl-link-item',
	templateUrl: './link-item.component.html',
	styleUrls: ['./link-item.component.sass']
})
export class LinkItemComponent implements OnInit {
	@Input() item
	constructor() { }

	ngOnInit() {
	}

}
