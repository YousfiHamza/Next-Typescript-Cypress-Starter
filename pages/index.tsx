import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <>
      <Head>
        <title>NEXT TRANSFORMATION</title>
      </Head>
      <div className="homePage">
        <h1>Hello From The Other Side</h1>
        <Image src="/NextTypescriptCypressStarter.png" alt="@Flow" height={123} width={123} />
      </div>
    </>
  )
}

export default Home
