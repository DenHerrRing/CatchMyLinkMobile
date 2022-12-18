import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";
import {Link} from "../../../core/models/link";
import {LinkListComponent} from "../../components/link-list/link-list.component";
import {StorageService} from "../../../core/services/storage/storage.service";
import {NewLinkModalComponent} from "../../modals/new-link-modal/new-link-modal.component";

@Component({
    selector: 'page-links',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule, LinkListComponent, NewLinkModalComponent],
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent {

    showNewLinkModal: boolean = false;

    constructor(public storageService: StorageService) {
    }

    saveLink(link: Link) {
        this.storageService.createLink(link)
    }

}
