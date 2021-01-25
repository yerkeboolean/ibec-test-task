import React from "react";
import "./main-cards.scss";

const MainCards: React.FC = () => (
    <div className="main-cards">
        <div className="main-cards__line">
            <div className="main-cards__line--item">
                <div className="tape-case"></div>
                <div className="line"></div>
                <div className="card_title">Мои счета</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-case"></div>
                <div className="line"></div>
                <div className="card_title">Мои счета</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-case"></div>
                <div className="line"></div>
                <div className="card_title">Мои счета</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-case"></div>
                <div className="line"></div>
                <div className="card_title">Мои счета</div>
            </div>
        </div>
        <div className="main-cards__line">
            <div className="main-cards__line--item">
                <div className="tape-template"></div>
                <div className="line"></div>
                <div className="card_title">Шаблоны операций</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-template"></div>
                <div className="line"></div>
                <div className="card_title">Шаблоны операций</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-template"></div>
                <div className="line"></div>
                <div className="card_title">Шаблоны операций</div>
            </div>
            <div className="main-cards__line--item">
                <div className="tape-template"></div>
                <div className="line"></div>
                <div className="card_title">Шаблоны операций</div>
            </div>
        </div>
    </div>
);

export default MainCards;
