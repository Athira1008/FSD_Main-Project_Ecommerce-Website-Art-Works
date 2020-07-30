export class ProductModel{
    constructor(
        public _id: string,
        public productId: number,
        public productName: string,
        public artistName:string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public status: string,
        public imageUrl: string){}
}