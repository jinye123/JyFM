/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFaxian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M507.768595 2.775802C228.868231 2.775802 2.775802 228.868231 2.775802 507.768595c0 278.900364 226.09243 504.992793 504.992793 504.992793 278.900364 0 504.992793-226.09243 504.992793-504.992793C1012.761388 228.868231 786.668959 2.775802 507.768595 2.775802z m252.496397 252.496396L570.926545 570.926545 255.272198 760.264992l189.338447-315.654347 315.654347-189.338447zM507.768595 476.193851a31.574744 31.574744 0 1 0 0 63.149488 31.574744 31.574744 0 0 0 0-63.149488z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

IconFaxian = React.memo ? React.memo(IconFaxian) : IconFaxian;

export default IconFaxian;
