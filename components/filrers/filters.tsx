"use client"
import styles from './filters.module.css'
import Image from "next/image";
import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import ModalSelect from "@/components/genreCategory/modalSelect";
import {useGetCinemasQuery} from "@/redux/services/movieApi";

type filterProps = {
    setTitleFilter: (arg0: string) => void,
    setGenreFilter: (arg0: string) => void,
    setCinemaFilter: (arg0: string) => void
}
type dataType = {
    id: string,
    moviesId: string[],
    name: string
}
const category = ['Не выбрано', 'Боевик', 'Комедия', 'Фентези', 'Ужасы']

const Filters: FC<filterProps> = ({setTitleFilter, setGenreFilter, setCinemaFilter}) => {
    const genreRef = useRef<any>(null)
    const cinemasRef = useRef<any>(null)
    const [selectGenge, setSelectGenge] = useState(false);
    const [selectCinema, setSelectCinema] = useState(false);
    const [cinemas, setCinemas] = useState<string[]>([]);
    const [genre, setGenre] = useState('')
    const [cinema, setCinema] = useState('')

    const {data, isLoading, error} = useGetCinemasQuery(null);

    useEffect(() => {
        if (data) {
            setCinemas(['Не выбрано', ...data.map((item: { name: string; }) => (item.name))])
        }
    }, [isLoading])

    useEffect(() => {
        setGenreFilter(genre)
    }, [genre])

    useEffect(() => {
        if (data){
            const index = data.findIndex((item: { name: string; }) => item.name === cinema)
            setCinemaFilter(data[index]?.id)
        }
    }, [cinema])

    const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(e.currentTarget.value.toLowerCase());
    }

    return (<div className={styles.container}>
        <h3 className={styles.title}>Фильтр поиска</h3>
        <label className={styles.inputContainer}>
            Название
            <input type="text"
                   placeholder='Введите название'
                   className={styles.input}
                   onChange={(e) => handleInputTitle(e)}/>
        </label>
        <div className={styles.inputContainer} ref={genreRef}>
            Жанр
            <div className={styles.inputSelect}>
                <input type="text"
                       placeholder='Выберите жанр'
                       className={styles.inputNone}
                       readOnly={true}
                       value={genre}/>
                <Image src='/icon-open.svg'
                       alt='close'
                       width={20}
                       height={20}
                       onClick={() => setSelectGenge(!selectGenge)}/>
            </div>
        </div>
        {genreRef.current && selectGenge && createPortal(<ModalSelect data={category}
                                                                      setInput={setGenre}/>, genreRef.current)}
        <div className={styles.inputContainer} ref={cinemasRef}>
            Кинотеатр
            <div className={styles.inputSelect}>
                <input type="text"
                       placeholder='Выберите кинотеатр'
                       className={styles.inputNone}
                       readOnly={true}
                       value={cinema}/>
                <Image src='/icon-open.svg'
                       alt='close'
                       width={20}
                       height={20}
                       onClick={() => setSelectCinema(!selectCinema)}/>
            </div>
        </div>
        {cinemasRef.current && selectCinema && createPortal(<ModalSelect data={cinemas}
                                                                         setInput={setCinema}/>, cinemasRef.current)}
    </div>)
}

export default Filters
