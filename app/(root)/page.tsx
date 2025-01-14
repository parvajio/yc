import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt : new Date(),
    views: 55,
    author : {_id: 1, name: "parvaj"},
    _id: 1,
    description: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W5hk6G2szXKUvQrGYSxkhyGbNwAbVVMKpA&s",
    category: "Robots",
    title: "We RObot"
  }]

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
                posts.map((post :StartupCardType, index: number)=>(
                  <StartupCard key={post?._id}></StartupCard>
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
