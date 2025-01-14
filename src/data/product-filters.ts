interface SortByOptions {
    recommended: string;
    newest: string;
    lowest: string;
    highest: string;
}

interface PriceOptions {
    min: string;
    max: string;
}

export interface ProductFilters {
    sortBy: SortByOptions;
    price: PriceOptions;
}

export interface ProductFilterLabels {
    sortBy: string;
    price: string;
}

export const productFilters: ProductFilters = {
    sortBy: {
        recommended: 'Recommended',
        newest: 'Newest',
        lowest: 'Lowest - Highest Price',
        highest: 'Highest - Lowest Price',
    },
    price: {
        min: 'Min',
        max: 'Max',
    },
};

export const productFilterLabels: ProductFilterLabels = {
    sortBy: 'Sort by',
    price: 'Price',
}