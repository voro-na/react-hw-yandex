import {FC, MutableRefObject, useState} from "react";
import styles from './moviePreview.module.css'
import Counter from "@/components/counter/counter";
import Link from "next/link";
import {createPortal} from "react-dom";
import DeleteTickets from "@/components/deleteTickets/deleteTickets";
import Image from "next/image";

interface moviePreview {
    id: string,
    posterUrl: string,
    title: string,
    genre: string,
    basketRef?: MutableRefObject<any>,
}

const genres: Record<string, string> = {
    'fantasy': 'Фентези',
    'horror': 'Ужасы',
    'action': 'Боевик',
    'comedy': 'Комедия',
}
const MoviePreview: FC<moviePreview> = ({id, title, posterUrl, genre, basketRef}) => {
    const genreRu = genre in genres ? genres[genre] : genre
    const ref = basketRef ? basketRef : undefined
    const [deleteTicketsView, setDeleteTicketsView] = useState(false)
    const [btnDeleted, setBtnDeleted] = useState(false)

    return (
        <div className={styles.container}>
            <img src={posterUrl} alt={'poster'} width={100} height={120} className={styles.img}/>
            <Link href={`/${id}`} className={styles.title}>{title}</Link>
            <Counter id={id}
                     title={title}
                     genre={genre}
                     posterUrl={posterUrl}
                     setDelete={setDeleteTicketsView}
                     basketRef={ref}
                     isDeleted={btnDeleted}/>

            <div className={styles.genre}>{genreRu}</div>
            {deleteTicketsView && basketRef?.current &&
                createPortal(<DeleteTickets setDelete={setDeleteTicketsView} setBtnDeleted={setBtnDeleted}/>, document.body)}
        </div>
    )
}

export default MoviePreview
