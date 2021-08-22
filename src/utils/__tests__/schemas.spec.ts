// Lib
import * as faker from 'faker';
// App
import {
  buildRawContentUrl,
  getApiSchemaUrl,
} from '../schemas';

describe('utils', () => {
  describe('schemas', () => {
    describe('buildRawContentUrl', () => {
      it('should return false with a non-array', () => {
        const params = {
          filePath: faker.system.fileName(),
          repoName: faker.random.word(),
          repoOwner: faker.internet.userName(),
          treeIsh: faker.git.branch(),
        };

        const expected = `https://raw.githubusercontent.com/${params.repoOwner}/${params.repoName}/${params.treeIsh}/${params.filePath}`;

        const actual = buildRawContentUrl(params);

        expect(actual).toBe(expected);
      });
    });

    describe('getApiSchemaUrl', () => {
      it('should return false with a non-array', () => {
        const expected = 'https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json';

        const actual = getApiSchemaUrl();

        expect(actual).toBe(expected);
      });
    });
  });
});
