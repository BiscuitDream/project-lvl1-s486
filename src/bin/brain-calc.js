#!/usr/bin/env node

import { core } from '..';
import { calcRules, calcQuestion, calcAnswer } from '../games/calc';

core(calcRules, calcQuestion, calcAnswer);
