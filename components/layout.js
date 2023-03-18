import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = "MS Prep Football Archive"


export default function Layout ( { children, home } ) {
  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Archive of Mississippi prep football"
        />
        <meta name="og:title" content="Archive of Mississippi prep football" />
      </Head>
      <header className={ styles.header }>
        <div className={ styles.backToHome }>
          <Link href="/">← Back to home</Link>
        </div>
        <h1 className={ utilStyles.heading2Xl }>{ name }</h1>
      </header>
      <main>{ children }</main>
    </div>
  )
}