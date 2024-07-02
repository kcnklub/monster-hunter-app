"use client";

import { useState } from 'react';
import CategoryLayout from '@/components/CategoryLayout';
import { WeaponList } from '@/components/WeaponList';
import useSWR from 'swr';

export default function Weapons() {
    const [search, setSearch] = useState('');
    const { weapons, error, isLoading } = useWeapons();

    // search handlers
    const nothing = (_: any) => { };
    const handleSearch = (event: any) => {
        setSearch(event.target.value);
    }

    if (isLoading) {
        return (
            <CategoryLayout category="Weapons" handleSearch={nothing}>
                <div>Loading...</div>
            </CategoryLayout >
        )
    }
    if (error) {
        return (
            <CategoryLayout category="Weapons" handleSearch={nothing}>
                <div>Error: {error.message}</div>
            </CategoryLayout >
        )
    }

    return (
        <div>
            <CategoryLayout category="Weapons" handleSearch={handleSearch}>
                <WeaponList weapons={weapons} search={search}></WeaponList>
            </CategoryLayout>
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
