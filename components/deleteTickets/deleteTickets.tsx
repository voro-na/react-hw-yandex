import styles from './deleteTickets.module.css'
import Image from "next/image";
import {FC} from "react";

type DeleteTicketsProps = {
    setDelete: (arg0: (prevState: any) => boolean) => void,
    setBtnDeleted:(arg0: boolean) => void,
}

const DeleteTickets: FC<DeleteTicketsProps> = ({setDelete, setBtnDeleted}) => {
    const handleYesSubmit = () =>{
        setBtnDeleted(true)
        setDelete(prevState => !prevState)
    }
    const handleNoSubmit = () =>{
        setBtnDeleted(false)
        setDelete(prevState => !prevState)
    }
    return (<div className={styles.container}>
        <div className={styles.wrapper}>
            <h3>Удаление билета</h3>
            <Image src='/close.svg' alt='close' width={20} height={20} className={styles.close}
                   onClick={() => setDelete(prevState => !prevState)}/>
            <span className={styles.span}>Вы уверены, что хотите удалить билет?</span>
            <button className={styles.btn} onClick={handleYesSubmit}>Да</button>
            <button className={styles.btn} onClick={handleNoSubmit}>Нет</button>
        </div>

    </div>)
}

export default DeleteTickets
