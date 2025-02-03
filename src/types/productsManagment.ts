
// export type TBicycleBrand = 'Duranta' | 'Atlas' | 'Hero' | 'Phoenix' | 'Tata Stryder' | 'Avon Cycles' | 'BTwin' | 'Giant' | 'Cannondale' | 'Merida' | 'Suzuki' | 'Bajaz' | 'Royel in fild';

// export type TBicycleType = 'Road' | 'Mountain' | 'Hybrid' | 'Electric';

// export type TBicyclestatus = 'Stock' | 'Stock Out';

export interface TBicycle {
    _id: string;
    name: string;
    brand: string
    price: number;
    model: string,
    type: string
    description: string;
    quantity: number;
    status: string;
    isDeleted: boolean;
    bicycleImage?: string
}