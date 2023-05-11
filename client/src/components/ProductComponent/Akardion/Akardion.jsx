import React, { useState } from 'react'
import './Akardion.scss'
import AccordionItem from '../AccordionItem';

const Akardion = ({faqs}) => {
    
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
  return (
    
    <div className='question__akardion akardion'>
        {faqs.map((faq, index) => {
            return (
                <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
            )
        })}
    </div>
  )
}

export default Akardion
