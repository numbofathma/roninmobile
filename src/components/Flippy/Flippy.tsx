import * as React from 'react';
import FlippyFooter from './FlippyFooter';
import '../../../public/static/css/flippy.css';

interface FlippyProps {
  isFlipped?: boolean;
  showNavigation?: boolean;
  flipDirection?: 'horizontal' | 'vertical';
  flipOnHover: boolean;
  flipOnClick: boolean;
  usePrettyStyle?: boolean;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}


interface FlippyState {
  isFlipped: boolean;
  isTouchDevice: boolean;
  activeCardIndex?: number;
}

class Flippy extends React.Component<FlippyProps, FlippyState> {
  constructor(props: FlippyProps) {
    super(props);
    this.state = {
      isFlipped: false,
      isTouchDevice: false,
    };
  }

  static getDerivedStateFromProps(props: FlippyProps, state: FlippyState) {
    return {
      ...state,
      isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  handleFooterDotClick = (newCardIndex: number) => {
    this.setState({
      isFlipped: newCardIndex === 0,
    });
  };

  handleHoverOn = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      isFlipped: true,
    });

    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  };

  handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    this.setState({
      isFlipped: true,
      isTouchDevice: true,
    });

    if (this.props.onTouchStart) {
      this.props.onTouchStart(e);
    }
  };

  handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    this.setState({
      isFlipped: false,
    });

    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e);
    }
  };

  handleHoverOff = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      isFlipped: false,
    });

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  };

  render() {
    const {
      children, style, flipDirection, flipOnHover, flipOnClick,
    } = this.props;
    const { isFlipped, activeCardIndex, isTouchDevice } = this.state;
    const methods = flipOnHover ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd,
    } : flipOnClick ? {
      onClick: this.toggle,
    } : {};
    return (
      <div
        className="flippy-container"
        style={{
          ...style,
        }}
        {...methods}
      >
        <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
          <div
            className={`flippy-cardContainer ${isFlipped ? 'isActive' : ''} ${isTouchDevice ? 'istouchdevice' : ''}`}
          >
            {children}
          </div>
          {this.props.showNavigation && <FlippyFooter
            onDotClick={this.handleFooterDotClick}
            activeCardIndex={activeCardIndex}
            cards={this.props.children}
          />}
        </div>
      </div>
    );
  }
}

export default Flippy;
