import {Component} from '@angular/core';
import {IconService} from "../core/services/icon/icon.service";
import {CoreService} from "../core/services/core/core.service";
import {StorageService} from "../core/services/storage/storage.service";
import {LinkTypeService} from "../core/services/link-type/link-type.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'MyLinks';

    // Initiate all Services!
    constructor(private iconService: IconService,
                private storageService: StorageService,
                private linkTypesService: LinkTypeService,
                public coreService: CoreService) {}
}
