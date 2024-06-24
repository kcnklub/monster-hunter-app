"use client";
import { Weapon } from '@models/weapon';
import Image from 'next/image';

export default async function WeaponDetail({ params }: { params: { id: string } }) {
    const weapon = await getWeapons(params.id);

    function xssOnClick(event: any) {
        console.log("ready to be vulnerable");
    }

    return (
        <div>
            <WeaponPreview weapon={weapon}></WeaponPreview>
            <label>
                <input type='text'></input>
            </label>
            <button onClick={xssOnClick}>send</button>
        </div>
    );
}

function WeaponPreview({ weapon }: { weapon: Weapon }) {
    let assets = weapon.assets;
    return (
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
