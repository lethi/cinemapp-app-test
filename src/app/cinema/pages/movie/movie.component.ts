import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Movie } from '../../shared/movie';
import { CinemaService } from '../../shared/cinema.service';

/** @todo Manage loading */
@Component({
  template: `
    <div>
      <div *ngIf="movie$ | async as movie; else loading">
        <cinemapp-movie-details [movie]="movie"></cinemapp-movie-details>
        <cinemapp-movie-schedules [schedulesGroups]="movie.schedulesGroups"></cinemapp-movie-schedules>
      </div>
      <template #loading>
        <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
      </template>
    </div>
  `,
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(protected cinema: CinemaService, protected route: ActivatedRoute) { }

  ngOnInit() {

    /**
     * @todo Upgrade to dynamic parameter
     * @todo Use async pipe
     * @todo Manage offline errors
     */

    this.movie$ = this.route.paramMap.pipe(
      map((paramMap) => Number.parseInt(paramMap.get('id') || '1')),
      switchMap((id) => this.cinema.getMovie(id))
    );

  }

}
