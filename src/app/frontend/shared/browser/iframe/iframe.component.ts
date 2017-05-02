import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'tekkl-iframe',
	templateUrl: './iframe.component.html',
	styleUrls: ['./iframe.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IframeComponent implements OnInit {
	@Input() url: string
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}
	get safeUrl(){
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
	}
}
