import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
show: Show;
  constructor() {
    this.show = new Show({
      name: 'Doctor Who',
      language: 'English',
      genres: ['Sci-Fi', 'Action', 'Adventure'],
      id: 210,
      summary: 'A show about a time travelling alien called The Doctor.',
      status: 'ongoing',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
    });
  }
  ngOnInit(): void {
  }

}
