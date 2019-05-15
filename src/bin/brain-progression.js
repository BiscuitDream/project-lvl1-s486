#!/usr/bin/env node

import core from '..';
import { progressionDescription, progressionQuestion, progressionAnswer } from '../games/progression';

core(progressionDescription, progressionQuestion, progressionAnswer);
