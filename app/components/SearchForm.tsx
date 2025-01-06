import Form from "next/form"
import SearchFromReset from "./SearchFromReset";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query?:string}) => {

  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input 
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
        type="text"
      />

      <div className="flex gap-3">
          {query && <SearchFromReset></SearchFromReset>}

          <button type="submit" className="search-btn text-white"> 
            <Search className="size-5"></Search>
          </button>
      </div>
    </Form>
  )
}

export default SearchForm