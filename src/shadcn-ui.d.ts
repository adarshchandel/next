// src/shadcn-ui.d.ts

declare module 'shadcn-ui' {
    import * as React from 'react';
  
    export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
      p?: number | string;
      height?: string;
      display?: string;
      flexDirection?: string;
      justifyContent?: string;
      alignItems?: string;
      width?: string;
      maxWidth?: string;
      boxShadow?: string;
      borderRadius?: string;
      bg?: string;
      color?: string;
      mb?: number | string;
      Flex? : string;
    }
  
    export const Box: React.FC<BoxProps>;
  
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      width?: string;
      colorScheme?: string;
      mb?: number | string;
    }
  
    export const Button: React.FC<ButtonProps>;
  
    export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
  
    export const Container: React.FC<ContainerProps>;
  
    export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
      mb?: number | string;
    }
  
    export const Input: React.FC<InputProps>;
  
    export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
      fontSize?: string;
      mb?: number | string;
      textAlign?: string;
    }
  
    export const Text: React.FC<TextProps>;
    export const Flex: React.FC<TextProps>;
  }
  