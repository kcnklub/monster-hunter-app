import Link from "next/link";

export default async function Home() {
    return (
        <div className="p-24">
            <h1 className="text-4xl font-bold">Monster Hunter App</h1>
            <div><Link href="/weapons">Weapons</Link></div>
            <div><Link href="/armor" className="">Armor</Link></div>
            <div><Link href="/charms">Charms</Link></div>
            <div><Link href="/ailments" className="">Ailments</Link></div>
        </div>
    );
}

