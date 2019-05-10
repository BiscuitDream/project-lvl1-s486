#!/usr/bin/env node

import { core } from '..';
import { primeRules, primeQuestion, primeAnswer } from '../games/game-prime';

core(primeRules, primeQuestion, primeAnswer);
