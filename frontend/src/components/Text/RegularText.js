const RegularText = ({ children, className }) => {
    return <div className={`text-2xl text-bold ${className}`}>
        {children}
    </div>
};

export default RegularText;