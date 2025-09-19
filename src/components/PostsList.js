import React, {useEffect, useState} from "react";
import './PostsList.css';
function PostsList(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(response => {
        if(!response.ok)throw new Error('Ошибка сети')
        return response.json();
    })
    .then(data=>{
        setPosts(data)
        setLoading(false)
    })
    .catch(err=>{
        setError(err.message);
        setLoading(false)
    })
}, []);


if(loading) return <div>Загрузка....</div>;
if(error) return <div>Ошибка{error}</div>;

return(
    <div className="posts-list">
        <h2>Популярные фильмы</h2>
        <div className="posts-grid">
            {posts.map(post=>(
                <div key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.body.slice(0, 100)}.....</p>
                </div>
            ))}
        </div>
    </div>
)
}
export default PostsList;