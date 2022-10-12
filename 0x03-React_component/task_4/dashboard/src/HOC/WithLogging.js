import React from 'react';
import PropTypes from 'prop-types';

export default function WithLogging({Wrapped}) {

  class BuildWithLogging extends React.Component {
    displayName = `withLogging(${
      Wrapped.type.name ? Wrapped.type.name
      : Wrapped.type.displayName ? Wrapped.type.displayName
      : 'Component'
    })`;

    componentDidMount() {
      console.log(`Component ${this.displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.displayName} is going to unmount`);
    }

    render() {
      // console.log('in class render', Wrapped.props)
      return ( Wrapped )
    }
  }
  return < BuildWithLogging />;
}

WithLogging.propTypes = {
  Wrapped: PropTypes.node,
}

WithLogging.defaultProps = {
  Wrapped: <div name="bonkers">wtf</div>,
}
