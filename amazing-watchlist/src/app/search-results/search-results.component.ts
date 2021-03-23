import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';

import {DummyService} from '../services/dummy.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  shows: Array<Show>;
  query: string;
  constructor(private dummyService: DummyService, private route: ActivatedRoute) {
    this.query = this.route.snapshot.params.query;

  }

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {this.query = p.query; });
    this.dummyService.getShows().subscribe((s) => { this.shows = s; });
  }

}
