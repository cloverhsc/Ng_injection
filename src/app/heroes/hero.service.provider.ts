import {HeroService} from './hero.service';
import {UserService} from '../user.service';
import {Logger} from '../logger.service';
import { EvenBetterLogger }   from '../even-better-logger.service';

let heroServiceFactory =
    ( logger: Logger, betterlogger: EvenBetterLogger, userService: UserService) => {
            return new HeroService(logger, betterlogger, userService.user.isAuthorized);
    };

export let heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, EvenBetterLogger, UserService]
};
