import { Entry } from './entry.model';
import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';

@Injectable()
export class EntryService {
	
	// inject the http service 
	constructor(private http: Http){
		
	}
	
	getEntries(): Promise<Entry[]> {
		return this.http.get('/app/entries')
			.toPromise()
			//parse the json data returned by the server
			.then(response => response.json().data as Entry[]);
	}
}