import React from 'react'
import {AnimationContainer, LottieWrapper, StyledText} from '../pages/search.styled';
import Lottie from 'lottie-react';

export class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return {
      error: true
    }
  }

  render() {
    if (this.state.error) {
      return <AnimationContainer style={{ textAlign: 'center' }}>
        <LottieWrapper>
          <Lottie animationData={require('../assets/img/dog_cry.json')} />
        </LottieWrapper>
        <StyledText>Что-то пошло не так...</StyledText>
      </AnimationContainer>
    }

    return this.props.children
  }
}