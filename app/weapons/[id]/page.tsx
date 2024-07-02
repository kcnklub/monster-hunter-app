import { Weapon } from '@models/weapon';
import Image from 'next/image';

export default async function WeaponDetail({ params }: {
    params: { id: string },
}) {
    const weapon = await getWeapons(params.id);
    return (
        <div>
            <WeaponPreview weapon={weapon}></WeaponPreview>
        </div>
    );
}

function WeaponPreview({ weapon }: { weapon: Weapon }) {
    let assets = weapon.assets;
    return (
        <div>
            <h1 className='text-4xl flex flex-row justify-center'>
                {assets && assets.icon &&
                    <Image src={weapon.assets.icon} alt='no image for you' width={20} height={20}></Image>
                }
                {weapon.name}
            </h1>
            <div className='flex flex-row justify-center'>
                <div className='flex-auto'>
                    {assets && assets.image &&
                        <Image
                            src={weapon.assets.image}
                            alt='no image for you'
                            width={200}
                            height={200}>
                        </Image>
                    }
                </div>
                <div className='flex-auto'>
                    <ul>
                        <li>Rarity: {weapon.rarity}</li>
                        <li>Type: {weapon.type}</li>
                        <li>Attack: {weapon.attack.display} ({weapon.attack.raw})</li>
                        <li>Slots: {weapon.slots.map(slot => slot.rank).join(', ')}</li>
                        <li>Elements: {weapon.elements.map(element => element.type).join(', ')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

async function getWeapons(id: string): Promise<Weapon> {
    const response = await fetch(`https://mhw-db.com/weapons/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch weapons');
    }
    const weapons = await response.json();
    return weapons as Weapon;
}
