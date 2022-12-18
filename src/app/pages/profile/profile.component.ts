import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
    selector: 'page-profile',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

}
