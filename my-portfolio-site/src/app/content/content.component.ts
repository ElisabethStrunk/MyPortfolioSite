import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  triggerOutlook() {
    window.location.href = "mailto:elisabeth.maria.strunk@gmail.com";
  } 
}
