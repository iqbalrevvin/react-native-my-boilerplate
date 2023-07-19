import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CGap = ({ width = 0, height = 5 }) => <View style={{ width, height }} />;

CGap.defaultProps = {
    height: 5,
    width: 0,
};

CGap.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};

export default React.memo(CGap);
