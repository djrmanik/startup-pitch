import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home( {searchParams}: {searchParams: Promise<{query?: string}>}) {
    const query = (await searchParams).query;

    // const posts = await client.fetch(STARTUPS_QUERY);
    const params = { search: query || null }
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


    // const posts = [{
    //     _createdAt: new Date(),
    //     views: 55,
    //     author: { _id: 1, name: "Albany Siswanto" },
    //     _id: 1,
    //     description: 'This is a description',
    //     image: "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     category: "Energy",
    //     title: "Solar Panel"
    // }];
    
    return (
        <>
            <section className="w-full bg-[#d73d6e] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
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
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="text-black-300 text-center col-span-full">
                            No startups found
                        </p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    )
}