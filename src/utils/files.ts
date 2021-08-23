// Lib
import { createWriteStream } from 'fs';
import * as fs from 'fs/promises';
import type { PipelineSource } from 'stream';
import { pipeline } from 'stream/promises';
import { default as got } from 'got';
// App
import { PathExistsError } from '../errors';
import { Logger } from './logging';

const logger = new Logger('file utils');

export const pathExists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

export const writeFile = async <T>(filepath: string, source: PipelineSource<T>, overwrite = false): Promise<void> => {
  const fileExists = await pathExists(filepath);

  if (fileExists !== false) {
    if (overwrite !== true) {
      throw new PathExistsError(filepath);
    }

    logger.warning(`Overwriting file: ${filepath}`);
  }

  const dest = createWriteStream(filepath);
  await pipeline(source, dest);
};

export const downloadFile = async (filepath: string, url: string, overwrite = false): Promise<void> => {
  const input = got.stream(url);
  await writeFile(filepath, input, overwrite);
};
