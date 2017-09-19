import { Component, OnInit } from '@angular/core';
import { Icon } from '../icon/icon.model';
import { ICON_DATA } from '../data';

@Component({
  selector: 'icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
    list: Icon[];

    constructor() { }

    ngOnInit() {
        this.list = ICON_DATA;
    }

}
