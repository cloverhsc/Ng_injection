import { Injectable } from '@angular/core';

import { HEROES} from './mock-heroes';
import { Logger } from '../logger.service';
import {EvenBetterLogger}   from '../even-better-logger.service';

@Injectable()
export class HeroService {
    constructor(
        private logger: Logger,
        private betterlog: EvenBetterLogger,
        private isAuthorized: boolean) { }
    getHeroes() {
        let auth = this.isAuthorized ? 'authorized' : 'unauthorized';
        this.logger.log(`Getting heroes for ${auth} user.`);
        this.betterlog.log('Getting heroe by Better log ....');
        return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
    }
}
