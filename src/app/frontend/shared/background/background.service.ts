import { Injectable } from '@angular/core';
import UrlKeywordData from './url-keyword-data';
import BackgroundData from './background-data';

@Injectable()
export class BackgroundService {
	private ocState: string = 'closed'
	constructor() { }

	getUrlItems(url:string){
		var keywords = this.getUrlKeywords(url);
		return this.getItems(keywords);
	}
	getUrlKeywords(url:string):string[]{
		var keywords = [];
		var data = UrlKeywordData;
		if(UrlKeywordData[url]){
			keywords = keywords.concat(UrlKeywordData[url]);
		}
		return keywords;
	}
	getItems(keywords: string[]){
		var items = [];
		for(var item of BackgroundData){
			for(var keyword of item.keywords){
				if(keywords.indexOf(keyword) >= 0){
					items.push(item);
				}
			}
		}
		return items;
	}
	toggleOffCanvas(state?:string){
		if(state){
			this.ocState = state;
			return;
		}
		if(this.ocState == 'open'){
			this.ocState = 'closed';
		}else{
			this.ocState = 'open';
		}
	}
	isOffCanvasOpen(){
		return (this.ocState == 'open') ? true : false;
	}
}
