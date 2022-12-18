import {Injectable} from '@angular/core';
import {LinkType} from "../../models/link-type";
import {IconService} from "../icon/icon.service";
import {IconsEnum} from "../../models/icons.enum";
import {siDiscord, siFacebook, siGoogle, siLinkedin, SimpleIcon, siTwitch, siTwitter, siXing} from "simple-icons";

@Injectable({
    providedIn: 'root'
})
export class LinkTypeService {
    linkTypes: LinkType[] = []

    constructor(private iconService: IconService) {
        this.createLinkTypes();
        console.log(this.linkTypes)
    }

    private createLinkTypes(): void {
        // Hier werden die verfügbaren Icons in der App definiert!
        this.registerLinkType('Facebook', 'https://www.facebook.com', IconsEnum.FACEBOOK, siFacebook)
        this.registerLinkType('Google', 'https://www.google.com', IconsEnum.GOOGLE, siGoogle)
        this.registerLinkType('Twitter', 'https://www.twitter.com', IconsEnum.TWITTER, siTwitter)
        this.registerLinkType('LinkedIn', 'https://www.linkedin', IconsEnum.LINKEDIN, siLinkedin)
        this.registerLinkType('Xing', 'https://www.xing.de', IconsEnum.XING, siXing)
        this.registerLinkType('discord', 'https://www.discord.com', IconsEnum.DISCORD, siDiscord)
        this.registerLinkType('Twitch', 'https://www.twitch.com', IconsEnum.TWITCH, siTwitch)
    }

    private registerLinkType(name: string, preUrl: string, iconEnumKey: IconsEnum, simpleIcon: SimpleIcon): void {
        const linkType = new LinkType();
        linkType.setProperties(name, preUrl, iconEnumKey, simpleIcon)
        this.iconService.registerSvgIcon(iconEnumKey, simpleIcon)
        this.linkTypes.push(linkType)
    }

    public getLinkTypeByIconEnumKey(iconEnumKey: IconsEnum): LinkType {
        return this.linkTypes.find( element => {
            return element.iconEnumKey === iconEnumKey
        }) as LinkType
    }
}
