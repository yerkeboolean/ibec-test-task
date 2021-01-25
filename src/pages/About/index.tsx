import React, {useState, useEffect} from "react";
import "./about.scss";
import axios from "axios";

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
                users.map((item) => (
                    <div key={item.id} className="about__item">
                        <div className="about__item--text">
                            <span>Имя:</span> {item.name}{" "}
                        </div>
                        <div className="about__item--text">
                            <span>Email:</span> {item.email}
                        </div>
                        <div className="about__item--text">
                            <span>Номер телефона:</span> {item.phone}
                        </div>
                        <div className="about__item--text">
                            <span>Сайт:</span> {item.website}
                        </div>
                        <div className="about__item--text">
                            <span>Место работы:</span> {item.company.name}
                        </div>
                    </div>
                ))
            ) : (
                <div>Sorry, no data</div>
            )}
        </div>
    );
};

export default About;
