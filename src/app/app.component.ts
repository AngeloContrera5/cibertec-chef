import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'damii-proyecto';

  headerFooter: any;
  
constructor(
  private router: Router,
) { }

ngOnInit() {
  this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.headerFooter = (event.url !== '/login')
      }
    });
}
}
