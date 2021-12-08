import { GlobeIcon } from "@heroicons/react/solid"
import Link from "next/link"
function Footer() {

    return (
        <footer className="grid 
                            w-full 
                            divide-y-[1px]
                            divide-gray-300 
                            bg-gray-100 
                            text-sm 
                            text-gray-500">
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className=
                            "grid grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            gap-y-4 
                            px-8 py-3  
                            lg:col-start-2 ">
                <div className="flex 
                                justify-center 
                                items-center 
                                md:col-span-2 
                                lg:col-span-1">
                  <GlobeIcon className="h-5 mr-1 
                                        text-green-700" />  Since 2021
                </div>
                <div className="flex 
                                justify-center 
                                space-x-8 
                                whitespace-nowrap 
                                md:justify-self-start">
                    <Link href="https://mohendra-murmu.web.app"><p className="link">Portfolio</p></Link>
                    <p>Contact</p>
                    <Link href="https://www.linkedin.com/in/mohendra-murmu/"><p className="link">About Me</p></Link>
                </div>
                <div className="flex 
                                justify-center 
                                space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
