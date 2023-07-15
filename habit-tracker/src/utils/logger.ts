const fs = require("fs");
//import fs from 'fs';
import { Logger, LoggerService } from '@nestjs/common';
import { LOG_FILE_PATH } from 'src/constants';
import { dateToString } from './date-to-string';

export class CustomLogger implements LoggerService {
  private readonly logger;
  constructor(name: string) {
    this.logger = new Logger(name);
  }

  log(message: string, ...optionalParams: any[]) {
    this.logger.log(message, ...optionalParams);
    this.writeLogToFile(message, 'log');
  }

  error(message: string, ...optionalParams: any[]) {
    this.logger.error(message, ...optionalParams);
    this.writeLogToFile(message, 'error');
  }

  warn(message: string, ...optionalParams: any[]) {
    this.logger.warn(message, ...optionalParams);
    this.writeLogToFile(message, 'warn');
  }

  private getLoggerMessage(message: string, type: string) {
    return `[${new Date()}] - ${type} - ${message}\n`;
  }

  private getLogFilepath() {
    return LOG_FILE_PATH + 'log_' + dateToString(new Date()) + ".log";
  }

  private async writeLogToFile(message: string, type: string) {
    fs.appendFile(this.getLogFilepath(), this.getLoggerMessage(message, type), async (error) => {
      if (error?.message.indexOf('no such file') > -1) {
        if (!fs.existsSync(LOG_FILE_PATH)){
          fs.mkdirSync(LOG_FILE_PATH);
        }
        fs.writeFile(this.getLogFilepath(), this.getLoggerMessage(message, type), (error) =>  {
          if (error) throw error;
        });
      } else if (error) throw error;
    });
  }
}