import Head from 'next/head'
import Image from 'next/image'
import { getVideos } from 'lib/data'
import prisma from 'lib/prisma'
import Videos from 'components/Videos'
import Heading from 'components/Heading'
import LoadMore from 'components/LoadMore'
import { useState } from 'react'
import { amount } from 'lib/config'

export default function Home({initialVideos}) {
  const [videos, setVideos] = useState(initialVideos)
  const [reachedEnd, setReachedEnd] = useState(initialVideos.length < amount)

  return (
    <div>
      <Head>
        <title>YouTube Clone</title>
        <meta name='description' content='A great YouTube Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>      
      <Heading />

      {videos.length === 0 && (
        <p className='flex justify-center mt-20'>No videos found!</p>
      )}
      
      <Videos videos={videos} />

      {!reachedEnd && (
        <LoadMore
          videos={videos}
          setVideos={setVideos}
          setReachedEnd={setReachedEnd}
        />
      )}
    </div>
  )
}

export async function getServerSideProps() {
  let videos = await getVideos({}, prisma)
	videos = JSON.parse(JSON.stringify(videos))

  return {
    props: {
      initialVideos: videos,
    },
  }
}
