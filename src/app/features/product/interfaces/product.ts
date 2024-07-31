export interface IProduct{
    id?: number;
    code: string;
    name: string;
    group?: IGroup;
    unit: IUnit;
    salePrice: number;
    stock?: number | null;
    image?: string | null;
}

export interface AddProductDto{
    id?: number;
    code: string;
    name: string;
    groupId?: number | null;
    unitId: number;
    salePrice: number;
    stock?: number | null;
    image?: string | null;
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

export interface UpdateProductDto extends AddProductDto {}