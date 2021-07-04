import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function Home() {
    return (
        <>
            <Head>
                <title>NEXT FLOW TRANSFORMATION</title>
            </Head>
            <div className="homePage">
                <h1>Hello From The Other Side</h1>
                <Image src={'/images/flowD.png'} alt="@Flow" height={123} width={123} />
            </div>
        </>
    )
}

export default Home
