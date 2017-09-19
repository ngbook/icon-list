import { Component, Input } from '@angular/core';
import { Icon } from './icon.model';

@Component({
  selector: 'icon-item',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input()
    data: Icon;

    constructor() { }

}
