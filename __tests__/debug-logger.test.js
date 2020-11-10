'use strict';
const mongoose = require('mongoose');
const request = require('supertest');
const debugLogger = require('../lib/debug/debug-logger');

const chalk = require('chalk');
const log = console.log;
const inverse = chalk.inverse;

const white = chalk.inverse.white;
const red = chalk.inverse.redBright;
const blue = chalk.inverse.blueBright;
const green = chalk.inverse.greenBright;
const black = chalk.inverse.blackBright;
const cyan = chalk.inverse.cyanBright;

debugLogger.log = jest.fn(() => 'test')
test(`Debugger logger testing`, () => {
  const result = debugLogger.log(10000, 10)
  expect(result).toBe('test')
  expect(debugLogger.log).toHaveBeenCalled()
  expect(debugLogger.log).toHaveBeenCalledWith(10000, 10)
})
