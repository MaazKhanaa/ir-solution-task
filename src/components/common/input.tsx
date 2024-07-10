export const Input = ({type, placeholder, name, onChange, value}:
    {
        type: string; 
        placeholder: string; 
        name: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: string
    }) => {
    return (
        <input className="formInput" value={value} onChange={onChange} type={type} placeholder={placeholder} name={name} />
    )
}