"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('../app.component');
var routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: ':state/:city', component: app_component_1.AppComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map