import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

	summary: string = `
	\nzipcode ${(this.us.getZipcode())}
	\nspouse ${(this.us.getSpouse())}
	\nchildren ${(this.us.getChildren())}
	\nage ${(this.us.getAge())}
	\ngender ${(this.us.getGender())}
	\nsmoker ${(this.us.getSmoker())}
	\nhbp ${(this.us.getHBP())}
	\diabetes ${(this.us.getDiabetes())}
	\nsurgery ${(this.us.getSurgery())}
	\nallergy ${(this.us.getAllergy())}
	\nplan_mult ${(this.us.getPlanMult())}
	\nplan_bonus ${(this.us.getPlanBonus())}`;
<<<<<<< HEAD
	
=======
>>>>>>> origin/Miguel

	info: any[];
	quote: number;


	constructor(public us: UserService) { }

	ngOnInit() {
<<<<<<< HEAD
		
=======
		// this.info.push(this.us.getZipcode());
		// this.info.push(this.us.getSpouse());
		// this.info.push(this.us.getChildren());
		// this.info.push(this.us.getAge());
		// this.info.push(this.us.getGender());
		// this.info.push(this.us.getSmoker());
		// this.info.push(this.us.getHBP());
		// this.info.push(this.us.getDiabetes());
		// this.info.push(this.us.getSurgery());
		// this.info.push(this.us.getAllergy());
		// this.info.push(this.us.getPlanMult());
		// this.info.push(this.us.getPlanBonus());
	
		// this.summary = this.info.join(", ");
		// console.log(this.summary);
		// console.log(this.us.sanauser);
>>>>>>> origin/Miguel
	}

	goBack(): void {
		this.us.current -= 1;
	}
<<<<<<< HEAD
=======

	printThis() {
		
		var win = window.open();
		self.focus();
		win.document.open();
		win.document.write('<' + 'html' + '><' + 'body' + '>');
		win.document.write('<h1 style="text-align:center">Quote Summary</h1>');
		win.document.write('<br> <h4 style="padding-left:2em;">Primary Guest: ' + this.us.getFirstname() + ' ' + this.us.getLastname() + '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Associates: ' + (this.us.getChildren()+this.us.getSpouse())+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Demographic Information: </h4>');
		win.document.write(' <h4 style="padding-left:5em">Gender: ' + this.us.getGender()+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Age: ' + this.us.getAge()+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Smoker: ' + (this.us.getSmoker() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">High Blood Pressure: ' + (this.us.getHBP() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Previous Surgery: ' + (this.us.getSurgery() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Allergies: ' + (this.us.getAllergy() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Diabetic: ' + (this.us.getDiabetes() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Total Insurance Quote Price: ' + this.us.getQuote()+ '</h4>');
		win.document.write('<' + '/body' + '><' + '/html' + '>');
		win.document.close();
		win.print();
		win.close();
	}
>>>>>>> origin/Miguel
}
