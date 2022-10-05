import React, { Component } from "react";
interface ErrorProps {
  Fallback: JSX.Element;
  children: React.ReactNode;
}

export default class ErroBoundary extends Component<ErrorProps> {
  public state = { error: null };
  static getDerivedStateFromError(error: string | object) {
    return { error };
  }
  render() {
    const { error } = this.state;
    console.log(this.props);
    const { children, Fallback } = this.props as any;
    if (error) return <Fallback error={error} />;
    return children;
  }
}
