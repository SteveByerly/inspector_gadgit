// Lib
import * as faker from 'faker';
import fs = require('fs');
import fsPromised = require('fs/promises');
import got = require('got');
import { PassThrough } from 'stream';
import { mocked } from 'ts-jest/utils';
// App
import { PathExistsError } from '../../errors';
import {
  downloadFile,
  pathExists,
  writeFile,
} from '../files';

jest.mock('fs');
jest.mock('fs/promises');
jest.mock('got');

describe('utils', () => {
  describe('files', () => {
    let mockFilepath: string;
    const mockedFs = mocked(fs);
    const mockedFsPromised = mocked(fsPromised);
    const mockedGot = mocked(got.default);

    beforeEach(() => {
      mockFilepath = faker.system.filePath();
    });

    describe('pathExists', () => {
      it('should return true if calling fs.access does not throw', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockResolvedValueOnce();

        const actual = await pathExists(__dirname);
        expect(actual).toBeTrue();
      });

      it('should return false if fs.access throws an error', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockRejectedValueOnce(new Error());

        const actual = await pathExists(mockFilepath);
        expect(actual).toBeFalse();
      });
    });

    describe('writeFile', () => {
      it('should throw PathExistsError if the path exists and overwrite != true', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockResolvedValueOnce();

        const actual = writeFile(mockFilepath, '', false);
        await expect(actual).rejects.toThrowError(PathExistsError);
      });

      it('should pipe the content to a new write stream', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockRejectedValueOnce(new Error());

        const mockReadable = new PassThrough();
        const mockWriteable = new PassThrough();
        mockedFs.createWriteStream.mockReturnValueOnce(mockWriteable as any);

        const actual = writeFile(mockFilepath, mockReadable);

        setTimeout(() => {
          mockReadable.emit('data', faker.random.word());
          mockReadable.emit('end');
        }, 0);

        await actual;
        await expect(actual).resolves.toBeUndefined();
      });
    });

    describe('downloadFile', () => {
      it('should throw PathExistsError if the path exists and overwrite != true', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockResolvedValueOnce();

        const mockReadable = new PassThrough();
        jest.spyOn(mockedGot, 'stream').mockImplementationOnce(() => mockReadable as any);

        const actual = downloadFile(mockFilepath, '', false);
        await expect(actual).rejects.toThrowError(PathExistsError);
      });

      it('should stream the content and pipe to a new write stream', async () => {
        expect.assertions(1);

        mockedFsPromised.access.mockRejectedValueOnce(new Error());

        const mockReadable = new PassThrough();
        jest.spyOn(mockedGot, 'stream').mockImplementationOnce(() => mockReadable as any);

        const mockWriteable = new PassThrough();
        mockedFs.createWriteStream.mockReturnValueOnce(mockWriteable as any);

        const actual = downloadFile(mockFilepath, '', false);

        setTimeout(() => {
          mockReadable.emit('data', faker.random.word());
          mockReadable.emit('end');
        }, 0);

        await actual;

        await expect(actual).resolves.toBeUndefined();
      });
    });
  });
});
