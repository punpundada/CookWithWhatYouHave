import { ReactNode } from "react";

export interface IErrorBoundryProps{
    errorElement?:(error:Error)=> ReactNode ;
    children: ReactNode;
}