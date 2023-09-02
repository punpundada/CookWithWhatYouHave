import { ReactNode } from "react";

export interface IErrorFallbackProps {
    error: Error;
    onRefresh: () => void;
    errorElement?: (error: Error) => ReactNode;
  }