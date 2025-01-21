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

export const STURTUPS_BY_ID_QUERY = defineQuery(`*[_type == 'startup' && _id== $id][0]{
  _id, title, description, image, 
    author -> {
      _id, name,usename, image, bio
    }, 
    categoty, views, 
    _createdAt, pitch
}
`)