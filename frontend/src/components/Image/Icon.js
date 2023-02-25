const Icon = ({ src, onClick, className }) => {
    return <img src={src} onClick={onClick} className={`${className}`} alt="icon" />
}

export default Icon;