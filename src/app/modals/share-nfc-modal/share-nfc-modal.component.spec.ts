import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShareNfcModalComponent} from './share-nfc-modal.component';

describe('ShareNfcModalComponent', () => {
    let component: ShareNfcModalComponent;
    let fixture: ComponentFixture<ShareNfcModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ShareNfcModalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ShareNfcModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
