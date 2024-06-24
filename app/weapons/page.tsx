import CategoryLayout from '@/components/CategoryLayout';
import Image from 'next/image';
import Link from 'next/link';

export default async function Weapons() {
    const weapons = await getWeapons();
    return (
        <div>
            <CategoryLayout category="Weapons">
                {
                    weapons.map(weapon => (
                        <WeaponPreview key={weapon.id} weapon={weapon} />
                    ))
                }
            </CategoryLayout>
        </div>
    );
}


function WeaponPreview({ weapon }: { weapon: Weapon }) {
    let assets = weapon.assets;
    return (
        <Link href={`/weapons/${weapon.id}`}>
            <div className="bg-amber-50 w-48 h-48 m-2 content-center shadow-md">
                <h2 className='flex flex-row justify-center'>
                    {assets && assets.icon &&
                        <Image src={weapon.assets.icon} alt='we are fucked' width={20} height={20}></Image>
                    }
                    {weapon.name}
                </h2>
                <div className='flex flex-row justify-center'>
                    {assets && assets.image &&
                        <Image src={weapon.assets.image} alt='we are fucked' width={125} height={125}></Image>
                    }
                </div>
            </div>
        </Link>
    );
}
async function getWeapons(): Promise<Weapon[]> {
    const response = await fetch('https://mhw-db.com/weapons');
    if (!response.ok) {
        throw new Error('Failed to fetch weapons');
    }
    const weapons = await response.json();
    return weapons as Weapon[];
}


type Weapon = {
    id: number;
    name: string;
    rarity: number;
    assets: WeaponAssets;
}

type WeaponAssets = {
    icon: string;
    image: string;
}
