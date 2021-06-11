import Head from 'next/head'
import { getSession } from 'next-auth/client'

// Components
import Header from '../Components/Header'
import Login from '../Components/Login'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'
import Widget from '../Components/Widget'
import { db } from '../firebase'

export default function Home({ session, posts }) {
  if (!session) return <Login />

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Doggobook</title>
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widget />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context)

  // Get firebase post
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get()

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))

  return {
    props: {
      session,
      posts: docs,
    },
  }
}
