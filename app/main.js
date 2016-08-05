"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_main_component_1 = require('./app.main-component');
var app_routes_1 = require('./common/app.routes');
platform_browser_dynamic_1.bootstrap(app_main_component_1.MainComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map