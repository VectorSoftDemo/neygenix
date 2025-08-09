// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-6xl font-bold text-[#1f4d38] mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#22641e] mb-6">
                Oops! Page  not Found
            </h2>
            <p className="text-[#2e5e45] text-xl max-w-md mb-8">
                The page you are looking for doesn’t exist or has been moved.
                Let’s get you back to a safe place.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#22641e] text-white rounded-lg shadow hover:bg-[#1b5120] transition-all duration-200"
            >
                Go to Home
            </Link>
        </div>
    );
}
