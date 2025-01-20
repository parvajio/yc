import { defineQuery } from "next-sanity";

export const STURTUPS_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
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