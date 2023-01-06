import { Injectable } from '@angular/core';

import { Post } from 'src/app/models/post.models';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
    Post = [
    new Post ('123A', 'bright','numbers123'),
    new Post ('123B', 'bright','numbers1234'),
    new Post ('123C', 'bright','numbers1232'),
    new Post ('123D', 'bright','numbers1231'),
    new Post ('123E', 'bright','numbers12354'),
    new Post ('123G', 'bright','numbers123HH'),
    new Post ('123H', 'bright','HEllo'),
  ]; 
  
  constructor() { }
}
