interface ColorOptions {
    red: string;
    orange: string;
    black: string;
    yellow: string;
    blue: string;
}

interface SizeOptions {
    S: string;
    M: string;
    L: string;
    XL: string;
}

export interface ProductInventoryOptions {
    color: ColorOptions;
    size: SizeOptions;
}

export interface ProductInventoryOptionLabels {
    color: string;
    size: string;
}

export const productInventoryOptions: ProductInventoryOptions = {
    color: {
        red: 'Red',
        orange: 'Orange',
        black: 'Black',
        yellow: 'Yellow',
        blue: 'Blue',
    },
    size: {
        S: 'S',
        M: 'M',
        L: 'L',
        XL: 'XL',
    },
};

export const productInventoryOptionLabels: ProductInventoryOptionLabels = {
    color: 'Color',
    size: 'Size'
}