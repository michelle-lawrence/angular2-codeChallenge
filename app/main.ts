import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { MainComponent } from './app.main-component';
import { appRouterProviders } from './common/app.routes';

bootstrap(MainComponent, [ HTTP_PROVIDERS, appRouterProviders ])
.catch(err => console.error(err));
