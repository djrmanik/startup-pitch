import React from 'react'
import Form from "next/form"
import SearchFormReset from "@/components/SearchFormReset"
import { Search } from "lucide-react"

const SearchForm = ( { query }: { query?: string } ) => {

    return (
        <Form 
        action="/" 
        scroll={false} 
        className="search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5">
            <input
                name="query"
                defaultValue={query}
                className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {query && <SearchFormReset />}

                <button type="submit" className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white"> 
                    <Search className="w-10 h-10 shrink-0"/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm