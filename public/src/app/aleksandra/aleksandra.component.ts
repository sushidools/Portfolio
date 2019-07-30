import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aleksandra',
  templateUrl: './aleksandra.component.html',
  styleUrls: ['./aleksandra.component.css']
})
export class AleksandraComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Aleksandra Dooley');
  }

  ngOnInit() {
  }

}
