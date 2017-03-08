import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
    imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule]
})
export class PipeModule { }
