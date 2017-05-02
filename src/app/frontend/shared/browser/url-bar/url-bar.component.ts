import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocumentRef } from '../../../../shared/browser/document-ref.service';

@Component({
	selector: 'tekkl-url-bar',
	templateUrl: './url-bar.component.html',
	styleUrls: ['./url-bar.component.sass']
})
export class UrlBarComponent implements OnInit {
	@Input() url: string
	@Output('urlChange') urlChangeEmitter: EventEmitter<string> = new EventEmitter()
	constructor(private documentRef: DocumentRef) { }

	ngOnInit() {
		//this.checkForUrlChange();
	}
	checkInput(event){
		if(event.key == "Enter"){
			this.urlChangeEmitter.emit(this.url);
		}
	}
	checkForUrlChange(){
		var document = this.documentRef.nativeDocument;
		var url = document.referrer;
		if(url !== this.url){
			this.url = url;
		}
		setTimeout(() => this.checkForUrlChange(), 500);
	}
}
