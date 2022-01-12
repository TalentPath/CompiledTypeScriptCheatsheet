export interface GasInfo {
    size:number
    parentStar:string
    gases:string[]
}

export interface RockyInfo {
    size:number
    parentStar:string
    coreComponents:string[]
}

export interface IceInfo {
    size:number
    parentStar:string
    fluidElements:string[]
}

export type Info = GasInfo | RockyInfo | IceInfo