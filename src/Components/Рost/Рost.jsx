import { Link } from 'react-router-dom';
import './Рost.css';

const Рost = ({post}) => {
    return (
        <div className="post">
            {post.photo && (
                <img src={post.photo} className="postImg" alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Music</div>
                </div>
                <Link className="link" to={`/post/${post.id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">{post.body}</p>
        </div>
    )
}

export default Рost;
