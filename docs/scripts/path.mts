import path from 'path';
import url from 'url';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const PROJECT_ROOT = path.resolve(dirname, '..', '..');
export const PACKAGES_ROOT = path.resolve(PROJECT_ROOT, 'packages');
export const DOCUSAURUS_ROOT = path.resolve(PROJECT_ROOT, 'docs');
export const DOCS_ROOT = path.resolve(DOCUSAURUS_ROOT, 'docs');
