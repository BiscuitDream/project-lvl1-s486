#!/usr/bin/env node

import { core } from '..';
import { gcdRules, gcdQuestion, gcdAnswer } from '../games/gcd';

core(gcdRules, gcdQuestion, gcdAnswer);
