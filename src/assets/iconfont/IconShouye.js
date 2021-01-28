/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShouye = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M759.7 955.802H586.9c-18.099 0-32.102-13.901-32.102-32.103V647.7h-99v276c0 18.098-13.901 32.102-32.103 32.102H253.701c-53.002 0-96.2-43.203-96.2-96.2V578.104h-18.099a75.028 75.028 0 0 1-75.3-75.3c0-19.502 7-37.6 20.9-51.599l324.7-344.207c53.003-55.7 140.8-58.501 197.899-5.602 1.397 2.801 2.8 4.199 5.6 5.602L937.903 451.2c29.302 29.302 27.899 76.698-1.398 105.902-13.9 13.9-33.397 20.9-53.002 20.9h-27.899V859.5c0.195 53.099-43.003 96.302-95.903 96.302z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
