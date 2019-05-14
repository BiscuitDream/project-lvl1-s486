#!/usr/bin/env node

import { core } from '..';
import { evenRules, evenQuestion, evenAnswer } from '../games/even';

core(evenRules, evenQuestion, evenAnswer);
