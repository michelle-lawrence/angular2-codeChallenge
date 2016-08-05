import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: ':state/:city', component: AppComponent}
];
export const appRouterProviders = [
  provideRouter(routes)
];
