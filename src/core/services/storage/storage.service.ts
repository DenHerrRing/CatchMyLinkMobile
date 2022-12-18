import {Injectable} from '@angular/core';
import {Link} from "../../models/link";
import {IconsEnum} from "../../models/icons.enum";
import {LinkTypeService} from "../link-type/link-type.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private links: Link[] = []

    constructor(private LinkTypeService: LinkTypeService) {
        // For mock only!
        let newLink = new Link()
        newLink.linkType = LinkTypeService.getLinkTypeByIconEnumKey(IconsEnum.DISCORD)
        newLink.name = newLink.linkType.name
        newLink.accountName = 'DenHerrRing'
        newLink.id = 1
        this.links.push(newLink)

        newLink = new Link()
        newLink.linkType = LinkTypeService.getLinkTypeByIconEnumKey(IconsEnum.FACEBOOK)
        newLink.name = newLink.linkType.name
        newLink.accountName = 'DenHerrRing'
        newLink.id = 2
        this.links.push(newLink)

        newLink = new Link()
        newLink.linkType = LinkTypeService.getLinkTypeByIconEnumKey(IconsEnum.TWITTER)
        newLink.name = newLink.linkType.name
        newLink.accountName = 'DenHerrRing'
        newLink.id = 3
        this.links.push(newLink)

        newLink = new Link()
        newLink.linkType = LinkTypeService.getLinkTypeByIconEnumKey(IconsEnum.TWITCH)
        newLink.name = newLink.linkType.name
        newLink.accountName = 'mrcrunsh'
        newLink.id = 4
        this.links.push(newLink)
    }

    public getLinks(): Link[] {
        return this.links
    }

    public createLink(newLink: Link): void {
        console.log(this.links)
        this.links.push(newLink)
        console.log(this.links)
    }

    public deleteLink(link: Link): void {
        this.links = this.links.filter( element => {
            return element.id !== link.id
        })
    }
}
