import {LinkType} from "./link-type";

export class Link {
    id?: number
    name?: string
    accountName?: string
    linkType: LinkType = new LinkType()
    active: boolean = true

    constructor() {
    }
}
