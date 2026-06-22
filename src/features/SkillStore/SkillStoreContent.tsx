'use client';

import { Flexbox, Segmented } from '@lobehub/ui';
import { type SegmentedOptions } from 'antd/es/segmented';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Search from './Search';
import AddSkillButton from './SkillList/AddSkillButton';
import HubstrList from './SkillList/Hubstr';
import MarketSkillList from './SkillList/MarketSkills';
import MCPList from './SkillList/MCP';

export enum SkillStoreTab {
  Hubstr = 'lobehub',
  MCP = 'mcp',
  Skills = 'skills',
}

export const SkillStoreContent = () => {
  const { t } = useTranslation('setting');
  const [activeTab, setActiveTab] = useState<SkillStoreTab>(SkillStoreTab.Hubstr);
  const [lobehubKeywords, setLobehubKeywords] = useState('');
  const [skillKeywords, setSkillKeywords] = useState('');

  const options: SegmentedOptions = [
    { label: t('skillStore.tabs.lobehub'), value: SkillStoreTab.Hubstr },
    { label: t('skillStore.tabs.skills'), value: SkillStoreTab.Skills },
    { label: t('skillStore.tabs.mcp'), value: SkillStoreTab.MCP },
  ];

  const isHubstr = activeTab === SkillStoreTab.Hubstr;
  const isSkills = activeTab === SkillStoreTab.Skills;
  const isMCP = activeTab === SkillStoreTab.MCP;

  return (
    <Flexbox gap={8} style={{ maxHeight: '75vh' }} width={'100%'}>
      <Flexbox gap={8}>
        <Flexbox horizontal align={'center'} gap={8}>
          <Segmented
            block
            options={options}
            style={{ flex: 1 }}
            value={activeTab}
            variant={'filled'}
            onChange={(v) => setActiveTab(v as SkillStoreTab)}
          />
          <AddSkillButton />
        </Flexbox>
        <Search
          activeTab={activeTab}
          onHubstrSearch={setLobehubKeywords}
          onSkillSearch={setSkillKeywords}
        />
      </Flexbox>
      <Flexbox height={496} style={{ marginBlockEnd: -12, marginInline: -16 }}>
        <Flexbox flex={1} style={{ display: isHubstr ? 'flex' : 'none', overflow: 'auto' }}>
          <HubstrList keywords={lobehubKeywords} />
        </Flexbox>
        <Flexbox flex={1} style={{ display: isSkills ? 'flex' : 'none', overflow: 'auto' }}>
          <MarketSkillList keywords={skillKeywords} />
        </Flexbox>
        <Flexbox flex={1} style={{ display: isMCP ? 'flex' : 'none', overflow: 'auto' }}>
          <MCPList />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};
