import path from 'path';

import fs from 'fs-extra/esm';
import { globby } from 'globby';

import { DOCS_ROOT, PACKAGES_ROOT } from './path.mts';

export const copyMD = async () => {
  await createPackageDocs();
};

const getMDFiles = async ({ patterns, ignore }: { patterns: string | string[]; ignore?: string[] }) => {
  const files = await globby(patterns, {
    cwd: PACKAGES_ROOT,
    ignore: ignore ?? [],
  });

  return files;
};

const createPackageDocs = async () => {
  const files = await getMDFiles({
    patterns: ['**/*.md', '**/*.ko.md'],
    ignore: ['**/*.en.md', '**/node_modules/**/*', '*/*.md'],
  });

  // 각 파일을 복사
  files.forEach(file => {
    const packageFolderName = file.split('/')[0];
    const targetFolderName = path.basename(path.dirname(file)); // 상위 폴더 이름 가져오기
    const destinationPath = path.join(DOCS_ROOT, packageFolderName, `${targetFolderName}.md`); // 복사할 파일명 설정

    // 파일 복사
    fs.copySync(path.resolve(PACKAGES_ROOT, file), destinationPath);
  });
};
