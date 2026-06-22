import type { BuiltinSkill } from '@lobechat/types';

import { AgentBrowserSkill } from './agent-browser';
import { ArtifactsSkill } from './artifacts';
import { HubstrSkill } from './lobehub';
import { TaskSkill } from './task';

export { AgentBrowserIdentifier } from './agent-browser';
export { ArtifactsIdentifier } from './artifacts';
export { HubstrIdentifier } from './lobehub';
export { TaskIdentifier } from './task';

export const builtinSkills: BuiltinSkill[] = [
  AgentBrowserSkill,
  ArtifactsSkill,
  HubstrSkill,
  TaskSkill,
  // FindSkillsSkill
];
