import articleStyles from '../styles/Artical.module.css'

const ArticleList = (articles) => {
  return (
    <div className={articleStyles.grid}>
    {articles.map((article)=>(
        <h3>{article.title}</h3>
    ))}
    </div>
  )
}

export default ArticleList




