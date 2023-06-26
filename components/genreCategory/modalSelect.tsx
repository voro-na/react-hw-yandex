import styles from './genreCategory.module.css'
import {FC, MouseEvent} from "react";

type modalSelectProps = {
    data: string[],
    setInput: (arg0: string) => void
}

const ModalSelect: FC<modalSelectProps> = ({data, setInput}) => {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Не выбрано') {
            setInput('')
        } else {
            setInput(e.currentTarget.innerHTML)
        }
    }

    return <div className={styles.container}>
        {data.map((item, index) =>
            <div key={index} onClick={(e) => handleClick(e)}>{item}</div>)}
    </div>
}
export default ModalSelect
