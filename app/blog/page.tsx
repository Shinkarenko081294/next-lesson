import {Posts} from "@/components/posts";
import {PostSearch} from "@/components/postSearch";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Blog'
}

export default function Blog(){
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch />
            <Posts />
        </>
    )
}