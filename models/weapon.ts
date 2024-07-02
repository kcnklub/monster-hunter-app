
export type Weapon = {
    id: number;
    name: string;
    rarity: number;
    type: WeaponType;
    assets: WeaponAssets;
    attack: Attack
    slots: Slot[]
    elements: Element[]
}

export type WeaponAssets = {
    icon: string;
    image: string;
}

export type Attack = {
    display: number;
    raw: number;
}

export type Slot = {
    rank: number;
}

export type WeaponType = "long-sword" | "great-sword" | "sword-and-shield" | "dual-blades" | "hammer" | "hunting-horn" | "lance" | "gunlance" | "switch-axe" | "charge-blade" | "insect-glaive" | "light-bowgun" | "heavy-bowgun" | "bow";

export type Element = {
    type: ElementType;
    damage: number;
    hidden: boolean;
}

export type ElementType = "fire" | "water" | "thunder" | "ice" | "dragon" | "poison" | "sleep" | "blast" | "paralysis" | "stun";
