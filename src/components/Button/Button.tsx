import "./Button.css";

interface ButtonProps {
    text: string;
    type?: "primary";
    onClick: () => void;
}

export default function Button({ text, type = "primary", onClick }: ButtonProps) {
    return (
        <button className={`Button  Button--${type}`} onClick={onClick}>
            {text}
        </button>
    );
}