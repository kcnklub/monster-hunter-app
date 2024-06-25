import { Weapon } from '@models/weapon';
import Image from 'next/image';

export default async function WeaponDetail({ params, searchParams }: {
    params: { id: string },
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    const weapon = await getWeapons(params.id);

    let search = searchParams?.search || "nothing";

    return (
        <div>
            <WeaponPreview weapon={weapon}></WeaponPreview>
            <label>
                <input id='input' type='text'></input>
            </label>
            <div dangerouslySetInnerHTML={{ __html: search }} />
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
