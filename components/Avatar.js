import Image from "next/image"
function Avatar({url, className}) {
    return (
        <Image
        loading="lazy"
        className={`rounded-full
                 h-10
                 cursor-pointer 
                 transition 
                 duration-150 
                 transform 
                 hover:scale-110
                 ${className}
    `}
        src={url}
        alt="Profile pic"
        height={35}
        width={40}
        />
    )
}

export default Avatar
