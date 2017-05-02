import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'tekkl-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.sass'],
	encapsulation: ViewEncapsulation.None
})
export class AccordionItemComponent implements OnInit {
	@Input() item
	open:boolean = false
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}
	toggle(){
		this.open = !this.open;
	}
	get text(){
		return this.sanitizer.bypassSecurityTrustHtml(this.item.text);
	}
}	
