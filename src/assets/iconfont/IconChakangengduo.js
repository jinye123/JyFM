/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconChakangengduo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.4 452.266667L328.533333 12.8c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L682.666667 512 268.8 951.466667c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 21.333333 12.8 29.866667 12.8 12.8 0 21.333333-4.266667 29.866666-12.8l413.866667-439.466667c34.133333-34.133333 34.133333-85.333333 0-119.466666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconChakangengduo.defaultProps = {
  size: 18,
};

IconChakangengduo = React.memo ? React.memo(IconChakangengduo) : IconChakangengduo;

export default IconChakangengduo;
