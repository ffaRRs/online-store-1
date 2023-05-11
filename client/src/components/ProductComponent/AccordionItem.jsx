import React, { useRef } from "react";

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;
    return (
        <div>
            <div className="akardion__card">
                <div className="akardion__header">
                    <div
                        className={`akardion__toggle ${
                            active === id ? "active" : ""
                        }`}
                        onClick={() => handleToggle(id)}
                    >
                        <h5 className="akardion__title">{header}</h5>
                        <div className="akardion__icon"></div>
                    </div>
                </div>
                <div
                    ref={contentEl}
                    className={`akardion__collapse ${active === id ? "show" : ""}`}
                    style={
                        active === id
                            ? { height: contentEl.current.scrollHeight }
                            : { height: "0px" }
                    }
                >
                    <div className="akardion__body">
                        <p className="">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
