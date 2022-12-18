import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Link} from "../../../core/models/link";
import {FormsModule} from "@angular/forms";
import {StorageService} from "../../../core/services/storage/storage.service";

@Component({
  selector: 'modal-delete-link',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './delete-link-modal.component.html',
  styleUrls: ['./delete-link-modal.component.css']
})
export class DeleteLinkModalComponent {
    @Input() isVisible: boolean = false
    @Input() link!: Link
    @Output() closeModal = new EventEmitter<boolean>()

    constructor(private storageService: StorageService) {
    }

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }

    onClickDeleteLink(link: Link): void {
        this.storageService.deleteLink(link)
        this.onClickCloseModal()
    }
}
