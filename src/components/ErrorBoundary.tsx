import React from 'react';

import SomethingWentWrong from '../pages/SomethingWentWrong';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(/*error*/) {
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo){
  //     console.log(error)
  //     console.log(errorInfo)
  // }

  render() {
    if (this.state.hasError) {
      return <SomethingWentWrong />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
