'use client'
import Link from "next/link";
import styles from './header.module.css'
import Image from "next/image";
import {useSelector} from "react-redux";
import {selectorStateSum} from "@/redux/features/cart/selector";

const Header = () => {
    const sum = useSelector((state) => selectorStateSum(state));

    return <div className={styles.header}>
            <Link href='/' className={styles.link}>Билетопоиск</Link>
            <div className={styles.container}>
                {sum!== 0 && <span className={styles.sum}>{sum}</span>}
                <Link href="/basket">
                    <Image src='/basket.svg' alt='basket' width={20} height={20}/>
                </Link>
            </div>
        </div>

}

export default Header
