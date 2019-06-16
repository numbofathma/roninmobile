import * as React from 'react';
import FlippyFooter from './FlippyFooter';
import '../../static/css/flippy.css';

interface FlippyProps {
    showNavigation?: boolean;
    flipDirection?: 'horizontal' | 'vertical';
    flipOnHover: boolean;
    flipOnClick: boolean;
    usePrettyStyle?: boolean;
    onMouseEnter?: (event: any) => void;
    onMouseLeave?: (event: any) => void;
    onTouchStart?: (event: any) => void;
    onTouchEnd?: (event: any) => void;
    onClick?: (event: any) => void;
    style?: any;
}


interface FlippyState {
    isFlipped: boolean;
    isTouchDevice: boolean;
    activeCardIndex?: number;
}

export default class Flippy extends React.Component<FlippyProps, FlippyState> {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            isTouchDevice: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped
        };
    }

    toggle = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }

    handleFooterDotClick = (newCardIndex) => {
        this.setState({
            isFlipped: newCardIndex === 0
        });
    }

    handleHoverOn = (event) => {
        this.setState({
            isFlipped: true
        });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    }

    handleTouchStart = (event) => {
        this.setState({
            isFlipped: true,
            isTouchDevice: true
        });

        if (this.props.onTouchStart) {
            this.props.onTouchStart(event);
        }
    }

    handleTouchEnd = (event) => {
        this.setState({
            isFlipped: false
        });

        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(event);
        }
    }

    handleHoverOff = (event) => {
        this.setState({
            isFlipped: false
        });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    }

    render() {
        const {children, style, flipDirection, flipOnHover, flipOnClick} = this.props;
        const {isFlipped, activeCardIndex, isTouchDevice} = this.state;
        const methods = !!flipOnHover ? {
            onMouseEnter: this.handleHoverOn,
            onMouseLeave: this.handleHoverOff,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd
        } : flipOnClick ? {
            onClick: this.toggle
        } : {};
        return (
            <div
                className='flippy-container'
                style={{
                    ...style
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
