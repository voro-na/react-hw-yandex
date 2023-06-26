'use client'

import {useGetMovieQuery, useGetReviewsQuery} from "@/redux/services/movieApi";
import FilmDetails from "@/components/filmDetails/filmDetails";
import Reviews from "@/components/reviews/reviews";

type props = {
    params: { movieId: string }
}
const Movie = ({params: {movieId}}: props) => {
    const {data, isLoading, error} = useGetMovieQuery(movieId);
    console.log(data)
    return (
        <div>
            {data && <FilmDetails title={data.title}
                                  description={data.description}
                                  director={data.director}
                                  genre={data.genre}
                                  id={data.id}
                                  posterUrl={data.posterUrl}
                                  rating={data.rating}
                                  releaseYear={data.releaseYear}/>
            }
            <Reviews movieId={movieId}/>

        </div>
    )
}

export default Movie
