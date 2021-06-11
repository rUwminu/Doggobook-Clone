// Image / Icon svg or next component
import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

// Auth
import { signOut, useSession } from 'next-auth/client'

// Component
import HeaderIcon from './HeaderIcon'

const Header = () => {
  const [session, loading] = useSession()

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-4 shadow-md'>
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex items-center ml-2 p-2 rounded-full bg-gray-100'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type='text'
            placeholder='Search Goggobook'
            className='hidden md:inline-flex flex flex-shrink ml-2 item-center outline-none bg-transparent placeholder-gray-500'
          />
        </div>
      </div>

      <div className='flex justify-center items-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
          onClick={signOut}
          className='rounded-full cursor-pointer'
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
        />
        <p className='font-semibold whitespace-nowrap pr-3'>
          {session.user.name}
        </p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

export default Header
