import Image from 'next/image'

const Contact = ({ friend }) => {
  const { name, src } = friend
  return (
    <div className='relative flex items-center space-x-3 mb-2 p-2 rounded-xl hover:bg-gray-200 cursor-pointer'>
      <Image
        className='rounded-full'
        objectFit='cover'
        src={src}
        width={50}
        height={50}
        layout='fixed'
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-8 bg-green-500 h-3 w-3 rounded-full'></div>
    </div>
  )
}

export default Contact
