import React from "react";
import { IErrorBoundryProps } from "../types/error/ErrorBoundryProps";
import { IErrorBoundryState } from "../types/error/IErrorBoundaryState ";
import { error } from "console";
import ErrorPage from "../pages/ErrorFallbackProps";

export class ErrorBoundry extends React.PureComponent<
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
      return (
        <ErrorPage
          error={this.state.error}
          onRefresh={this.handleRefresh}
          errorElement={this.props.errorElement}
        />
      );
    }
    return this.props.children;
  }
}
