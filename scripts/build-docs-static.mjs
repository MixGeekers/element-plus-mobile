import { spawnSync } from 'node:child_process'

const env = {
  ...process.env,
  DOC_ENV: process.env.DOC_ENV || 'preview',
  DOC_OUT_DIR: process.env.DOC_OUT_DIR || '../site',
  DOC_CLEAN_URLS: process.env.DOC_CLEAN_URLS || 'false',
}

const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
const result = spawnSync(command, ['run', '-C', 'docs', 'build'], {
  env,
  shell: process.platform === 'win32',
  stdio: 'inherit',
})

if (typeof result.status === 'number') process.exit(result.status)
if (result.error) throw result.error
process.exit(1)
