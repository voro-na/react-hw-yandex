'use client'
import { useSelector} from "react-redux";
import {selectorStateModule, selectorStateSum} from "@/redux/features/cart/selector";
import MoviePreview from "@/components/moviePreview/moviePreview";
import {useRef} from "react";
import styles from './basket.module.css'

const Basket = () => {
    const productAmount = useSelector((state) => selectorStateModule(state));
    const basketRef = useRef<any>(null)
    const sum = useSelector((state) => selectorStateSum(state));


    const basket = Object.keys(productAmount).map(key => ({
        id: key,
        title: productAmount[key].title,
        posterUrl: productAmount[key].posterUrl,
        genre: productAmount[key].genre
    }))

    return (
        <div ref={basketRef} className={styles.container}>
            {basket.map(item => (
                <MoviePreview id={item.id}
                              posterUrl={item.posterUrl}
                              title={item.title}
                              genre={item.genre}
                              key={item.id}
                              basketRef={basketRef}
                                />
            ))}
            <div className={styles.sum}>
                <h3>Итого билетов:</h3>
                <h3>{sum}</h3>
            </div>
        </div>
    )
}

export default Basket
