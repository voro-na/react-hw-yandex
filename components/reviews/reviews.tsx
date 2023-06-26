import {FC, Key} from "react";
import {useGetReviewsQuery} from "@/redux/services/movieApi";
import Image from "next/image";
import styles from './reviews.module.css'

type reviewsProps = { movieId: string }
type reviewProps = {
    name: string,
    rating: string,
    text: string
}

const Review: FC<reviewProps> = ({text, rating, name}) => {
    return (<div className={styles.reviewContainer}>
        <Image src='/avatar.svg' alt='avatar' width={100} height={100} className={styles.img}/>
        <h3>{name}</h3>
        <span>Оценка: {rating}</span>
        <p>{text}</p>
    </div>)
}

const Reviews: FC<reviewsProps> = ({movieId}) => {
    const {data, isLoading, error} = useGetReviewsQuery(movieId);
    return (<div>
        {data && data.map((item: { name: string; rating: string; text: string; id: number; }) => (<Review name={item.name}
                                           rating={item.rating}
                                           text={item.text}
                                           key={item.id}/>))}
    </div>)
}

export default Reviews
