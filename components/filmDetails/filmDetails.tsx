import {FC} from "react";
import styles from './filmDetails.module.css'

type FilmDetailsProps = {
    title: string,
    description: string,
    director: string,
    genre: string,
    id: string,
    posterUrl: string,
    rating: string,
    releaseYear: string
}
const genres: Record<string, string> = {
    'fantasy': 'Фентези',
    'horror': 'Ужасы',
    'action': 'Боевик',
    'comedy': 'Комедия',
}
const FilmDetails: FC<FilmDetailsProps> = ({
                                               title,
                                               director,
                                               description,
                                               rating,
                                               releaseYear,
                                               posterUrl,
                                               genre,
                                               id
                                           }) => {
    const genreRu = genre in genres ? genres[genre] : genre
    return (<div className={styles.container}>
        <img src={posterUrl} alt={'poster'} width={400} height={500} className={styles.img}/>
        <div>
            <h2>{title}</h2>
            <div><strong>Жанр:</strong> {genreRu}</div>
            <div><strong>Год выпуска:</strong> {releaseYear}</div>
            <div><strong>Рейтинг:</strong> {rating}</div>
            <div><strong>Режиссёр:</strong> {director}</div>
            <br/>
            <p>
                <strong>Описание</strong>
                <br/>
                {description}</p>
        </div>

    </div>)
}

export default FilmDetails
