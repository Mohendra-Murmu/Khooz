import Head from 'next/head'
import Avatar  from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  
  /**Search Function  */
  const search = (e) => {
  
    /**I'dont want the page to keep refreshing so */
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex 
                    flex-col 
                    items-center 
                    justify-center 
                    h-screen">
      <Head>
        <title>Khooz</title>
        <meta name="description" content="Search Engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <header className="flex 
                          w-full 
                          p-5 
                          justify-between 
                          text-sm 
                          text-gray-700">
        
        {/* Left*/}
        <div className='flex 
                        space-x-4 
                        items-center 
                        text-base'>
          <p className="link">About</p>
        </div>

        {/* Right */}
        <div className='flex 
                        space-x-4 
                        items-center'>
          {/* Icon */}
          <ViewGridIcon className="h-10
                                    w-10 p-2
                                    rounded-full 
                                  hover:bg-gray-200 
                                    cursor-pointer" />

          {/*Avatar */}
          <Avatar url="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg"/>
        </div>
      </header>
      {/*Body*/}
      <form className="flex flex-col items-center mt-10 flex-grow w-4/5">
        <Image 
          src="
          https://www.graphicsprings.com/filestorage/stencils/97c7b645e4109f35745eeb9a75952070.png"
          width={100}
          height={110}
          alt="logo"
        />
        <div className="flex w-full mt-5 
                        hover:shadow-lg 
                        max-w-md 
                        rounded-full 
                        border 
                        border-gray-200
                        px-10 py-3 
                        items-center 
                        sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input
          ref={searchInputRef}
          type="text" 
          className=" focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex 
                        flex-col 
                        w-1/2 
                        space-y-2 
                        justify-center mt-8
                        sm:space-y-0
                        sm:flex-row sm:space-x-4 ">
          <button onClick={search} className="btn">Search </button>
        <button onClick={search} className="btn">Happy Hacking :-)</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
