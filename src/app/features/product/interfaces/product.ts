export interface IProduct{
    code: string;
    name: string;
    groupId: number | null;
    unitId: number;
    salePrice: number;
    stock: number | null;
    image: string | null;
}