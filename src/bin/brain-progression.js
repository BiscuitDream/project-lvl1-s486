#!/usr/bin/env node

import { core } from '..';
import { progressionRules, progressionQuestion, progressionAnswer } from '../games/game-progression';

core(progressionRules, progressionQuestion, progressionAnswer);
