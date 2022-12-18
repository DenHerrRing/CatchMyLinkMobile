import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link} from "../../../core/models/link";
import {FormsModule} from "@angular/forms";
import {IconsEnum} from "../../../core/models/icons.enum";
import {CoreService} from "../../../core/services/core/core.service";
import {LinkTypeService} from "../../../core/services/link-type/link-type.service";
import {LinkType} from "../../../core/models/link-type";

@Component({
    selector: 'modal-new-link',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './new-link-modal.component.html',
    styleUrls: ['./new-link-modal.component.css']
})
export class NewLinkModalComponent implements OnInit {
    @Input() isVisible: boolean = false
    newLink!: Link
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
        this.newLink.linkType = this.linkTypeService.getLinkTypeByIconEnumKey(iconEnumKey)
        this.newLink.name = this.newLink.linkType.name
    }

    ngOnInit(): void {
        this.newLink = new Link()
        this.newLink.linkType = this.linkTypeService.getLinkTypeByIconEnumKey(IconsEnum.FACEBOOK)
        this.newLink.accountName = ''
    }
}
