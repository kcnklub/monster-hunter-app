
export type Weapon = {
    id: number;
    name: string;
    rarity: number;
    assets: WeaponAssets;
}

export type WeaponAssets = {
    icon: string;
    image: string;
}

