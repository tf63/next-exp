import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Link from 'next/link'
import Card from '@/components/Card'

const H1 = styled.h1`
    color: red;
`

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Card>aaaa</Card>
                <H1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </H1>
            </main>
        </div>
    )
}

export default Home
