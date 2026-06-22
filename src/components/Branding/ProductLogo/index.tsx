'use client';

import { type HubstrProps } from '@lobehub/ui/brand';
import { Hubstr } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomBranding } from '@/const/version';

import CustomLogo from './Custom';

interface ProductLogoProps extends HubstrProps {
  height?: number;
  width?: number;
}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  if (isCustomBranding) {
    return <CustomLogo {...props} />;
  }

  return <Hubstr {...props} />;
});
