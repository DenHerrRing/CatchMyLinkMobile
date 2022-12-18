import {Injectable} from '@angular/core';
import {LinkType} from "../../models/link-type";
import {IconsEnum} from "../../models/icons.enum";
import {siDiscord, siFacebook, siGoogle, siLinkedin, SimpleIcon, siTwitch, siTwitter, siXing} from "simple-icons";
import {IconService} from "../icon/icon.service";

@Injectable({
    providedIn: 'root'
})
export class CoreService {
    IconsEnum = IconsEnum
    enableNfc: boolean = false
    enableQr: boolean = true

    enableNavigationNfc: boolean = false
    enableNavigationQr: boolean = false
    limitLinks: boolean = true
    limitOfLinks: number = 15
    constructor() {
    }

}
