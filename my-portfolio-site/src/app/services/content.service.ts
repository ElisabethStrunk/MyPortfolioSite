import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  showAboutContent = true;
  showProjectsContent = false;
  showContactContent = false;

  constructor() { }

  showAbout() {
    this.showAboutContent = true;
    this.showProjectsContent = false;
    this.showContactContent = false;
  }

  showProjects() {
    this.showAboutContent = false;
    this.showProjectsContent = true;
    this.showContactContent = false;
  }

  showContact() {
    this.showAboutContent = false;
    this.showProjectsContent = false;
    this.showContactContent = true;
  }
}
