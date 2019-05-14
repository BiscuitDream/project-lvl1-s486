#!/usr/bin/env node

import { core } from '..';
import { gcdDescription, gcdQuestion, gcdAnswer } from '../games/gcd';

core(gcdDescription, gcdQuestion, gcdAnswer);
