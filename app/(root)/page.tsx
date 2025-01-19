import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STURTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts = await client.fetch(STURTUPS_QUERY);
  
  console.log(JSON.stringify(posts, null, 2))

  // const posts = [{
  //   _createdAt : new Date(),
  //   views: 55,
  //   author : {_id: 1, name: "parvaj"},
  //   _id: 1,
  //   description: "This is description",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W5hk6G2szXKUvQrGYSxkhyGbNwAbVVMKpA&s",
  //   category: "Robots",
  //   title: "We RObot"
  // }]

  return (
    <>
      <section className="pink_container">

        <h1 className="heading">
          Pitch Your Startup, <br /> connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Searching for ${query}` : "All Startup"}
        </p>

        <ul className="card_grid mt-7">
            {
              posts?.length > 0 ?( 
                posts.map((post :StartupCardType)=>(
                  <StartupCard key={post?._id} post={post}></StartupCard>
                ))
              ):(
                  <p className="no-results">No Startup found </p>
                )
            }
        </ul>

      </section>
    </>
  );
}
