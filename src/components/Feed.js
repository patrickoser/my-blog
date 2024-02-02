import Post from "./Post";

// Will display each post within db.json using the map method.
// Each post is given a key(id number) to differentiate it from the rest.
const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed