import './Home.css';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Рosts from '../../Components/Рosts/Рosts';
import SideBar from '../../Components/Sidebar/SideBar';
import axios from 'axios';

const Home = () => {
    const [posts, setРosts] = useState([]);

    useEffect(() => {
        const fetchРosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/")
            setРosts(res.data);
        }
        fetchРosts();
    }, [])

    return (
        <>
            <Header />
            <div className="home">
                <Рosts posts={posts} />
                <SideBar />
            </div>
        </>
    )
}

export default Home;
