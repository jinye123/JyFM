/* eslint-disable */

import React from 'react';

import IconWotingwokan from './IconWotingwokan';
import IconFaxian from './IconFaxian';
import IconShouye from './IconShouye';
import IconWode from './IconWode';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-wotingwokan':
      return <IconWotingwokan key="1" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="2" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="3" {...rest} />;
    case 'icon-wode':
      return <IconWode key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
