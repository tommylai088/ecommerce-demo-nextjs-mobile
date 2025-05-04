interface OrderStatus {
    id: number;
    name: string;
    isActive: boolean;
}

export const orderStatus: OrderStatus[] = [
    {
        id: 1,
        name: 'Processing',
        isActive: true
    },
    {
        id: 2,
        name: 'Shipped',
        isActive: false
    },
    {
        id: 3,
        name: 'Delivered',
        isActive: false
    },
    {
        id: 4,
        name: 'Returned',
        isActive: false
    },
    {
        id: 5,
        name: 'Cancelled',
        isActive: false
    }
]