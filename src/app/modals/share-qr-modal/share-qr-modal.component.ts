import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {QRCodeModule} from "angularx-qrcode";
import {Link} from "../../../core/models/link";

@Component({
    selector: 'modal-share-qr',
    standalone: true,
    imports: [CommonModule, FormsModule, QRCodeModule],
    templateUrl: './share-qr-modal.component.html',
    styleUrls: ['./share-qr-modal.component.css']
})
export class ShareQrModalComponent {
    @Input() isVisible: boolean = false
    @Input() link!: Link
    @Output() closeModal = new EventEmitter<boolean>()

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }

    getUrlData(): string {
        return `${this.link.linkType.preUrl}/${this.link.accountName}`
    }
}
