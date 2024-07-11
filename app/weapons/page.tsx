"use client";

import { useState } from 'react';
import CategoryLayout from '@/components/CategoryLayout';
import { WeaponList } from '@/components/WeaponList';
import useSWR from 'swr';
import Image from 'next/image';
import { WeaponType, WeaponFilters } from '@/models/weapon';

export default function Weapons() {
    const [search, setSearch] = useState('');
    const [weaponFilter, setWeaponFilter] = useState<WeaponType | null>(null);
    const { weapons, error, isLoading } = useWeapons();

    // search handlers
    const nothing = (_: any) => { };
    const handleSearch = (event: any) => {
        setSearch(event.target.value);
    }

    const handleFilterChange = (filter: WeaponType) => {
        setWeaponFilter(filter);
    }

    if (isLoading) {
        return (
            <CategoryLayout
                category="Weapons"
                handleSearch={nothing}
                selector={<div></div>}
                mainContent={<div>Loading...</div>}
            >
            </CategoryLayout >
        )
    }
    if (error) {
        return (
            <CategoryLayout
                category="Weapons"
                handleSearch={nothing}
                selector={<div></div>}
                mainContent={<div>Error: {error.message}</div>}
            >
            </CategoryLayout >
        )
    }

    return (
        <div>
            <CategoryLayout
                category="Weapons"
                handleSearch={handleSearch}
                selector={<WeaponSelector weaponFilter={handleFilterChange}></WeaponSelector>}
                mainContent={<WeaponList weapons={weapons} search={search} filter={weaponFilter}></WeaponList>}
            >
            </CategoryLayout>
        </div>
    );
}

function WeaponSelector({ weaponFilter }: { weaponFilter: (filter: WeaponType) => void }) {
    return (
        <div className='flex flex-auto'>
            {
                WeaponFilters.map((filter) => (
                    <Image
                        key={filter.value}
                        src={filter.url}
                        width={50}
                        height={50}
                        alt={filter.value}
                        onClick={() => weaponFilter(filter.value as WeaponType)}
                    >
                    </Image>
                ))
            }
        </div>
    );
}

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useWeapons() {
    const { data, error, isLoading } = useSWR('https://mhw-db.com/weapons', fetcher);
    return {
        weapons: data,
        error,
        isLoading
    };
}
