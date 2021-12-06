import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khooz</title>
        <meta name="description" content="Search Engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <header className="flex w-full p-5 justify-between text-sm">
        
        {/* Left*/}
        <div className='flex space-x-4 items-center text-sm'>
          <p>About</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          {/* Icon */}

          {/*Avatar */}
        </div>
      </header>
      {/*Body*/}
      
    </div>
  )
}
