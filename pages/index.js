import Head from 'next/head'
import Avatar  from '../components/Avatar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khooz</title>
        <meta name="description" content="Search Engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        
        {/* Left*/}
        <div className='flex space-x-4 items-center text-sm'>
          <p className="link">About</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          {/* Icon */}

          {/*Avatar */}
          <Avatar />
        </div>
      </header>
      {/*Body*/}
      
    </div>
  )
}
