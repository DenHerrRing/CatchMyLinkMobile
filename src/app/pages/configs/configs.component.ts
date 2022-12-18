import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
    selector: 'page-configs',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './configs.component.html',
    styleUrls: ['./configs.component.css']
})
export class ConfigsComponent {

}
