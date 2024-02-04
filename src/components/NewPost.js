const NewPost = () => {
    return (
        <div className="NewPost">
            <form onSubmit={createPost}method="post">
                <label htmlFor="postTitle">Title</label>
                <input type="text" id="postTitle" name="postTitle" />
                <label htmlFor="postBody">Body</label>
                <input type="text" id="postBody" name="postBody" />
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default NewPost