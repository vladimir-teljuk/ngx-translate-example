import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

    public exampleArray = ['item_one, item_two, item_three, item_four'];

    constructor(private translate: TranslateService) {
    }
    ngOnInit() {
        this.translate.get('item_one').subscribe(res => console.log(res));
    }

}
