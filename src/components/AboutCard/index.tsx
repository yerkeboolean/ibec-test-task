import React, {ReactElement} from "react";
import "./about-card.scss";

const AboutCard: React.FC = ({item}): ReactElement => {
    return (
        <div className="about-card">
            <div className="about__item">
                <div className="about__item--text">
                    <span>Имя:</span> {item.name}
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
        </div>
    );
};

export default AboutCard;
