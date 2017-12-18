import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {   
                imagePath: 'assets/images/slider1.jpg',
                label: '15/Dec.2017',
                text:
                'Trip to...............place..................'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: '16/Dec.2017',
                text: 
                'Trip to...............place..................'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: '17/Dec.2017',
                text:
                'Trip to...............place..................'
            },
            {
                imagePath: 'assets/images/slider4.jpg',
                label: '18/Dec.2017',
                text:
                'Trip to...............place..................'
            },
            {
                imagePath: 'assets/images/slider5.jpg',
                label: '18/Dec.2017',
                text:
                'Trip to...............place..................'
            }
        );
    }

  ngOnInit() {
  }

}
 