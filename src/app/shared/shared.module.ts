import {NgModule} from '@angular/core';


import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        TranslateModule.forChild({})
    ],
    providers: [],
    bootstrap: [],
    exports: [TranslateModule]
})
export class SharedModule {
}
