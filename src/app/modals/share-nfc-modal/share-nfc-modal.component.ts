import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'modal-share-nfc',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './share-nfc-modal.component.html',
    styleUrls: ['./share-nfc-modal.component.css']
})
export class ShareNfcModalComponent {
    @Input() isVisible: boolean = false
    @Output() closeModal = new EventEmitter<boolean>()

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }
}
