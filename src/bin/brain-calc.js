#!/usr/bin/env node

import { core } from '..';
import { calcRules, calcQuestion, calcAnswer } from '../games/game-calc';

core(calcRules, calcQuestion, calcAnswer);
