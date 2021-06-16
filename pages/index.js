import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <code>console.log('Hello World!')</code>

        </p>
        <h1 className="title">
           Read{' '}
          <Link href="/posts/first-post">
            <a>First-post</a>
          </Link>
          {' '}Or{' '}
          <Link href="/about">
            <a>About</a>
          </Link>
</h1>
          
        
      </main>

      <Footer />
    </div>
  )
}
