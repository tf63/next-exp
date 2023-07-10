import type { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'
import Card from '@/components/Card'

const Home: NextPage = () => {
    return (
        <main>
            <Card>aaaa</Card>
            <Card>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </Card>
        </main>
    )
}

export default Home
