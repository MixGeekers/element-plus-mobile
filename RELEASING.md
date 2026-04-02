# Release Runbook

This repository publishes the docs and the npm package from `main`.

## Docs

1. Merge the intended changes into `main`.
2. Confirm `Publish Static Docs` runs on the `main` push.
3. Wait for the workflow to commit the generated `site/` artifacts back to `main`.
4. Verify Cloudflare Pages is configured with:
   - Branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0`
   - Output directory: `site`
5. If sitemap or canonical URLs should use the public docs domain, set the repo variable `DOC_SITE_URL`.

## npm

1. Prepare the release commit on `main`.
2. Create the annotated tag, for example `v0.1.2`.
3. Create a GitHub Release from that tag.
4. Wait for `Publish to NPM registry` to finish successfully.
5. Verify the package on npm:
   - `npm view element-plus-mobile version dist-tags --json`

## Fallback

- If the `release` event was missed, run `publish-npm.yml` manually with:
  - `tag_version`: the release tag, for example `v0.1.2`
  - `source_ref`: the tag or commit to build, usually the same tag
- If docs need a manual retry, run `publish-docs-static.yml` with `workflow_dispatch`.
