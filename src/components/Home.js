import Feed from "./Feed"

const Home = ({ posts }) => {
    return (
        <div className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p>
                    No posts to display.
                </p>
            )}
        </div>
    )
}

export default Home