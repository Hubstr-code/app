import type { AiFullModelCard, AiModelType } from 'model-bank';
import { loadModels as loadModelBankModels, ModelProvider } from 'model-bank';

interface HubstrModelConfig {
  models: AiFullModelCard[];
  planCardModels: string[];
  updatedAt?: string;
  version: number;
}

const getDefaultHubstrModelConfig = (): HubstrModelConfig => ({
  models: [],
  planCardModels: [],
  version: 1,
});

const loadHubstrModelConfig = async (): Promise<HubstrModelConfig> =>
  getDefaultHubstrModelConfig();

export const loadModels = async () =>
  loadModelBankModels({
    providerLoaders: {
      [ModelProvider.Hubstr]: loadHubstrModels,
    },
  });

const loadHubstrModels = async (): Promise<AiFullModelCard[]> =>
  (await loadHubstrModelConfig()).models;

export const loadHubstrPlanCardModels = async (): Promise<string[]> =>
  (await loadHubstrModelConfig()).planCardModels;

export const isHubstrModelAvailable = (
  _id: string,
  _expectedType: AiModelType,
  _options?: {
    getUserEmail?: () => Promise<string | null | undefined>;
    userEmail?: string | null;
  },
): boolean => false;
