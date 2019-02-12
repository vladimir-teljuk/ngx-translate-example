import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './child.component';
import {SharedModule} from '../shared/shared.module';
import {ChildRoutingModule} from './child-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChildRoutingModule
    ],
    declarations: [ChildComponent],

})
export class ChildModule {
}
