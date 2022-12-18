import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link} from "../../../core/models/link";
import {FormsModule} from "@angular/forms";
import {IconsEnum} from "../../../core/models/icons.enum";
import {LinkTypeService} from "../../../core/services/link-type/link-type.service";

@Component({
    selector: 'modal-edit-link',
    standalone: true,
    imports: [CommonModule,  FormsModule],
    templateUrl: './edit-link-modal.component.html',
    styleUrls: ['./edit-link-modal.component.css']
})
export class EditLinkModalComponent implements OnInit {
    @Input() isVisible: boolean = false
    @Input() link!: Link
    @Output() closeModal = new EventEmitter<boolean>()
    @Output() saveLink = new EventEmitter<Link>()

    constructor(public linkTypeService: LinkTypeService) {
    }

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }

    onClickSaveLink(link: Link): void {
        this.saveLink.emit(link)
        this.onClickCloseModal()
    }

    setNewLinkType(iconEnumKey: IconsEnum): void {
        this.link.linkType = this.linkTypeService.getLinkTypeByIconEnumKey(iconEnumKey)
        this.link.name = this.link.linkType.name
    }

    ngOnInit(): void {

    }
}
