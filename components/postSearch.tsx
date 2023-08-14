'use client'

import {FormEventHandler, useState} from "react";
import {usePosts} from "@/store";

export const PostSearch = () =>{
    const [search, setSearch] = useState('')
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)
    const handelSubmit: FormEventHandler<HTMLFormElement> = async (event) =>{
        event.preventDefault()
        await getPostsBySearch(search)
    }
    return(
        <form onSubmit={handelSubmit} className={'search-posts'}>
            <input type="text" placeholder='search' value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
            <button type={"submit"}>Search</button>
        </form>
    )
}