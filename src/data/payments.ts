interface PaymentItem {
    id: number;
    cardNo: string;
}

export const payments: PaymentItem[] = [
    {
        id: 1,
        cardNo: '**** 1234',
    },
    {
        id: 2,
        cardNo: '**** 5678',
    },
]