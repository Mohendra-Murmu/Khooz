function Avatar({url}) {
    return (
        <img
        loading="lazy"
        src={url}
        alt="Profile pic"
        className="link"
        />
    )
}

export default Avatar
