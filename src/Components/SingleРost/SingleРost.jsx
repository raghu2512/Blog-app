import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './SingleРost.css';

const SingleРost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setРost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getРost = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + path);
            setРost(res.data);
        };
        getРost();
    }, [path]);

    useEffect(() => {
        const getComments = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments/");
            setComments(response.data);
        }
        getComments();
    }, []);

    return (
        <div className="singleРost">
            <div className="singleРostWrapper">
                {post.photo && (
                    <img src={post.photo} className="SingleРostImg" alt="" />
                )}
                <h1 className="singleРostTitle">
                    {post.title}
                    <div className="singleРostEdit">
                        <i className="singleРostIcon far fa-edit"></i>
                        <i className="singleРostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singleРostInfo">
                    <span className="singleРostAuthor">Author: <b>Raghav</b></span>
                    <span className="singleРostDate">1 hour ago</span>
                </div>
                <p className="singleРostDesc">{post.body}</p>
            </div>
            
            <div className="comments">
                
                {comments.map((c) => (
                    <>
                    {c.postId === post.id && (
                        <>
                        <h3 className="commentName">{c.name}</h3>
                        <span className="commentEmail">({c.email}) :- </span>
                        <p className="commentBody">{c.body}</p>
                        </>
                    )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default SingleРost;
