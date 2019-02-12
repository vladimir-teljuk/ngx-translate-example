import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './child.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [ChildComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ChildModule {
}
