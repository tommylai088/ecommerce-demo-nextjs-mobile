export interface Review {
    id: number;
    name: string;
    description: string;
    date: string;
    rating: number;
}

export const productReviews: Review[] = [
    {
        id: 1,
        name: 'Tommy',
        description: 'Good',
        date: '3 days ago',
        rating: 4
    },
    {
        id: 2,
        name: 'Ben',
        description: 'Good',
        date: '5 days ago',
        rating: 5
    },
    {
        id: 3,
        name: 'Kitty',
        description: 'Good',
        date: '7 days ago',
        rating: 3
    },
    {
        id: 4,
        name: 'Charlie',
        description: 'Good',
        date: '12 days ago',
        rating: 4
    },
]