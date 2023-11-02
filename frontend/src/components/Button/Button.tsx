import React, {ButtonHTMLAttributes, FC, MouseEventHandler} from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    srcURI: string,
    onClick: (event: React.MouseEvent) => void,
}

const Button:FC<ButtonProps> = ({srcURI, onClick, ...rest}) => {
    return <button className={styles.button} {...rest} onClick={onClick}>
        <img className={styles.img} src={srcURI} alt=""/>
    </button>
}

export default Button;