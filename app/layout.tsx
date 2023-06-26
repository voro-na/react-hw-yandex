import './globals.css'
import {Roboto} from 'next/font/google'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {StoreProvider} from "@/redux/storeProvider";


const inter = Roboto({weight: ['400', '700', '500'], subsets: ['latin']})

export const metadata = {
    question: 'Главная',
    description: 'Главная странца',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StoreProvider>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
            </StoreProvider>
        </body>

        </html>
    );
}
