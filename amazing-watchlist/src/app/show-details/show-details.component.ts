import {Component, OnInit} from '@angular/core';
import { Episode } from '../models/episode.model';
import { Show } from '../models/show.model';
import {ActivatedRoute} from '@angular/router';
import {DummyService} from '../services/dummy.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: Show;
  showId: string;
  episodes: Array<Episode>;
  tableHeaders: Array<string>;
  constructor(private route: ActivatedRoute, private dummyService: DummyService) {
    this.tableHeaders = ['season', 'episode', 'name', 'aired', 'summary'];
    }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.dummyService.getShow(p.id).subscribe((show) => { this.show = show; });
      this.dummyService.getEpisodes().subscribe((eps)  => { this.episodes = eps; });
    });
  }
  }
