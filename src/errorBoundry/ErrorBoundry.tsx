import React from "react";
import { IErrorBoundryProps } from "../types/error/ErrorBoundryProps";
import { IErrorBoundryState } from "../types/error/IErrorBoundaryState ";

export class ErrorBoundry extends React.Component<
  IErrorBoundryProps,
  IErrorBoundryState
> {
  constructor(props: IErrorBoundryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render(): React.ReactNode {
    if (this.state.error) {
      console.log("Error Handled");
      return (
        // <ErrorPage
        //   error={this.state.error}
        //   onRefresh={this.handleRefresh}
        //   errorElement={this.props.errorElement}
        // />
        <div className="flex justify-center items-center bg-cyan-400 text-black">
          <h2>Something went wrong: {this.state.error.message}</h2>
          <button onClick={this.handleRefresh}>Refresh</button>
          {this.props.errorElement?.(this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}
