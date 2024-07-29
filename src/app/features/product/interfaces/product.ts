export interface IProduct{
    code: string;
    name: string;
    group: IGroup;
    unit: IUnit;
    salePrice: number;
    stock: number | null;
    image: string | null;
}

export interface IGroup{
    id: number;
    name: string;
}

export interface IUnit{
    id: number;
    unitSymbol: string;
    description: string;
}