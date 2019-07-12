import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sasha',
  templateUrl: './sasha.component.html',
  styleUrls: ['./sasha.component.css']
})
export class SashaComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Aleksandra Dooley');
  }

  ngOnInit() {
  }

}
