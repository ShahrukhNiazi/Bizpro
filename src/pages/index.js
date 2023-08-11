import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header/Header.jsx'
import Mainslider from '../components/mainslider/Mainslider.js'
import Footer from '../components/footer/footer.js'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <main>
         <Header/>
         <Mainslider/>
         <Footer/>
       </main>
    </>
  )
}
