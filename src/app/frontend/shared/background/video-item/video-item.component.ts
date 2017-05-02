import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'tekkl-video-item',
	templateUrl: './video-item.component.html',
	styleUrls: ['./video-item.component.sass']
})
export class VideoItemComponent implements OnInit {
	@Input() item
	open:boolean = false
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		
	}
	toggle(){
		this.open = !this.open;
	}
	get safeUrl(){
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.item.url);
	}
}
