import {IconsEnum} from "./icons.enum";
import {SimpleIcon} from "simple-icons";

export class LinkType {
    name!: string
    preUrl!: string
    iconEnumKey!: IconsEnum
    icon!: SimpleIcon

    constructor() {
    }

    public setProperties(name: string, preUrl: string, iconEnumKey: IconsEnum, simpleIcon: SimpleIcon): void {
        this.name = name
        this.preUrl = preUrl
        this.iconEnumKey = iconEnumKey
        this.icon = simpleIcon
    }

}
