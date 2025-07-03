"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price?: number;
    description?: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const endpoint = search
            ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
            : "https://dummyjson.com/products";
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, [search]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-cyan-200 flex">
            <main className="flex-1 p-8">
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-blue-800 mb-2">Marketplace</h1>
                        <p className="text-gray-600 mb-4">Buy and sell products with seconds</p>
                        <div className="flex gap-4 mb-6">
                            <div className="relative w-1/3">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
                        {loading ? (
                            <div>Loading...</div>
                        ) : products.length === 0 ? (
                            <div>No products found.</div>
                        ) : (
                            products.map((item: Product) => (
                                <Link href={`/products/${item.id}`} key={item.id} className="block">
                                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col h-full">
                                        <div className="relative w-full h-40 mb-3">
                                            <Image
                                                src={item.thumbnail}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                alt={item.title}
                                                className="rounded-lg"
                                            />
                                        </div>
                                        <h2 className="text-lg font-bold text-blue-700 mb-1">{item.title}</h2>
                                        <p className="text-gray-500 text-sm mb-2 truncate">{item.description}</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-blue-600 font-semibold">${item.price ?? "N/A"}</span>
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Active</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
