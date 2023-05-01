function ArticleList(props) {
    const articles = props.posts.map(post => (
      <Article key={post.id} post={post} />
    ));
    
    return <main>{articles}</main>;
  }
  function Article({ title, date = "January 1, 1970", preview }) {
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  }
    