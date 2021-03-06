import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private foo: Router) { }

  ngOnInit(): void {
  }

  startOver() {
    // this.location. clear everything out ? ? ?
    this.foo.navigateByUrl("/");
  }
}
