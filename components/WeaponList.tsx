"use client";

import Link from 'next/link';
import { Weapon, WeaponType } from '@/models/weapon';

export function WeaponList({ weapons, search, filter }:
    {
        weapons: Weapon[],
        search: string,
        filter: WeaponType | null
    }) {


    return (
        <div className='flex flex-wrap'>
            {
                weapons
                    .filter(weapon => weapon.name.toLowerCase().includes(search.toLowerCase()))
                    .filter(weapon => filter === null || weapon.type === filter)
                    .map(weapon => (
                        <WeaponPreview key={weapon.id} weapon={weapon} />
                    ))
            }
        </div>
    )
}

function WeaponPreview({ weapon }: { weapon: Weapon }) {
    let assets = weapon.assets;
    return (
        <Link href={`/weapons/${weapon.id}`}>
            <div className="w-48 h-48 m-2 content-center shadow-md">
                <h2 className='flex flex-row justify-center'>
                    {assets && assets.icon &&
                        <img
                            src={weapon.assets.icon}
                            alt='no image for you'
                            width={20}
                            height={20}
                        >
                        </img>
                    }
                    {weapon.name}
                </h2>
                <div className='flex flex-row justify-center'>
                    {assets && assets.image &&
                        <img
                            src={weapon.assets.image}
                            alt='no image for you'
                            width={125}
                            height={125}
                        >
                        </img>
                    }
                </div>
            </div>
        </Link>
    );
}
