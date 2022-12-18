import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link} from "../../../core/models/link";
import {LinkElementComponent} from "../link-element/link-element.component";
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
    selector: 'component-link-type-list',
    standalone: true,
    imports: [CommonModule, LinkElementComponent, AngularSvgIconModule],
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {

    @Input() links!: Link[];

    constructor() {

    }

}
