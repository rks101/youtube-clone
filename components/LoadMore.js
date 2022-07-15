import { amount } from 'lib/config'

export default function LoadMore({videos, setVideos, setReachedEnd, author}) {
  return (
    <div className='flex justify-center'>
      <button
        className='border px-8 py-2 my-10 mr-2 font-bold rounded-full'
        onClick={ async () => {
            const url = `/api/videos?skip=${videos.length}`
            
            if (author) {
                url += `&author=${author.id}`
            }
    
            const res = await fetch(url)
            // data contains new vedios from LoadMore button
            const data = await res.json()
            if (data.length < amount) {
                setReachedEnd(true)
            }
            // set vedios to existing list of videos and append data just fetched
            setVideos([...videos, ...data])
        }}
      >
        Load more
      </button>
    </div>
  )
}
