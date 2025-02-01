
// export type TBicycleBrand = 'Duranta' | 'Atlas' | 'Hero' | 'Phoenix' | 'Tata Stryder' | 'Avon Cycles' | 'BTwin' | 'Giant' | 'Cannondale' | 'Merida' | 'Suzuki' | 'Bajaz' | 'Royel in fild';

// export type TBicycleType = 'Road' | 'Mountain' | 'Hybrid' | 'Electric';

// export type TBicyclestatus = 'Stock' | 'Stock Out';

export interface TBicycle {
    // id?: Types.ObjectId;
    _id: string;
    name: string;
    // brand: TBicycleBrand;
    brand: string
    price: number;
    model: string,
    // type: TBicycleType
    type: string
    description: string;
    quantity: number;
    // status: TBicyclestatus;
    status: string;
    isDeleted: boolean;
    bicycleImage?: string
}