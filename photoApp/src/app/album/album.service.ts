import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {

  albums = [{
    id: 1,
    name: 'Moje zdjęcia',
    year: 2015,
    type: '',
    favourite: false,
  },
  { 
    id: 2,
    name: 'Fotki z gór',
    year: 2013,
    type: '',
    favourite: true,
  }];
  
  getAlbums(){
    return this.albums;
  }
  constructor() { }

}
