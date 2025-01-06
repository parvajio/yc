"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFromReset = () => {

    const reset = () =>{
        const form = document.querySelector('search-form') as HTMLFormElement;
        if(form) form.reset();
    }

  return (
    <button type="reset" onClick={reset} className="search-btn text-white">
        <Link href={"/"} className="search-btn text-white">
            <X className="size-5"></X>
        </Link>
    </button>
  )
}

export default SearchFromReset