'use client';

import React, { FC } from 'react';
import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  type: 'reset' | 'submit' | 'button';
  text?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CustomButton: FC<ICustomButtonProps> = ({ children, onClick, type = 'button', disabled = false }) => (
  <button type={type} disabled={disabled} className={`button-base ${style.button}`} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
