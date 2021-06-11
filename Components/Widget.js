import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'

import Contact from './Contact'

import datas from '../data/data'

const Widget = () => {
  return (
    <div className='hidden min-w-xl max-w-2xl lg:flex flex-col w-60 p-2 pr-6 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {datas.slice(1).map((data, index) => (
        <Contact key={index} friend={data} />
      ))}
    </div>
  )
}

export default Widget
