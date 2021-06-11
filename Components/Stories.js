// Dummy data
import data from '../data/data'

// Components
import StoryCard from './StoryCard'

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {data.slice(0, 5).map((item, index) => {
        const { name, src, profile } = item

        return <StoryCard key={index} name={name} src={src} profile={profile} />
      })}
    </div>
  )
}

export default Stories
