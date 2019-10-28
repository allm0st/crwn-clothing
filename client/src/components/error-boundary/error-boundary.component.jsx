import React, { Component } from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { children } = this.props;
    const { hasErrored } = this.state;
    return hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/3suxlvm.png" />
        <ErrorImageText>Oops, something went wrong...</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      <>{children}</>
    );
  }
}

export default ErrorBoundary;
