import SearchForm from "@/components/SearchForm"

export default async function Home( {searchParams}: {searchParams: Promise<{query?: string}>}) {
    const query = (await searchParams).query;

    const posts = [{
        _createdAt: 'Yesterday',
        views: 55,
        author: { _id: 1 },
        _id: 1,
        description: 'This is a description',
        image: ''
    }];
    
    return (
        <>
            <section className="w-full bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
                <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
                    Pitch your ideas and connect with entrepreneurs
                </h1>

                <p className="sub-heading !max-w-3xl text-white">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
                </p>

                <SearchForm query={query}/>
            </section>

            <section className="px-6 py-10 max-w-7xl mx-auto">
                <p className="text-40 font-bold font-work-sans">
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>

                <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">

                </ul>
            </section>
        </>
    )
}