const PasswordInput = ({ placeholder, value, onChange }) => {
    return <input 
        className="text-slate-400 bg-inherit text-2xl w-full"
        type="password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
}

export default PasswordInput;