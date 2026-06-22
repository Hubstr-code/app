import { ORG_NAME } from '@lobechat/business-const';
import { type HubstrProps } from '@lobehub/ui/brand';
import { Hubstr } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomORG } from '@/const/version';

export const OrgBrand = memo<HubstrProps>((props) => {
  if (isCustomORG) {
    return <span>{ORG_NAME}</span>;
  }

  return <Hubstr {...props} />;
});
