import { Component } from '@angular/core';

import { Logger } from './logger.service';
import { UserService }  from './user.service';
import { EvenBetterLogger}  from './even-better-logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      { provide: Logger, useClass: Logger},
      UserService,
      {provide: EvenBetterLogger, useClass: EvenBetterLogger}
  ],
})
export class AppComponent {
  title = 'app works!';
}
