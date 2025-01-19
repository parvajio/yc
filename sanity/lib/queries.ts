import { defineQuery } from "next-sanity";

export const STURTUPS_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc){
    _id, 
    title, 
    description, 
    image, 
    author -> {_id, name, image, bio}, 
    category, 
    views, 
    _createdAt
}
`)