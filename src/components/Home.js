import Feed from "./Feed"

// 'posts' is passed as a deconstructed object to Home.
// Home then takes the contents of 'posts', uses a ternary operator to check their length, and
// if that length is >= 1 then the Feed component will be called, with posts as a prop, and map
// all available posts to the page.
// If the boolean comes back as false, or < 1, then 'No posts to display' will be displayed.
const Home = ({ posts }) => {
    /* 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await api.get('/posts');
            console.log(setPosts(response.data))
            setPosts(response.data);
          } catch (err) {
            console.log(err);
          }
        }
        fetchPosts();
      }, [])
    */
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