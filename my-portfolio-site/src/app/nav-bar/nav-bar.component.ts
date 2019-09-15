import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  goToAbout() {
    this.contentService.showAbout();
  }

  goToProjects() {
    this.contentService.showProjects();
  }
  goToContact() {
    this.contentService.showContact();
  }
}
