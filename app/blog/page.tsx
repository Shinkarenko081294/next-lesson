'use client'
// import {Metadata} from "next";
import {Posts} from "@/components/posts";
import {PostSearch} from "@/components/postSearch";
import {usePosts} from "@/store";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";

// export const metadata: Metadata = {
//     title: 'Blog'
// }

export default function Blog(){
    const [posts, loading, getAllPosts] = usePosts(state => [
        state.posts,
        state.loading,
        state.getAllPosts

    ], shallow)

    useEffect(()=>{
        getAllPosts()
    }, [getAllPosts])
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch onSearch={setPosts} />
            {loading ? (<h3>Loading...</h3>) :(<Posts posts={posts} />)}
        </>
    )
}