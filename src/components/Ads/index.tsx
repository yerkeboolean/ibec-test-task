import React from "react";
import "./ads.scss";
import carImg from "./../../assets/img/auto.jpg";
import creditImg from "./../../assets/img/credit.jpg";

const Ads: React.FC = () => (
    <div className="ads">
        <div className="ads__item ads__item--rate">Курс обмена валют:</div>
        <div className="ads__item">
            <img src={carImg} />
            <div className="ads__item--label">Кредит Auto</div>
        </div>
        <div className="ads__item">
            <img src={creditImg} />
            <div className="ads__item--label">Депозит</div>
        </div>
    </div>
);

export default Ads;
