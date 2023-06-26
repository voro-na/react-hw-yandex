'use client'
import styles from './page.module.css'
import {FC, MutableRefObject, useEffect, useState} from "react";
import Filters from "@/components/filrers/filters";
import {useGetMoviesCinemaQuery, useGetMoviesQuery} from "@/redux/services/movieApi";
import MoviePreview from "@/components/moviePreview/moviePreview";

const genres: Record<string, string> = {
    'Фентези': 'fantasy',
    'Ужасы': 'horror',
    'Боевик': 'action',
    'Комедия': 'comedy',
}
interface movie {
    id: string,
    posterUrl: string,
    title: string,
    genre: string,
}

const Home: FC = () => {
    const [titleFilter, setTitleFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState<string>('');
    const [cinemaFilter, setCinemaFilter] = useState('');
    const [movies, setMovies] = useState<movie[]>([]);

    const {data, isLoading, error} = useGetMoviesQuery(null);
    const {data: dataCinemas, isLoading: isLoadingCinemas, error: errorCinemas} = useGetMoviesCinemaQuery(cinemaFilter);

    useEffect(() =>{
        if (dataCinemas){
            setMovies(dataCinemas)
        }
    }, [dataCinemas])

    useEffect(() =>{
        setMovies(data)
    }, [data])

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Filters setTitleFilter={setTitleFilter}
                         setGenreFilter={setGenreFilter}
                         setCinemaFilter={setCinemaFilter}/>
            </div>
            <div>
                {movies && movies.filter(item => (item.title.toLowerCase().includes(titleFilter) || titleFilter === ''))
                    .filter(item => (genreFilter === '' ||
                        (genreFilter in genres && item.genre === genres[genreFilter])))
                    .map((item) => (
                        <MoviePreview key={item.id}
                                      id={item.id}
                                      title={item.title}
                                      genre={item.genre}
                                      posterUrl={item.posterUrl}/>
                    ))}
            </div>
        </div>
    )
}
export default Home
