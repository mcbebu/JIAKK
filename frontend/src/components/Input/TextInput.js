const TextInput = ({ placeholder, value, onChange }) => {
    return <input 
        className="text-slate-400 bg-inherit text-2xl"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
}

export default TextInput;