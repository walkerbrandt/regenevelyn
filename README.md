# Recharged Classics

Original source recovered from the Higgsfield project `recharged-classics`.

## Import status

This repository currently contains 180 text source/configuration files exported from Higgsfield's code viewer, including the original React routes, styles, scroll-animation controller, scene settings, and lockfile. No redesign or animation changes have been made.

**This import is not yet deployment-ready.** The original `app/packages/` workspace dependencies and binary assets (videos, images, icons, and fonts) still need to be transferred. The Higgsfield bulk source checkout repeatedly stalls, and its code viewer disables binary downloads. Missing files have not been replaced with substitutes.

The original Higgsfield website has not been modified or redeployed.

## Original application

- Framework: React 19, TanStack Start, Vite
- Runtime target: Cloudflare Workers
- Package manager: Bun
- Application directory: `app/`

After the missing files are restored, run the original checks and build from `app/` before configuring a hosting provider. The current repository is a source recovery checkpoint, not a live deployment.
