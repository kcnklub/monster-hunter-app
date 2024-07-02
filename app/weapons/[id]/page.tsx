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
            <div className='flex'>
                <div className='w-1/4'></div>
                <div
                    className='flex justify-center m-4 bg-[#cdd6f4] w-1/4 rounded-md'
                >
                    {assets && assets.image &&
                        <Image
                            src={weapon.assets.image}
                            alt='no image for you'
                            width={200}
                            height={200}>
                        </Image>
                    }
                </div>
                <div
                    className='m-4 p-4 bg-[#313244] rounded-md h-200 w-1/4 shadow-md'
                >
                    <h2 className='text-2xl font-semibold'>Details</h2>
                    <ul>
                        <li><b>Rarity:</b> {weapon.rarity}</li>
                        <li><b>Type:</b> {weapon.type}</li>
                        <li><b>Attack:</b> {weapon.attack.display} ({weapon.attack.raw})</li>
                        {
                            weapon.slots && weapon.slots.length > 0 &&
                            <li><b>Slots:</b> {weapon.slots.map(slot => slot.rank).join(', ')}</li>
                        }
                        {
                            weapon.elements && weapon.elements.length > 0 &&
                            <li><b>Elements:</b> {weapon.elements.map(element => element.type).join(', ')}</li>
                        }
                    </ul>
                </div>
                <div className='w-1/4'></div>
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
