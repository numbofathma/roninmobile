'use client';

import React from 'react';
import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  type: 'reset' | 'submit' | 'button';
  text?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CustomButton = ({ children, onClick, type = 'button', disabled = false }: ICustomButtonProps) => (
  <button type={type} disabled={disabled} className={`button-base ${style.button}`} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
