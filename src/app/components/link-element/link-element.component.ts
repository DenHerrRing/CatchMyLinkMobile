import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link} from "../../../core/models/link";
import {AngularSvgIconModule} from "angular-svg-icon";
import {CoreService} from "../../../core/services/core/core.service";
import {ShareQrModalComponent} from "../../modals/share-qr-modal/share-qr-modal.component";
import {ShareNfcModalComponent} from "../../modals/share-nfc-modal/share-nfc-modal.component";
import {EditLinkModalComponent} from "../../modals/edit-link-modal/edit-link-modal.component";
import {DeleteLinkModalComponent} from "../../modals/delete-link-modal/delete-link-modal.component";


@Component({
    selector: 'component-link-type-element',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule, ShareQrModalComponent, ShareNfcModalComponent, EditLinkModalComponent, DeleteLinkModalComponent],
    templateUrl: './link-element.component.html',
    styleUrls: ['./link-element.component.css']
})
export class LinkElementComponent {
    @Input() link!: Link;

    showQrModal: boolean = false
    showNfcModal: boolean = false
    showEditLinkModal: boolean = false;
    showDeleteLinkModal: boolean = false;

    constructor(public coreService: CoreService) {
    }
}
