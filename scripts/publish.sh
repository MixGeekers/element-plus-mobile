#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version
pnpm gen:version

pnpm build

echo "Publishing element-plus-mobile from dist/element-plus"
cd dist/element-plus
npm publish --access public
cd -

echo "✅ Publish completed"
