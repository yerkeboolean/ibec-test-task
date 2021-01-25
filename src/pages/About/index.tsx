import React, {useState, useEffect} from "react";
import "./about.scss";
import axios from "axios";
import {AboutCard} from "../../components/";

const About: React.FC = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        // Update the document title using the browser API
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <div className="about">
            {users ? (
                users.map((item) => <AboutCard key={item.id} item={item} />)
            ) : (
                <div>Sorry, no data</div>
            )}
        </div>
    );
};

export default About;
