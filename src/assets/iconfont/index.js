/* eslint-disable */

import React from 'react';

import IconChakangengduo from './IconChakangengduo';
import IconWotingwokan from './IconWotingwokan';
import IconFaxian from './IconFaxian';
import IconShouye from './IconShouye';
import IconWode from './IconWode';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-chakangengduo':
      return <IconChakangengduo key="1" {...rest} />;
    case 'icon-wotingwokan':
      return <IconWotingwokan key="2" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="3" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="4" {...rest} />;
    case 'icon-wode':
      return <IconWode key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
