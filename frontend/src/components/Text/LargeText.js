const LargeText = ({ children, className }) => {
    return <div className={`text-4xl font-bold ${className}`}>
        {children}
    </div>
};

export default LargeText;