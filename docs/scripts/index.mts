import { copyMD } from './copyMD.mts';

async function main() {
  await copyMD();
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
