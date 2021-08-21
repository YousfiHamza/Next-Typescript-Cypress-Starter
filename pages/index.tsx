import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import MagicalComponent from '../components/MagicalComponent/Magical.component'

function Home() {
  return (
    <>
      <Head>
        <title>NEXT TRANSFORMATION</title>
      </Head>
      <div className="homePage">
        <h1>Hello From The Other Side</h1>
        <Image src="/NextTypescriptCypressStarter.png" alt="@Flow" height={123} width={123} />
        <MagicalComponent />
      </div>
    </>
  )
}

export default Home
