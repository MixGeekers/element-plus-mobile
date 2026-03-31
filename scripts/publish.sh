#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version
pnpm gen:version

pnpm build

echo "Publishing element-plus-mobile from dist/element-plus"
cd dist/element-plus
pnpm publish --access public --no-git-checks
cd -

echo "✅ Publish completed"
