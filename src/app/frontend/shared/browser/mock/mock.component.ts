import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'tekkl-mock',
	templateUrl: './mock.component.html',
	styleUrls: ['./mock.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockComponent implements OnInit {
	@Input() url: string
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}
	get imageUrl(){
		var imageUrl = '/assets/public/images/frontend/mocks/zeit.jpg';
		switch(this.url){
			case 'http://www.zeit.de':
			case 'http://zeit.de':
			case 'www.zeit.de':
			case 'zweit.de':
				imageUrl = '/assets/public/images/frontend/mocks/zeit.jpg';
				break;
			case 'http://www.t3n.de':
			case 'http://t3n.de':
			case 'www.t3n.de':
			case 't3n.de':
				imageUrl = '/assets/public/images/frontend/mocks/t3n.jpg';
				break;
			default: 
				imageUrl = '/assets/public/images/frontend/mocks/junge-freiheit.jpg';
				break;
		}
		return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
	}
}