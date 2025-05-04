import { GiHoodie, GiShorts, GiSonicShoes } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";

interface ProductCategory {
    id: number;
    name: string;
    icon: React.ReactElement;
}

export const productCategories: ProductCategory[] = [
    {
        id: 1,
        name: 'Hoodies',
        icon: <GiHoodie />,
    },
    {
        id: 2,
        name: 'Shorts',
        icon: <GiShorts />
    },
    {
        id: 3,
        name: 'Shoes',
        icon: <GiSonicShoes />
    },
    {
        id: 4,
        name: 'Bags',
        icon: <IoBagSharp />
    },
]