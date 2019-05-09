#!/usr/bin/env node

import { core } from '..';
import { evenRules, evenQuestion, evenAnswer } from '../games/game-even';

core(evenRules, evenQuestion, evenAnswer);
