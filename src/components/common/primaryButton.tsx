import { ReactElement } from "react";

export const PrimaryButton = ({ text, onClick, buttonType, className, icon }:
     { 
        text: string; 
        onClick?: () => void; 
        buttonType?: 'submit' | 'reset' | 'button' | undefined; 
        className: string;
        icon?: ReactElement
     }) => {
    return (
        <button className={className} onClick={onClick} type={buttonType}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
            </button>
    )
}