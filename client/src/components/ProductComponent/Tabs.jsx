import React, { useState } from "react";
import Description from "./Description/Description";
import Rules from "./Rules/Rules";
import Question from "./Question/Question";
import Specifications from "./Specifications/Specifications";

const Tabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const description = <Description />;
    const rules = <Rules />;
    const question = <Question />;
    const specifications = <Specifications />;

    const arrTabs = [
        {
            id: 1,
            name: "Описание",
            component: description,
        },
        {
            id: 2,
            name: "Характеристики",
            component: specifications,
        },
        {
            id: 3,
            name: "Правила",
            component: rules,
        },
        {
            id: 4,
            name: "Вопрос-ответ",
            component: question,
        },
    ];

    const activate = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="info-product__tabs tabs-info">
            <div className="tabs-info__labels">
                {arrTabs.map((tab, index) => (
                    <li
                        key={tab.id}
                        className={
                            index === activeTabIndex
                                ? "tabs-info__tab active"
                                : "tabs-info__tab"
                        }
                        onClick={() => activate(index)}
                    >
                        {tab.name}
                    </li>
                ))}
            </div>

            <div className="tabs-info__content">
                {arrTabs[activeTabIndex].component}
            </div>
        </div>
    );
};

export default Tabs;
