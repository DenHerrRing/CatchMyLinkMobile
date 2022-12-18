import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShareQrModalComponent} from './share-qr-modal.component';

describe('ShareQrModalComponent', () => {
    let component: ShareQrModalComponent;
    let fixture: ComponentFixture<ShareQrModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ShareQrModalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ShareQrModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
