export interface Istd{
    fname : string,
    lname : string,
    email : string,
    contact : number
}

export type IpCatg = "Product" | "Catlog"
export interface IproCat {
    pName : string,
    pDescription : string,
    pCatg : IpCatg
}