import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorScreen from "./ErrorScreen";
interface ErrorProps {
  Fallback: JSX.Element;
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErroBoundary extends Component<ErrorProps, State> {
  public state: State = {
    hasError: false,
  };
  static getDerivedStateFromError(_: Error | object): State {
    return { hasError: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("uncaught Error", error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return <ErrorScreen />;
    }
    return this.props.children;
  }
}
