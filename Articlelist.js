function ArticleList(props) {
    const articles = props.posts.map(post => (
      <Article key={post.id} post={post} />
    ));
    
    return <main>{articles}</main>;
  }
  