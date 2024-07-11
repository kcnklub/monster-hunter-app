
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


export const WeaponFilters = [
    { value: "long-sword", label: "Long Sword", url: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png" },
    { value: "great-sword", label: "Great Sword", url: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png" },
    { value: "sword-and-shield", label: "Sword and Shield", url: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png" },
    { value: "dual-blades", label: "Dual Blades", url: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png" },
    { value: "hammer", label: "Hammer", url: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png" },
    { value: "hunting-horn", label: "Hunting Horn", url: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png" },
    { value: "lance", label: "Lance", url: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png" },
    { value: "gunlance", label: "Gunlance", url: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png" },
    { value: "switch-axe", label: "Switch Axe", url: "https://assets.mhw-db.com/weapons/switch-axe/icons/ce22fc63e780e33286dc290e5995aa12.f00a8ac99c99c078559939ed9af02e52908ded3d.png" },
    { value: "charge-blade", label: "Charge Blade", url: "https://assets.mhw-db.com/weapons/charge-blade/icons/05ca3341f2c9304ed7b6a01a7c74a225.762ef180b991cfc6a2d36f2ab7010726179c095c.png" },
    { value: "insect-glaive", label: "Insect Glaive", url: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png" },
    { value: "light-bowgun", label: "Light Bowgun", url: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png" },
    { value: "heavy-bowgun", label: "Heavy Bowgun", url: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png" },
    { value: "bow", label: "Bow", url: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png" }
];
