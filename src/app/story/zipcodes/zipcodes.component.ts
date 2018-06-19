import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-zipcodes',
	templateUrl: './zipcodes.component.html',
	styleUrls: ['./zipcodes.component.css']
})
export class ZipcodesComponent implements OnInit {

	zipcodes: string[] = [
		"10001",
		"10011",
		"10018",
		"10019",
		"14606",
		"14602",
		"14610",
		"13478"
	]

	currentzip: string = this.zipcodes[0];
	lat: number = 40.75368539999999;
	lng: number = -73.9991637;
	defaultzoom: number = 15;

	constructor(
		public us: UserService,
		private http: HttpClient) { }

	ngOnInit() {
	}

	goNext(): void {
		if (this.us.getZipcode() !== this.currentzip) {
			this.us.setZipcode(this.currentzip);
			// http update
		}
		console.log(this.us.getZipcode());
		this.us.current += 1;
	}
	goBack(): void {
	}

	changeZip(zip: string) {
		this.http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + zip)
			.toPromise().then(data => {
				// console.log(data['results'][0]);
				let obj = data['results'][0];
				obj = obj.geometry.location;
				console.log(obj.lat);
				console.log(obj.lng);
				this.lat = obj.lat;
				this.lng = obj.lng;

			}).catch(p => console.log(p));
	}
=======
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-zipcodes',
  templateUrl: './zipcodes.component.html',
  styleUrls: ['./zipcodes.component.css']
})
export class ZipcodesComponent implements OnInit {

  zipcodes: string[] = [
    "10001",
    "10011",
    "10018",
    "10019",
    "14606",
    "14602",
    "14610",
    "13478"
  ]

  currentzip: string = this.zipcodes[0];

  constructor(public us: UserService) { }

  ngOnInit() {
  }

  goNext(): void {
    if(this.us.getZipcode() !== this.currentzip) {
      this.us.setZipcode(this.currentzip);
      // http update
    }
    console.log(this.us.getZipcode());
    this.us.current += 1;
  }
  goBack(): void {
  }
>>>>>>> origin/Miguel
}

