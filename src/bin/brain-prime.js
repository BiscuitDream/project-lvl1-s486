#!/usr/bin/env node

import { core } from '..';
import { primeDescription, primeQuestion, primeAnswer } from '../games/prime';

core(primeDescription, primeQuestion, primeAnswer);
