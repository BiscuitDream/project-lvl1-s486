#!/usr/bin/env node

import { core } from '..';
import { calcDescription, calcQuestion, calcAnswer } from '../games/calc';

core(calcDescription, calcQuestion, calcAnswer);
