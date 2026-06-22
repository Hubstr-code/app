import { ChatErrorType } from '@lobechat/types';
import { TRPCClientError } from '@trpc/client';
import { t } from 'i18next';

import { message } from '@/components/AntdStaticMethods';

interface HubstrModelDeprecatedErrorData {
  modelType?: string;
  requestedModel?: string;
}

export const handleHubstrModelDeprecatedError = (error: unknown) => {
  if (!(error instanceof TRPCClientError) || error.message !== ChatErrorType.HubstrModelDeprecated)
    return;

  const requestedModel = (error.data?.errorData as HubstrModelDeprecatedErrorData | undefined)
    ?.requestedModel;

  message.error(
    t('response.HubstrModelDeprecated', {
      model: requestedModel ?? '-',
      ns: 'error',
    }),
  );
};
