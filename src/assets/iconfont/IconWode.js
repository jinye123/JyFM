/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWode = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 590.336c149.504 0 270.848-138.24 270.848-308.736 0-162.816-114.176-281.6-270.848-281.6S241.152 119.296 241.152 282.112c0 169.984 120.832 308.224 270.848 308.224z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M1023.488 958.976c0-12.8-3.072-106.496-87.552-192.512-88.064-89.6-230.912-135.168-423.936-135.168-205.824 0-354.304 51.2-439.808 152.576C3.072 865.792 1.024 949.76 1.024 958.464v0.512c-2.56 15.872 2.048 31.232 12.288 44.032 10.752 12.8 27.648 20.992 46.08 20.992h907.264c16.896 0 32.768-6.656 44.544-19.456 9.216-11.264 14.336-28.672 12.288-45.568z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
