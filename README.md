# igal.dev

A first design draft of Igal Klebanov's personal site. Astro generates static
HTML and CSS, with a small inline theme script. A sticky profile column and
numbered project sections form the desktop layout; mobile stacks them vertically.
The tangerine profile panel contrasts with white or charcoal project sections.
System sans-serif handles labels and project text, with locally served Source
Serif 4 for the introduction. Its license is in `public/fonts/source-serif-LICENSE.md`.
Font source: https://github.com/adobe-fonts/source-serif.

The theme control uses the same pill switch and system button as kysely.dev.
The sun/moon pill switches to an explicit light or dark choice. The monitor button
toggles OS-following; turning it off pins the currently displayed theme.
System is the default. Explicit choices are remembered in local storage. The saved choice is
applied before the page renders. Without JavaScript, the site follows the OS theme.

## Development

Requires Node.js 22.12+ and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Production preview

```sh
pnpm build
pnpm preview
```

The generated site is in `dist/`. GitHub Actions builds and deploys it to GitHub
Pages on every push to `main`. The workflow reads the site origin and base path
from Pages settings, so assets and navigation work both at the repository URL
and at a custom domain. Run the deployment workflow again after changing domains.

## Editing

- `src/pages/index.astro`: homepage copy and selected projects.
- `src/components/KyselyExperience.astro`: Kysely role history and source links.
- `src/components/ZodExperience.astro`: Zod role history and selected contributions.
- `src/components/ExperienceTimeline.astro`: shared timeline layout.
- `src/components/PrismaDevExperience.astro`: prisma dev authorship timeline.
- `src/styles/global.css`: typography, colors, and responsive layout.
- `src/layouts/Page.astro`: shared document, navigation, footer, and metadata.
- `src/components/ThemeControl.astro`: theme buttons and their styles.
- `public/favicon.svg`: site icon.

The personal copy is a draft for review. Project roles and interests are based
on the public GitHub profile. There are no sample articles or invented publication
dates. Future posts can use Astro's built-in Markdown support when needed.

## Kysely timeline sources

Role boundaries use Igal's chosen historical milestones, displayed at month
precision. They are not an independent record of role appointments.

- Contributor: [PR #116](https://github.com/kysely-org/kysely/pull/116),
  first merged PR, July 18, 2022.
- Collaborator: [commit 5c33f513](https://github.com/kysely-org/kysely/commit/5c33f5139f3ea1b6b9c68adf0fc2b471be950c35),
  added to `package.json` on September 8, 2022 in Israel time (September 7 UTC).
  It reached master in [PR #153](https://github.com/kysely-org/kysely/pull/153)
  on September 10, 2022. The commit timestamp is not a preserved push timestamp.
  During this period, Igal became more involved on Discord and in design
  discussions with Sami, then gained write access. [PR #213](https://github.com/kysely-org/kysely/pull/213),
  opened November 1, 2022 from `kysely-org/kysely:extending-kysely-suggestions`.
  This is the earliest authored PR with `isCrossRepository: false` in GitHub's
  chronological PR history. It proves the branch existed by that date, but
  does not establish the exact branch-creation date or rule out earlier branches
  without PRs.
- Member: creation of the [Kysely GitHub organization](https://github.com/kysely-org),
  March 25, 2023. `GET /orgs/kysely-org` reports
  `created_at: 2023-03-25T20:10:17Z`. Igal identifies the organization's creation
  as when he became a member; the API timestamp records organization creation,
  not an individual membership event.
- Co-lead: [PR #1414](https://github.com/kysely-org/kysely/pull/1414),
  merged April 6, 2025, adding Igal under the README's project leads.

## Zod timeline sources

- Contributor: [PR #1555](https://github.com/colinhacks/zod/pull/1555),
  first merged PR, November 14, 2022 at 01:15 UTC. The first PR opened
  ([#1542](https://github.com/colinhacks/zod/pull/1542)) merged later that day.

Selected contributions link directly to Igal's merged PRs:

- Template literal validation: [#1786](https://github.com/colinhacks/zod/pull/1786),
  merged into the v4 branch May 9, 2024. Colin revised the API before merging.
  This date does not mark the Zod 4 release.
- Date and time checks: [#1766](https://github.com/colinhacks/zod/pull/1766),
  merged April 7, 2024.
- BigInt validation: [#1711](https://github.com/colinhacks/zod/pull/1711),
  merged February 27, 2023.

## prisma dev timeline sources

Authorship proof: [@prisma/dev 0.25.2 package.json, line 6](https://npmx.dev/package-code/@prisma/dev/v/0.25.2/package.json#L6).

The Author period is May 2025–February 2026. Its start uses the earliest npm
publication of either package, as requested by Igal; its end is supplied by Igal.
These publication timestamps do not establish when development began.

- [@prisma/cli-dev registry metadata](https://registry.npmjs.org/@prisma%2Fcli-dev):
  package created May 6, 2025 at 15:17:41.033 UTC; version `0.0.0` published
  at 15:17:41.289 UTC.
- [@prisma/dev registry metadata](https://registry.npmjs.org/@prisma%2Fdev):
  package created May 6, 2025 at 20:01:15.548 UTC; version `0.0.0` published
  at 20:01:15.933 UTC.

## Studio authorship source

The Author and lead period is March 2025–February 2026. The start follows the first npm
publication; the end is supplied by Igal. [Registry metadata](https://registry.npmjs.org/@prisma%2Fstudio-core)
records package creation on March 14, 2025 at 17:41:54.364 UTC and publication
of version `0.0.0` at 17:41:54.621 UTC.

Authorship proof: [@prisma/studio-core 0.27.0 package.json, lines 121–131](https://npmx.dev/package-code/@prisma/studio-core/v/0.27.0/package.json#L121-L131).

## Profile portrait

`src/assets/igal-sunglasses.png` is a transparent portrait cutout prepared with
the built-in image generation tool from [Igal's Instagram photo](https://www.instagram.com/p/DPWvsuCjZyZ/).
The edit prompt is recorded in `design/portrait-prompt.txt`. Astro generates
responsive WebP assets at build time. The photo is not a link; visitors do not load an Instagram embed or remote image.

## Footer portrait

`src/assets/igal-footer.png` is a transparent cutout of Igal seated in the
front row, wearing the shirt with the lime circle, from the photo he supplied.
It was prepared with the built-in image generation tool; the exact prompt is
in `design/footer-portrait-prompt.txt`. `src/components/PageOutro.astro` renders
it with responsive, lazy-loaded WebP images and the footer caption.

## Custom domain

To connect `igal.dev`, set it as the custom domain in GitHub Pages settings and
point the Cloudflare apex record (`@`) to `igalklebanov.github.io` with a flattened
CNAME, DNS only. Preserve existing MX and TXT records. Enable HTTPS in Pages
once its certificate is ready, then rerun the deployment workflow.

## OpenTofu naming contribution

Igal identifies his role as Namegiver: he coined "Tofu," which became OpenTofu.
The entry uses year precision (2023); the exact proposal date is not established.
The [public naming discussion](https://github.com/opentofu/opentofu/issues/296)
and [renaming issue](https://github.com/opentofu/opentofu/issues/451) establish
the naming period, not authorship. The role is intentionally unlinked until
a direct credit or original proposal link is available.
