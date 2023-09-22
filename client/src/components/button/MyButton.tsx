import React, { PropsWithChildren} from 'react';
import './MyButton.css'

interface ButtonProps {
  onClick?: (e : React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: React.FC<PropsWithChildren<ButtonProps>> = ({children, onClick}) => {
  return (
    <button className="myButton" onClick={onClick}>{children}</button>
  )
}

export default MyButton