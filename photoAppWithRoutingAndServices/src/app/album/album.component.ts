import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import albumData from './album.data';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers:[ // izolowane uslugi dla komponentu
    // AlbumService,
    // { provide: 'AlbumData', useValue: albumData },
  ]
})
export class AlbumComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
