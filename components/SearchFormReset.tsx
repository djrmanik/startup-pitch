"use client"
import Link from 'next/link'
import React from 'react'
import { X } from 'lucide-react'

const SearchFormReset = () => {
        const reset = () => {
            const form = document.querySelector('.search-form') as HTMLFormElement;
            
            if(form) form.reset();
    } 

    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white">
                <X className="w-10 h-10 shrink-0"/>
            </Link>
        </button>
    )
}

export default SearchFormReset