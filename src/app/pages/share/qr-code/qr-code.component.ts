import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QRCodeModule} from "angularx-qrcode";

@Component({
  selector: 'page-share-qr-code',
  standalone: true,
    imports: [CommonModule, QRCodeModule],
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {

}
