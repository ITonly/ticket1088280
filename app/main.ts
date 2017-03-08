require('reflect-metadata');
require('@angular/platform-browser');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');

require('nativescript-angular/platform-static');
require('nativescript-angular/forms');
require('nativescript-angular/router');

import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app.module';

const platform = platformNativeScriptDynamic().bootstrapModule(AppModule);
