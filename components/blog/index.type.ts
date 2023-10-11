export type VNode = {
    level: number,
    tagName: string,
    children: VNode[],
    isChildren: Boolean,
    text:string,
    href:string
}