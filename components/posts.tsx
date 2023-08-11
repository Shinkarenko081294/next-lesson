import Link from "next/link";

type Posts = {
    posts: any[]
}

export const Posts = ({posts}:Posts)=>{
    return(
        <ul>
            {posts.map((post:any) =>{
                return(
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}