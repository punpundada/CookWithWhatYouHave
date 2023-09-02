import React from 'react'
import { IErrorFallbackProps } from '../types/error/IErrorPage';


const ErrorFallbackProps = ({error,onRefresh,errorElement}:IErrorFallbackProps) => {
  return (
    <div>
      <h2>Something went wrong: {error.message}</h2>
      <button onClick={onRefresh}>Refresh</button>
      {errorElement?.(error)}
    </div>
  )
}

export default ErrorFallbackProps;
