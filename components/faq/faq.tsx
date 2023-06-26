"use client";

import styles from "./faq.module.css";
import Image from "next/image";
import React, {FC, useState} from "react";

interface FAQ {
    question: string,
    id: number,
    answer: string
}

type FAQprops = { item: FAQ }

const Faq: FC<FAQprops> = ({item}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () =>{
        setIsOpen(prevState => !prevState)
    }

    return (<div key={item.id} className={styles.container}>
        <div className={styles.questionTitle}>
            <h3>{item.question}</h3>
            {!isOpen && <Image src='/icon-open.svg'
                               alt='close'
                               width={30}
                               height={30}
                               onClick={handleClick}/>}
            {isOpen && <Image src='/icon-close.svg'
                              alt='close'
                              width={30}
                              height={30}
                              onClick={handleClick}/>}
        </div>
        {isOpen && <div>{item.answer}</div>}
    </div>)
}
export default Faq
