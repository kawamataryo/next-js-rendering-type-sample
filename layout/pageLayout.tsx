import React from "react";
import Head from 'next/head'

type PropsType = {
  color: 'danger' | 'primary' | 'info' | 'warning' | 'white',
  type: 'ssr' | 'csr' | 'isr' | 'ssg' | 'index'
}

const PageLayout: React.FC<PropsType> = ({ children, color, type }) => {
  const sectionClass = `hero is-fullheight is-${color}`

  return (
      <>
      <Head>
        <title>Next.js rendering type samples</title>
        <meta property="og:title" content="Next.js rendering type samples"/>
        <meta property="og:site_name" content=""/>
        <meta property="og:url" content="https://my-chakra-app.kawamataryo.vercel.app/"/>
        <meta property="og:description" content=""/>
        <meta property="og:type" content="article"/>
        <meta property="og:image" content={`https://my-chakra-app.kawamataryo.vercel.app/ogp-${type}.png`}/>
        <meta property="og:description" content="Sample application of the Next.js rendering types."/>
      </Head>
      <section className={sectionClass}>
        <div className="hero-body">
          <div className="container">
            {children}
          </div>
        </div>
      </section>
      </>
  )
}

export default PageLayout
