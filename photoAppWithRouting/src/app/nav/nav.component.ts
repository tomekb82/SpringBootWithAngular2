import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  expand = 'false';
  
  constructor() { }

  ngOnInit() {
  }

}
