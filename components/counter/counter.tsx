'use client'

import {cartActions} from "@/redux/features/cart";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/redux/features/cart/selector";
import {FC, MutableRefObject, useEffect, useState} from "react";
import styles from './counter.module.css'
import Image from "next/image";

interface moviePreviewProps {
    id: string,
    posterUrl: string,
    title: string,
    genre: string,
    basketRef: MutableRefObject<any> | undefined,
    setDelete?: (arg0: boolean) => void,
    isDeleted?: boolean
}

const Counter: FC<moviePreviewProps> = ({id, title, posterUrl, genre, basketRef, setDelete, isDeleted}) => {
    const productAmount = useSelector((state) => selectProductAmount(state, id));

    const dispatch = useDispatch()

    useEffect(() => {
        if (isDeleted){
            dispatch(cartActions.reset(id))
        }
    }, [isDeleted])

    const handleDecrementClick = () => {
        if (productAmount === 1 && basketRef && setDelete) {
            setDelete(true)
        }else{
            dispatch(cartActions.decrement(id))
        }
    }
    const handleReset =() =>{
        if (setDelete) {
            setDelete(true)
        }
    }
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={handleDecrementClick}>-</button>
            <div>{productAmount}</div>
            <button className={styles.btn}
                    onClick={() => dispatch(cartActions.increment({id, title, posterUrl, genre}))}>+
            </button>
            {basketRef && <Image src='./close.svg' alt='close' width={20} height={20} onClick={handleReset}/> }
        </div>
    )
}
export default Counter
