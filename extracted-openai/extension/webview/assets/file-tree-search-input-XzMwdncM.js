import{s as e}from"./chunk-Bj-mKKzh.js";import{n as t,t as n}from"./jsx-runtime-CiQ1k8xo.js";import{t as r}from"./compiler-runtime-b9_ems4H.js";import{_ as i}from"./persisted-signal-BOZfwzlo.js";import{o as a,s as o,t as s}from"./app-scope-DrEO_-1u.js";import{A as c,n as l,r as u,s as d,u as f,v as p}from"./vscode-api-BQyiA7Nu.js";import{c as m,n as h,o as g}from"./lib-DmzE_-kK.js";import{O as _}from"./index.extension-DWAHrUEK.js";import{t as v}from"./button-Ct5VIw_1.js";import{r as y}from"./toast-signal-D0ov9NDL.js";import{t as b}from"./x-DUdPCzC0.js";import{t as x}from"./use-platform-xkPFs4Bg.js";import{i as S,n as C,r as ee,t as w}from"./iconResolver-CHiuKNB0.js";import{t as T}from"./store-COhyes7j.js";import{n as E,r as te}from"./use-resolved-theme-variant-BXP5D6cz.js";import{i as D,n as O,r as k}from"./open-target-selection-C6ftoIcK.js";import{t as A}from"./copy-to-clipboard-D0f6nUvx.js";import{t as j}from"./use-stable-callback-DM7SZOia.js";import{t as M}from"./context-menu-C2Uef0Xm.js";import{t as N}from"./search-69rLUqnP.js";import{t as P}from"./codex-analytics-attribution-DJM2lNSU.js";var ne=`file-tree-container`,F=`data-file-tree-style`,I=`data-file-tree-unsafe-css`,re=`data-file-tree-scrollbar-measure`,ie=`data-file-tree-scrollbar-gutter-measured`,ae=`--trees-scrollbar-gutter-measured`,oe=`header`,se=`context-menu`,ce=`context-menu-trigger`,le={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}};function ue(e,t){if(typeof e==`number`)return{itemHeight:t??le.default.itemHeight,factor:e};let n=le[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var de=le.default.itemHeight,L=`@layer base, theme, unsafe;

@layer base {
  :host {
    /*
      CSS variables use a fallback stack to ensure user and theme colors slot
      in with ease. User colors take precedence over theme colors, which take
      precedence over defaults.

      Fallback order:

      1. --trees-*-override (explicit)
      2. --trees-theme-* (e.g. Shiki/VS Code tokens)
      3. defaults

      Theme variable names mirror Shiki/VS Code theme file JSON tokens.

      // Available CSS Color Overrides
      --trees-fg-override
      --trees-fg-muted-override
      --trees-bg-override
      --trees-bg-muted-override
      --trees-accent-override
      --trees-border-color-override

      --trees-focus-ring-color-override
      --trees-focus-ring-width-override
      --trees-focus-ring-offset-override

      --trees-search-fg-override
      --trees-search-font-weight-override
      --trees-search-bg-override

      --trees-selected-fg-override
      --trees-selected-bg-override
      --trees-selected-focused-border-color-override

      // Git Status Color Overrides
      --trees-status-added-override
      --trees-status-ignored-override
      --trees-status-modified-override
      --trees-status-renamed-override
      --trees-status-untracked-override
      --trees-status-deleted-override
      --trees-git-added-color-override
      --trees-git-ignored-color-override
      --trees-git-modified-color-override
      --trees-git-renamed-color-override
      --trees-git-untracked-color-override
      --trees-git-deleted-color-override

      // Built-in File Icon Color Overrides
      --trees-file-icon-color
      --trees-file-icon-color-astro
      --trees-file-icon-color-babel
      --trees-file-icon-color-bash
      --trees-file-icon-color-biome
      --trees-file-icon-color-bootstrap
      --trees-file-icon-color-browserslist
      --trees-file-icon-color-bun
      --trees-file-icon-color-c
      --trees-file-icon-color-cpp
      --trees-file-icon-color-claude
      --trees-file-icon-color-css
      --trees-file-icon-color-database
      --trees-file-icon-color-default
      --trees-file-icon-color-docker
      --trees-file-icon-color-eslint
      --trees-file-icon-color-git
      --trees-file-icon-color-go
      --trees-file-icon-color-graphql
      --trees-file-icon-color-html
      --trees-file-icon-color-image
      --trees-file-icon-color-javascript
      --trees-file-icon-color-json
      --trees-file-icon-color-markdown
      --trees-file-icon-color-mcp
      --trees-file-icon-color-npm
      --trees-file-icon-color-oxc
      --trees-file-icon-color-postcss
      --trees-file-icon-color-prettier
      --trees-file-icon-color-python
      --trees-file-icon-color-react
      --trees-file-icon-color-ruby
      --trees-file-icon-color-rust
      --trees-file-icon-color-sass
      --trees-file-icon-color-svg
      --trees-file-icon-color-svelte
      --trees-file-icon-color-svgo
      --trees-file-icon-color-swift
      --trees-file-icon-color-table
      --trees-file-icon-color-text
      --trees-file-icon-color-tailwind
      --trees-file-icon-color-terraform
      --trees-file-icon-color-typescript
      --trees-file-icon-color-vite
      --trees-file-icon-color-vscode
      --trees-file-icon-color-vue
      --trees-file-icon-color-wasm
      --trees-file-icon-color-webpack
      --trees-file-icon-color-yml
      --trees-file-icon-color-zig
      --trees-file-icon-color-zip

      // Density
      //
      // A unitless scale factor for padding, gaps, and indentation. Usually
      // set via \`density\` on useFileTree. Individual overrides take precedence.
      //
      //   Compact: 0.8
      //   Default: 1
      //   Relaxed: 1.2
      //
      --trees-density-override

      // Available CSS Layout Overrides
      --trees-gap-override
      --trees-border-radius-override
      --trees-font-family-override
      --trees-font-size-override
      --trees-font-weight-regular-override
      --trees-font-weight-semibold-override
      --trees-level-gap-override
      --trees-item-padding-x-override
      --trees-item-margin-x-override
      --trees-item-row-gap-override
      --trees-icon-width-override
      --trees-icon-nudge-override
      --trees-scrollbar-gutter-override
      --trees-padding-inline-override
    */

    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(
      --trees-fg-override,
      var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1))
    );
    --trees-fg-muted: var(
      --trees-fg-muted-override,
      var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a))
    );
    --trees-bg: var(
      --trees-bg-override,
      var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415))
    );
    /* var(--trees-theme-list-hover-bg, light-dark(#dfebff59, #19283c59)) */
    --trees-bg-muted: var(
      --trees-bg-muted-override,
      var(
        --trees-theme-list-hover-bg,
        light-dark(
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)
          ),
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)
          )
        )
      )
    );
    --trees-input-bg: var(
      --trees-input-bg-override,
      light-dark(#f8f8f8, #070707)
    );

    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;

    --trees-border-color: var(
      --trees-border-color-override,
      var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707))
    );
    --trees-indent-guide-bg: var(
      --trees-indent-guide-bg-override,
      color-mix(in lab, var(--trees-fg-muted) 25%, transparent)
    );
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(
      --trees-border-radius-override,
      calc(6px * var(--trees-density))
    );

    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(
      --trees-font-weight-semibold-override,
      600
    );

    --trees-focus-ring-color: var(
      --trees-focus-ring-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);

    --trees-search-fg: var(
      --trees-search-fg-override,
      var(--trees-theme-input-fg, var(--trees-fg))
    );
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(
      --trees-search-bg-override,
      var(--trees-theme-input-bg, var(--trees-input-bg))
    );

    --trees-scrollbar-thumb: var(
      --trees-scrollbar-thumb-override,
      var(
        --trees-theme-scrollbar-thumb,
        color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))
      )
    );

    --trees-selected-fg: var(
      --trees-selected-fg-override,
      var(--trees-theme-list-active-selection-fg, var(--trees-fg))
    );
    --trees-selected-bg: var(
      --trees-selected-bg-override,
      var(
        --trees-theme-list-active-selection-bg,
        light-dark(
          color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)),
          color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg))
        )
      )
    );
    --trees-selected-focused-border-color: var(
      --trees-selected-focused-border-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );

    /* Git status (e.g. from Shiki theme gitDecoration.*) */
    --trees-status-added: var(
      --trees-status-added-override,
      var(
        --trees-theme-git-added-fg,
        light-dark(var(--trees-added-light), var(--trees-added-dark))
      )
    );
    --trees-status-ignored: var(
      --trees-status-ignored-override,
      var(
        --trees-theme-git-ignored-fg,
        light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))
      )
    );
    --trees-status-modified: var(
      --trees-status-modified-override,
      var(
        --trees-theme-git-modified-fg,
        light-dark(var(--trees-modified-light), var(--trees-modified-dark))
      )
    );
    --trees-status-renamed: var(
      --trees-status-renamed-override,
      var(
        --trees-theme-git-renamed-fg,
        light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))
      )
    );
    --trees-status-untracked: var(
      --trees-status-untracked-override,
      var(
        --trees-theme-git-untracked-fg,
        light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))
      )
    );
    --trees-status-deleted: var(
      --trees-status-deleted-override,
      var(
        --trees-theme-git-deleted-fg,
        light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))
      )
    );
    --trees-git-modified-color: var(
      --trees-git-modified-color-override,
      var(--trees-status-modified)
    );
    --trees-git-added-color: var(
      --trees-git-added-color-override,
      var(--trees-status-added)
    );
    --trees-git-ignored-color: var(
      --trees-git-ignored-color-override,
      var(--trees-status-ignored)
    );
    --trees-git-deleted-color: var(
      --trees-git-deleted-color-override,
      var(--trees-status-deleted)
    );
    --trees-git-renamed-color: var(
      --trees-git-renamed-color-override,
      var(--trees-status-renamed)
    );
    --trees-git-untracked-color: var(
      --trees-git-untracked-color-override,
      var(--trees-status-untracked)
    );

    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);

    --trees-file-icon-color-default: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-astro: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-babel: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bash: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-biome: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-bootstrap: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-browserslist: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bun: var(
      --trees-file-icon-color,
      var(--trees-icon-mauve)
    );
    --trees-file-icon-color-c: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-cpp: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-claude: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-css: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-database: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-docker: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-eslint: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-git: var(
      --trees-file-icon-vermilion,
      var(--trees-icon-vermilion)
    );
    --trees-file-icon-color-go: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-graphql: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-html: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-image: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-javascript: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-json: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-markdown: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-mcp: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-npm: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-oxc: var(
      --trees-file-icon-cyan,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-postcss: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-prettier: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-python: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-react: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-ruby: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-rust: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-sass: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-svg: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-svelte: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-svgo: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-swift: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-table: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-text: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-tailwind: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-terraform: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-typescript: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vite: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-vscode: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vue: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-wasm: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-webpack: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-yml: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-zig: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-zip: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );

    --trees-level-gap: var(
      --trees-level-gap-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-padding-x: var(
      --trees-item-padding-x-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-margin-x: var(
      --trees-item-margin-x-override,
      calc(2px * var(--trees-density))
    );
    --trees-item-row-gap: var(
      --trees-item-row-gap-override,
      calc(6px * var(--trees-density))
    );
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(
      --trees-icon-nudge-override,
      calc(1px * var(--trees-density))
    );
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(
      --trees-action-lane-width-override,
      calc(var(--trees-icon-width) + 2px)
    );
    /* Keep the floating trigger aligned with the row's action lane. Going in
       from the root's right edge: the scroll container reserves
       \`--trees-padding-inline\` of effective inset on each side (its asymmetric
       padding formula cancels the scrollbar gutter on the right), the row
       sits inside that inset, and its trailing \`--trees-item-padding-x\` is the
       action lane itself. The trigger's own focus-ring margin then trims one
       pixel back so the button's visible right edge lines up with the lane. */
    --trees-context-menu-trigger-inline-offset: calc(
      var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width)
    );

    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);

    color-scheme: light dark;
    display: flex;
    flex-direction: column;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
  }

  :host([data-file-tree-virtualized='true']) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper='true'] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [data-file-tree-virtualized-root='true'] {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll='true'],
  [data-file-tree-scrollbar-measure='true'] {
    --trees-scrollbar-thumb-current: transparent;
    overflow-y: auto;
    scrollbar-gutter: stable;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border: 1px solid transparent;
      background-clip: content-box;
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* These are styles for a temporarily generated element to measure the size
   * of the scrollbar.  It's intended to be somewhat similar in scrollbar style
   * scope to the scrollable tree so \`--trees-scrollbar-gutter-measured\` is an
   * accurate reflection of the size the scrollbar gutter takes up. */
  [data-file-tree-scrollbar-measure='true'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'],
    [data-file-tree-scrollbar-measure='true'] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll='true'] {
    position: relative;
    overflow-y: auto;
    flex: 1 1 0;
    min-height: 0;
    padding-inline: max(
        calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px
      )
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(
        calc(
          var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(
              --trees-scrollbar-gutter-measured,
              var(--trees-scrollbar-gutter)
            )
        ),
        0px
      );
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'] {
      padding-inline: max(
          calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px
        )
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(
          calc(
            var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)
          ),
          0px
        );
    }
  }

  [data-file-tree-sticky-overlay='true'] {
    position: sticky;
    top: 0;
    height: 0;
    z-index: 4;
    overflow: visible;
    pointer-events: none;
  }

  /* The overlay DOM is kept populated even at scrollTop=0 so the browser has
   * the rendered rows on hand the moment scrolling begins — otherwise the
   * compositor paints a scrolled frame before React can mount the overlay,
   * and the topmost sticky folder jumps up by a couple of pixels before it
   * "snaps" into its pinned position. We hide it via CSS whenever the scroll
   * is at the top and no scroll is in progress, so the preview doesn't leak
   * through at rest. \`data-overlay-reveal\` is stamped on the root only when
   * the user initiates a scroll while already at the top — exactly the case
   * where we need the pre-mounted overlay to be visible through the first
   * compositor frame. It is deliberately distinct from the general
   * \`data-is-scrolling\` flag so a scroll that ends at the top (e.g. ArrowUp
   * navigation) re-hides the overlay the instant the scroll lands, rather
   * than waiting for the hover-suppression timer to elapse. */
  [data-file-tree-virtualized-root='true'][data-scroll-at-top='true']:not(
      [data-overlay-reveal]
    )
    [data-file-tree-sticky-overlay='true'] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content='true'] {
    background-color: var(--trees-bg);
    position: relative;
    pointer-events: none;
  }

  [data-file-tree-virtualized-list='true'] {
    background-color: var(--trees-bg);
    position: relative;
    min-height: 100%;
    width: 100%;
    overflow-anchor: none;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset='true'] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky='true'] {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    /* Promote to its own compositor layer so text inside the window is
     * rasterized once and GPU-translated during scroll. Without this, the
     * browser re-paints the window (and its text) at every scroll frame,
     * which produces visible 1px shake / character tearing. */
    will-change: transform;
  }

  [data-file-tree-search-container] {
    display: flex;
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    flex: 1;
    height: var(--trees-row-height);
    /* 1px breathing room so the focus-visible outline isn't clipped when the
     * input sits flush against the top of the scroll container. */
    margin-block: 1px;
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;

    &::placeholder {
      color: color-mix(
        in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg)
      );
    }

    &:focus-visible,
    &[data-file-tree-search-input-fake-focus='true'] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  /* The wrapper for the tree items */
  [role='tree'] {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--trees-gap-override, 0);
  }

  /* LIST ITEM */
  [data-type='item'] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    outline: none;
    background-color: var(--trees-bg);
    border: none;
    position: relative;

    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    display: flex;
    flex: 0 0 var(--trees-row-height);
    align-items: center;
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    /* Row states may be translucent, so markers paint the tree background first
     * and then the state color on top to avoid compositing the same alpha twice. */
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;

    &:hover,
    &[data-item-context-hover='true'] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused='true'],
    &:focus-visible {
      z-index: 2;

      /* Flattened segment markers sit high enough to cover the row outline unless
       * their painted background is inset by the focus ring width. */
      [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &::before {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
      }

      &[data-item-selected='true']::before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected='true'] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      [data-item-section='icon'] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match='true'] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: auto;
  }

  /* Sticky rows opt back into pointer events because the overlay wrapper is
   * inert. During scroll, put them back under the same hover suppression as
   * the virtualized list so translucent hover states and menu triggers do not
   * paint over rows moving beneath the sticky stack. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true']:hover:not(
      [data-item-selected='true']
    ),
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'][data-item-context-hover='true']:not(
      [data-item-selected='true']
    ) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected='true']:has(+ [data-item-selected='true']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-item-selected='true'] + [data-item-selected='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* Flattened Directory Parts */
  [data-item-flattened-subitems] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  [data-item-flattened-subitem]:hover,
  [data-item-flattened-subitem-drag-target='true'] {
    text-decoration: underline;
  }

  /* Icon for each item */
  [data-item-section='icon'] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
  }

  :where([data-item-section='icon'] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons='true'] {
    [data-icon-token='astro'] {
      color: var(--trees-file-icon-color-astro);
    }
    [data-icon-token='babel'] {
      color: var(--trees-file-icon-color-babel);
    }
    [data-icon-token='bash'] {
      color: var(--trees-file-icon-color-bash);
    }
    [data-icon-token='biome'] {
      color: var(--trees-file-icon-color-biome);
    }
    [data-icon-token='bootstrap'] {
      color: var(--trees-file-icon-color-bootstrap);
    }
    [data-icon-token='browserslist'] {
      color: var(--trees-file-icon-color-browserslist);
    }
    [data-icon-token='bun'] {
      color: var(--trees-file-icon-color-bun);
    }
    [data-icon-token='c'] {
      color: var(--trees-file-icon-color-c);
    }
    [data-icon-token='cpp'] {
      color: var(--trees-file-icon-color-cpp);
    }
    [data-icon-token='claude'] {
      color: var(--trees-file-icon-color-claude);
    }
    [data-icon-token='css'] {
      color: var(--trees-file-icon-color-css);
    }
    [data-icon-token='database'] {
      color: var(--trees-file-icon-color-database);
    }
    [data-icon-token='default'] {
      color: var(--trees-file-icon-color-default);
    }
    [data-icon-token='docker'] {
      color: var(--trees-file-icon-color-docker);
    }
    [data-icon-token='eslint'] {
      color: var(--trees-file-icon-color-eslint);
    }
    [data-icon-token='git'] {
      color: var(--trees-file-icon-color-git);
    }
    [data-icon-token='go'] {
      color: var(--trees-file-icon-color-go);
    }
    [data-icon-token='graphql'] {
      color: var(--trees-file-icon-color-graphql);
    }
    [data-icon-token='html'] {
      color: var(--trees-file-icon-color-html);
    }
    [data-icon-token='image'] {
      color: var(--trees-file-icon-color-image);
    }
    [data-icon-token='javascript'] {
      color: var(--trees-file-icon-color-javascript);
    }
    [data-icon-token='json'] {
      color: var(--trees-file-icon-color-json);
    }
    [data-icon-token='markdown'] {
      color: var(--trees-file-icon-color-markdown);
    }
    [data-icon-token='mcp'] {
      color: var(--trees-file-icon-color-mcp);
    }
    [data-icon-token='npm'] {
      color: var(--trees-file-icon-color-npm);
    }
    [data-icon-token='oxc'] {
      color: var(--trees-file-icon-color-oxc);
    }
    [data-icon-token='postcss'] {
      color: var(--trees-file-icon-color-postcss);
    }
    [data-icon-token='prettier'] {
      color: var(--trees-file-icon-color-prettier);
    }
    [data-icon-token='python'] {
      color: var(--trees-file-icon-color-python);
    }
    [data-icon-token='react'] {
      color: var(--trees-file-icon-color-react);
    }
    [data-icon-token='ruby'] {
      color: var(--trees-file-icon-color-ruby);
    }
    [data-icon-token='rust'] {
      color: var(--trees-file-icon-color-rust);
    }
    [data-icon-token='sass'] {
      color: var(--trees-file-icon-color-sass);
    }
    [data-icon-token='svg'] {
      color: var(--trees-file-icon-color-svg);
    }
    [data-icon-token='svelte'] {
      color: var(--trees-file-icon-color-svelte);
    }
    [data-icon-token='svgo'] {
      color: var(--trees-file-icon-color-svgo);
    }
    [data-icon-token='swift'] {
      color: var(--trees-file-icon-color-swift);
    }
    [data-icon-token='table'] {
      color: var(--trees-file-icon-color-table);
    }
    [data-icon-token='text'] {
      color: var(--trees-file-icon-color-text);
    }
    [data-icon-token='tailwind'] {
      color: var(--trees-file-icon-color-tailwind);
    }
    [data-icon-token='terraform'] {
      color: var(--trees-file-icon-color-terraform);
    }
    [data-icon-token='typescript'] {
      color: var(--trees-file-icon-color-typescript);
    }
    [data-icon-token='vite'] {
      color: var(--trees-file-icon-color-vite);
    }
    [data-icon-token='vscode'] {
      color: var(--trees-file-icon-color-vscode);
    }
    [data-icon-token='vue'] {
      color: var(--trees-file-icon-color-vue);
    }
    [data-icon-token='wasm'] {
      color: var(--trees-file-icon-color-wasm);
    }
    [data-icon-token='webpack'] {
      color: var(--trees-file-icon-color-webpack);
    }
    [data-icon-token='yml'] {
      color: var(--trees-file-icon-color-yml);
    }
    [data-icon-token='zig'] {
      color: var(--trees-file-icon-color-zig);
    }
    [data-icon-token='zip'] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  /* Chevron rotation and visual alignment */
  /* Chevron pointing down */
  [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='false'] {
      transform: translate(0, var(--trees-icon-nudge));
    }
    &[data-align-capitals='true'] {
      transform: translate(0, 0);
    }
  }

  [data-item-section='content'] {
    flex: 0 1 auto;
    text-align: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Breaks middle truncate component to also set this */
    /* white-space: nowrap; */
  }

  [data-item-section='decoration'] {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    overflow: hidden;
    color: var(--trees-fg-muted);
  }

  [data-item-section='decoration'] > span {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-item-section='git'],
  [data-item-section='action'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-section='git'] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section='action'] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section='git'] > span,
  [data-item-section='action'] > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-action-affordance='decorative'] {
    opacity: 0.85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    /* line-height: calc(var(--trees-row-height) - 8px); */
    color: inherit;
    background-color: transparent;
    border: 0;
    padding-inline: 6px;
    outline: none;
    box-sizing: border-box;
  }

  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='action'],
  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='decoration'] {
    display: none;
  }

  /* Chevron pointing right */
  [aria-expanded='false'][data-item-type='folder']
    > [data-item-section='icon']
    > [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='true'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
    &[data-align-capitals='false'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
  }

  /* LIST IDENTATION */
  /* Spacing container */
  [data-item-section='spacing'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - 0.5px);

    &:empty {
      padding-left: 0;
    }
  }

  /* Spacing per level */
  [data-item-section='spacing-item'] {
    transform: translateX(-0.25px);
    display: inline-block;
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity 150ms ease;

    & + & {
      margin-left: calc(
        var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - 0.5px
      );
    }
  }

  :host(:hover) [data-item-section='spacing-item'] {
    opacity: 0.75;
  }

  /* Git status indicator */

  /* This is a folder that contains a git change */
  [data-item-contains-git-change='true'] > [data-item-section='git'] {
    color: var(--trees-git-modified-color);
    opacity: 0.5;
    fill: currentColor;
  }

  /* These are files that have a git change */
  [data-item-git-status] {
    &
      > :where([data-item-section='icon'])
      > :where(:not([data-icon-name='file-tree-icon-chevron'])) {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='content'] {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='git'] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status='added'] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status='deleted'] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status='ignored'] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section='icon'] {
      opacity: 0.5;
    }
  }

  [data-item-section='git'] [data-icon-name='file-tree-icon-dot'] {
    /* this is a nudge to align the dot with the likely lowercase text. it's slightly
    generalizable, but other fonts are gonna need other nudges i assume */
    transform: translateY(calc(0.65ex - 50%));
  }

  [data-item-git-status='modified'] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status='renamed'] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status='untracked'] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  /* Drag and drop */
  [data-item-drag-target='true'] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging='true'] {
    opacity: 0.5;
  }

  /* Lock icon for locked paths (sibling of content) */
  [data-item-section='lock'] {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    color: var(--trees-fg-muted);
  }
  [data-item-section='lock'] svg {
    display: block;
  }

  [data-type='header-slot'] {
    display: block;
    flex: 0 0 auto;
  }

  [data-type='context-menu-wash'] {
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: transparent;
    touch-action: none;
  }

  [data-type='context-menu-anchor'] {
    position: absolute;
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    display: none;
    align-items: center;

    &[data-visible='true'] {
      display: flex;
    }
  }

  /* Hide the floating trigger while the scroll container is actively moving.
   * The anchor is positioned against the root, not the scroll content, so its
   * \`top\` follows the row via a React state update — one frame behind the
   * compositor. That delay is visible as the trigger hovering over the wrong
   * row during the first frame of a scroll. The \`data-is-scrolling\` flag on
   * the root is flipped synchronously on \`wheel\`/\`touchmove\`/\`keydown\` before
   * the compositor commits the next paint, so this selector hides the anchor
   * in the same frame the scroll begins. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='context-menu-anchor'] {
    display: none;
  }

  [data-type='context-menu-anchor'] > slot[name='context-menu'] {
    display: block;
    width: 0;
    min-width: 0;
    flex: 0 0 0;
    overflow: visible;
  }

  /* Single floating context menu trigger */
  [data-type='context-menu-trigger'] {
    all: unset;
    align-items: center;
    justify-content: center;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    transition: color 120ms ease;

    display: flex;
  }

  [data-type='context-menu-trigger']:hover,
  [data-type='context-menu-trigger'][aria-expanded='true'] {
    color: var(--trees-fg);
  }

  /** @pierre/truncate css here, manually copy pasted for now */
  [data-truncate-container] {
    /* CUSTOM TO TREES, TO SUPPORT THE OUTLINE */
    margin-top: -1px;
    margin-bottom: -1px;

    /* Width of the fade from default marker to text */
    --truncate-internal-marker-fade-width: var(
      --truncate-marker-fade-width,
      2px
    );
    /* Width of the solid color between the fade from the default marker to the text */
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    /* Opacity of the marker 'color' property, not of the element itself */
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    /* Opacity of the marker 'color' property specifically for the middle truncate, not opacity of the element itself */
    --truncate-internal-middle-marker-opacity: var(
      --truncate-middle-marker-opacity,
      80%
    );
    /* Background color of the default marker */
    --truncate-internal-marker-background-color: var(
      --truncate-marker-background-color,
      light-dark(white, black)
    );
    --truncate-internal-marker-background-overlay-color: var(
      --truncate-marker-background-overlay-color,
      transparent
    );
    --truncate-internal-marker-block-inset: var(
      --truncate-marker-block-inset,
      0px
    );
    /* Duration of the fade out animation for the marker */
    --truncate-internal-marker-fade-out-duration: var(
      --truncate-marker-fade-out-duration,
      0ms
    );
    /* Duration of the fade in animation for the marker */
    --truncate-internal-marker-fade-in-duration: var(
      --truncate-marker-fade-in-duration,
      100ms
    );

    /* FADE Variant specifics */
    --truncate-internal-fade-marker-color: var(
      --truncate-fade-marker-color,
      #000
    );
    --truncate-internal-fade-marker-width: var(
      --truncate-fade-marker-width,
      0.2lh
    );

    /*
    In some special cases people might be adding spacing in other ways
    that would benefit from being able to override this, however the container
    query below can't use this and would need to be redeclared with the overridden
    value. It's a bad time, but better than nothing.
    */
    --truncate-internal-single-line-height: 1lh;

    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    overflow: hidden;
  }

  [data-truncate-marker] {
    display: flex;
    position: absolute;
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    align-items: center;
    background-clip: content-box;
    z-index: 2;
    color: color-mix(
      in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent
    );

    /* Core trick for hiding the marker until overflow occurs */
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content='visible'] {
    white-space: nowrap;
  }

  [data-truncate-content='overflow'] {
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
            user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    container: measure / size;
    overflow: visible;
    -webkit-user-select: none;
            user-select: none;
    pointer-events: none;
  }

  [data-truncate-container='truncate'] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }
    & [data-truncate-marker] {
      right: 0;
    }
    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container='fruncate'] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }
    & [data-truncate-content] {
      direction: rtl;
    }
    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }
    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant='default'] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
    }
    & [data-truncate-marker]::after,
    & [data-truncate-marker]::before {
      content: '';
      position: absolute;
      width: calc(
        var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap)
      );
      inset-block-start: var(--truncate-internal-marker-block-inset);
      height: max(
        0px,
        calc(
          var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2
        )
      );
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
      mask-image: linear-gradient(
        var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%
      );
    }
    & [data-truncate-marker]::after {
      --truncate-internal-fade-dir: to right;
      right: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
    & [data-truncate-marker]::before {
      --truncate-internal-fade-dir: to left;
      left: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
  }

  [data-truncate-variant='fade'] {
    & [data-truncate-marker] {
      background: transparent;
    }
  }

  [data-truncate-fade] {
    box-shadow:
      0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(
      var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2)
    );
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container='middle'] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    display: flex;
    min-width: 0;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority='1'] {
      flex: 0 1 max-content;
    }
    & > div[data-truncate-segment-priority='2'] {
      flex: 0 999999 max-content;
    }
  }
}
`,fe=`@layer base, unsafe;`;function R(e){return`${fe}
@layer base {
  ${e}
}`}function z(e){return`${fe}
@layer unsafe {
  ${e}
}`}var pe=new WeakMap;function me(e){let t=pe.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(re,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),pe.set(e,i),i}function he(e,t){if(!e.isConnected)return;let n=me(t);if(n==null)return;let r=t.querySelector(`style[${ie}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(ie,``),t.appendChild(i)),i.textContent=`:host { ${ae}: ${n}px; }`}var ge;function _e(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){ge??(ge=new CSSStyleSheet,ge.replaceSync(R(L)));let t=!1;try{e.adoptedStyleSheets=[ge],t=!0}catch{}if(t){e.querySelector(`style[${F}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(F,``),t.textContent=R(L),e.prepend(t)}}function ve(e,t){ye(e,t),_e(t),he(e,t)}function ye(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}if(typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});ve(this,e)}}if(customElements.define(ne,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(ne)))e instanceof HTMLElement&&ve(e,e.shadowRoot??e.attachShadow({mode:`open`}))}var B=e=>e.startsWith(`f::`)?e.slice(3):e;function be(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function xe(e,t){return e===``?t:`${e}/${t}`}function Se({files:e,path:t,isFolder:n,nextBasename:r}){let i=B(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=be(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=xe(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function Ce(e){return e.endsWith(`/`)}function we(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function V(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function Te(e,t){return t.includes(e)?V(t):[e]}function Ee(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function De(e,t){return{draggedPaths:e,target:t}}function Oe(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(Ce(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function ke(e,t){return t.kind===`root`||t.directoryPath==null?we(e):t.directoryPath}function Ae(e,t){let n=e.map(e=>{let n=ke(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function je(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function Me(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!je(T.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function Ne(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function Pe(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function Fe(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function Ie(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return Fe(e,t.path)?n?e:null:e;case`move`:return Pe(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=Ie(r,e,n),r==null)return null;return r}}}function Le(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function Re(e){switch(e.operation){case`add`:return{...Le(e),operation:`add`,path:e.path};case`remove`:return{...Le(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...Le(e),from:e.from,operation:`move`,to:e.to}}}function ze(e){return{...Le(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>Re(e)),operation:`batch`}}function Be(e){switch(e.operation){case`add`:case`remove`:case`move`:return Re(e);case`batch`:return ze(e);default:return null}}function Ve(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function He(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Ue(e){return He(e).at(-1)??null}function We(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function H(e){return e.endsWith(`/`)}var Ge=e=>e.toLowerCase();function Ke(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function qe(e){return e.endsWith(`/`)?e.slice(0,-1):e}function Je(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var Ye=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()},Xe=Symbol(`FILE_TREE_RENAME_VIEW`),Ze=512,Qe=512;function $e(e){return e===`top`||e===`center`?e:`nearest`}function et(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=He(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function tt(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:et(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var nt=class{#e;#t=new Set;#n=new Map;#r=null;#i=null;#a=new Map;#o=new Map;#s=-1;#c=null;#l=!1;#u=e=>-1;#d=new Map;#f=null;#p=null;#m=null;#h=null;#g=null;#_;#v;#y;#b=[];#x=new Int32Array;#S=new Int32Array;#C=void 0;#w=!1;#T=null;#E=``;#D=!1;#O=new Set;#k=[];#A;#j=null;#M=null;#N=null;#P=null;#F=null;#I=null;#L=null;#R=0;#z=null;#B=new Set;#V=0;#H;#U=0;#W=!1;#G=0;#K;constructor(e){let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=Me({paths:s,preparedInput:c},`constructor`,l.sort);this.#e=l,t!=null&&t!==!1&&(this.#r=t===!0?{}:t),this.#w=a!=null&&a!==!1,a!=null&&a!==!1&&a!==!0&&(this.#C=a.canRename,this.#v=a.onError,this.#_=a.onRename),this.#y=o,this.#A=n??`hide-non-matches`,this.#H=this.#le(u.paths,u.preparedInput);let d=i?.map(e=>this.#Ne(e)).filter(e=>e!=null)??[],f=d.at(-1)??null;d.length>0&&(this.#B=new Set(d),this.#z=f,this.#V=1),this.#je(f,!1),r!=null&&this.#Te(r,!1),this.#K=this.#Re()}destroy(){this.#K?.(),this.#K=null,this.#n.clear(),this.#t.clear(),this.#d.clear(),this.#i=null,this.#he()}focusFirstItem(){this.#be().length>0&&this.#Fe(0)}focusLastItem(){this.#G<=0||(this.#Ie(),this.#Fe(this.#G-1))}focusNextItem(){this.#Ae(1)}focusParentItem(){if(this.#c==null)return;let e=Ue(this.#c);if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t)}focusPath(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;this.#Ie();let n=this.#Z(t);n>=0&&this.#Fe(n)}scrollToPath(e,t){let n=this.#H.getPathInfo(e)?.path??null;if(n==null)return;this.#Ie();let r=this.#xe(n);r<0||this.#Me(r)!=null&&(t?.focus!==!1&&this.#Fe(r,!1),this.#L={id:this.#R+=1,offset:$e(t?.offset),visibleIndex:r},this.#De())}focusMountedPathFromInput(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;let n=this.#Z(t);n>=0&&this.#Fe(n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=this.#Z(t);return n>=0?(this.#Fe(n),this.#be()[n]??t):null}focusPreviousItem(){this.#Ae(-1)}getFocusedIndex(){return this.#s}getFocusedItem(){return this.#c==null?null:this.#Q(this.#c)}getFocusedPath(){return this.#c}getScrollRequest(){return this.#L}clearScrollRequest(e){this.#L?.id===e&&(this.#L=null)}resolveNearestVisiblePath(e){let t=this.#be();if(this.#G===0)return null;if(e==null)return this.#c??t[0]??null;let n=this.#H.getPathInfo(e)?.path??e,r=this.#Z(n);return r>=0?t[r]??n:this.#X(n)??this.#c??t[0]??null}getSelectedPaths(){return[...this.#B]}getSelectionVersion(){return this.#V}getVisibleCount(){return this.#G}getVisibleRows(e,t){if(t<e||this.#G===0)return[];let n=Math.max(0,e),r=Math.min(this.#G-1,t);if(r<n)return[];let i=r-n+1;if(this.#F==null&&!this.#l&&r>=this.#b.length&&i<=Qe){let e=[];for(let t=n;t<=r;t+=1){let n=this.#H.getVisibleRowContext(t);if(n==null)break;e.push(this.#ee(n))}return e}if(!this.#l&&r>=this.#b.length&&this.#Ie(),this.#F!=null){let e=Array.from({length:r-n+1},(e,t)=>this.#Se(n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===a+1){a=r;continue}if(i>=0&&this.#H.getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,a=-1;continue}i=r,a=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=this.#Se(i),o=t.get(a),s=this.#b[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return this.#$(o,i,a,{ancestorPaths:this.#re(a),path:s})})}return this.#H.getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=this.#b[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return this.#$(e,r,r,{ancestorPaths:this.#re(r),path:i})})}getStickyRowCandidates(e,t){if(this.#F!=null)return null;if(this.#G===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<this.#G;r+=1){let i=e+r*t,a=Math.min(this.#G-1,Math.floor(i/t)),o=this.#te(a,r)??(a>0?this.#te(a-1,r):void 0);if(o==null)break;n.push({row:this.#ee(o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=this.#H.getPathInfo(e);return t==null?null:this.#Q(t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=this.#H.getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#ze(t)}selectAllVisiblePaths(){this.#Ie();let e=[...this.#be()];this.#ae(e,this.#c??this.#z)}selectOnlyPath(e){let t=this.#Ne(e);t!=null&&this.#ae([t],t)}selectOnlyMountedPathFromInput(e){this.#ae([e],e)}selectPath(e){let t=this.#Ne(e);t==null||this.#B.has(t)||this.#ae([...this.#B,t])}deselectPath(e){let t=this.#Ne(e);t==null||!this.#B.has(t)||this.#ae([...this.#B].filter(e=>e!==t))}toggleFocusedSelection(){this.#c!=null&&this.togglePathSelectionFromInput(this.#c)}togglePathSelection(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.#ae([...this.#B].filter(e=>e!==t),t);return}this.#ae([...this.#B,t],t)}}selectPathRange(e,t){let n=this.#Ne(e);if(n==null)return;this.#Ie();let r=this.#z,i=r==null?-1:this.#Ce(r),a=this.#Ce(n);if(i===-1||a===-1){let e=t?[...this.#B,n]:[n];this.#ae(e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=this.#be().slice(o,s+1),l=t?[...this.#B,...c]:c;this.#ae(l,r)}extendSelectionFromFocused(e){if(this.#c==null)return;let t=this.#s;if(t===-1)return;let n=Math.min(this.#G-1,Math.max(0,t+e));if(n===t)return;!this.#l&&n>=this.#b.length&&this.#Ie();let r=this.#be(),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(this.#B);o.has(i)&&o.has(a)?o.delete(i):o.add(a),this.#ae([...o],this.#z??i,!1),this.#Fe(n)}getDragAndDropConfig(){return this.#r}isDragAndDropEnabled(){return this.#r!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#r==null)return!1;let t=this.#Ne(e);if(t==null||this.#M!=null&&this.#M.length>0)return!1;let n=this.getSelectedPaths(),r=Te(t,n);return this.#r.canDrag?.(r)===!1?!1:(n.includes(t)||this.#ae([t],t,!1),this.#Pe(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#De(),!0)}setDragTarget(e){let t=this.#i;if(t==null)return;let n=e;if(n!=null){let e=De(t.draggedPaths,n);(Oe(t.draggedPaths,n)||this.#r?.canDrop?.(e)===!1)&&(n=null)}Ee(t.target,n)||(this.#i={...t,target:n},this.#De())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#De())}completeDrag(){let e=this.#i;if(e==null)return!1;this.#i=null;let t=e.target==null?null:{...e.target};if(t==null)return this.#De(),!1;let n=De(e.draggedPaths,t);if(Oe(e.draggedPaths,t)||this.#r?.canDrop?.(n)===!1)return this.#De(),!1;let r=Ae(e.draggedPaths,t);if(r==null)return this.#De(),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);this.#H.move(e.from,e.to,{collision:e.collision})}else this.#ce(r.operations),this.#H.batch(r.operations)}catch(e){return this.#De(),this.#r?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return this.#r?.onDropComplete?.(r.result),!0}subscribe(e){return this.#t.add(e),e(),()=>{this.#t.delete(e)}}add(e){this.#H.add(e)}remove(e,t={}){this.#H.remove(e,t)}move(e,t,n={}){this.#H.move(e,t,n)}batch(e){this.#H.batch(e)}onMutation(e,t){let n=e,r=t,i=this.#n.get(n);return i??(i=new Set,this.#n.set(n,i)),i.add(r),()=>{let e=this.#n.get(n);e?.delete(r),e?.size===0&&this.#n.delete(n)}}setSearch(e){this.#Te(e,!0)}openSearch(e=``){this.#Te(e,!0)}closeSearch(){this.#Te(null,!0)}isSearchOpen(){return this.#M!==null}getSearchValue(){return this.#M??``}getSearchMatchingPaths(){return this.#k}focusNextSearchMatch(){this.#we(1)}focusPreviousSearchMatch(){this.#we(-1)}startRenaming(e=this.#c??``,t={}){if(!this.#w)return!1;let n=this.#H.getPathInfo(e);if(n==null)return!1;let r=n.path,i=H(r),a=qe(r);if(this.#C?.({isFolder:i,path:a})===!1)return!1;for(let e of He(r))this.#H.isExpanded(e)||this.#H.expand(e);return this.#ae([r],r,!1),this.#M!=null&&(this.#Te(null,!1),this.#y?.(this.#M)),this.#Pe(r),this.#T=r,this.#E=Ke(r),this.#D=t.removeIfCanceled??!1,this.#De(),!0}[Xe](){return{cancel:()=>{this.#q()},commit:()=>{this.#J()},getPath:()=>this.#T,getValue:()=>this.#E,isActive:()=>this.#T!=null,setValue:e=>{this.#Y(e)}}}#q(){if(this.#T==null)return;let e=this.#T,t=this.#D;if(this.#T=null,this.#E=``,this.#D=!1,t){this.remove(e,H(e)?{recursive:!0}:void 0);return}this.#Pe(e),this.#De()}#J(){let e=this.#T;if(e==null)return;if(this.#D&&this.#E.trim().length===0){this.#T=null,this.#E=``,this.#D=!1,this.remove(e,H(e)?{recursive:!0}:void 0);return}let t=H(e),n=Se({files:this.#H.list(),isFolder:t,nextBasename:this.#E,path:qe(e)});if(this.#T=null,this.#E=``,this.#D=!1,`error`in n){this.#Pe(e),this.#v?.(n.error),this.#De();return}if(n.sourcePath===n.destinationPath){this.#Pe(e),this.#De();return}this.#_?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(Je(n.sourcePath,t),Je(n.destinationPath,t))}#Y(e){this.#T==null||this.#E===e||(this.#E=e,this.#De())}resetPaths(e,t={}){let n=this.#H.list().length,r=this.#G,i=Me({paths:e,preparedInput:t.preparedInput},`resetPaths`,this.#e.sort),a=this.#le(i.paths,i.preparedInput,t.initialExpandedPaths),o=this.#c,s=this.#T,c=this.getSelectedPaths(),l=this.#z;this.#K?.(),this.#H=a,this.#d.clear(),this.#he();let u=c.map(e=>a.getPathInfo(e)?.path??null).filter(e=>e!=null),d=!Ve(this.#B,u);this.#B=new Set(u),d&&(this.#V+=1),this.#z=l==null?null:a.getPathInfo(l)?.path??null,this.#T=s==null?null:a.getPathInfo(s)?.path??null,this.#T??(this.#E=``,this.#D=!1),this.#je(o,o!=null||u.length>0||this.#z!=null),this.#K=this.#Re(),this.#De(),this.#Oe({canonicalChanged:!0,operation:`reset`,pathCountAfter:i.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#G-r})}#X(e){this.#Ie();let t=Ue(e),n=We(e,t),r=null,i=null;for(let e of this.#be()){if(Ue(e)!==t)continue;let a=We(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}#Z(e){let t=this.#Ce(e);if(t!==-1)return t;let n=He(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=this.#Ce(t);if(r!==-1)return r}return this.#be().length>0?0:-1}#Q(e,t){let n=this.#d.get(e);if(n!=null)return n;let r=t??this.#H.getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?this.#oe(r.path):this.#se(r.path);return this.#d.set(r.path,i),i}#$(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#c,isSelected:this.#B.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#x[n]??0,setSize:r.setSize??this.#S[n]??0}}#ee(e){return this.#$(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#te(e,t){let n=this.#H.getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}#ne(e){let t=this.#a.get(e);if(t!=null)return t;let n=this.#u(e),r=n<0?[]:[...this.#ne(n),n];return this.#a.set(e,r),r}#re(e){let t=this.#o.get(e);if(t!=null)return t;let n=this.#ne(e).map(e=>this.#b[e]??``).filter(e=>e!==``);return this.#o.set(e,n),n}#ie(e){this.#H.collapse(e)}#ae(e,t=this.#z,n=!0){let r=[...new Set(e)],i=!Ve(this.#B,r),a=this.#z!==t;!i&&!a||(this.#B=new Set(r),this.#z=t,i&&(this.#V+=1),n&&this.#De())}#oe(e){return{collapse:()=>{this.#ie(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#ke(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#H.isExpanded(e),isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#ze(e)}}}#se(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#ce(e){let t=this.#H.list();this.#le(t).batch(e)}#le(e,t,n){return new T({...this.#e,paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}#ue(){return this.#h??=this.#H.list(),this.#h}#de(){if(this.#m!=null)return this.#m;let e=new Set;for(let t of this.#ue()){e.add(t);for(let n of He(t))e.add(n)}return this.#m=[...e].sort(),this.#m}#fe(){return this.#g??=this.#ue().map(Ge),this.#g}#pe(){return this.#f??=this.#de().filter(e=>e.endsWith(`/`)),this.#f}#me(){return this.#p??=this.#pe().map(Ge),this.#p}#he(){this.#f=null,this.#p=null,this.#m=null,this.#h=null,this.#g=null}#ge(){return this.#pe().filter(e=>this.#H.isExpanded(e))}#_e(e){let t=new Set(this.#j??[]);if(e)for(let e of this.#B)for(let n of He(e))t.add(n);this.#ve(t)}#ve(e){this.#W=!0;try{for(let t of this.#pe()){let n=e.has(t),r=this.#H.isExpanded(t);n&&!r?this.#H.expand(t):!n&&r&&this.#H.collapse(t)}}finally{this.#W=!1}}#ye(){if(this.#M==null||this.#M.length===0){this.#k=[],this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let e=this.#b;if(this.#k=e.filter(e=>this.#O.has(e)),this.#A!==`hide-non-matches`||this.#O.size===0){this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())this.#N?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));this.#F=t,this.#I=n,this.#P=r,this.#G=n.length}#be(){return this.#I??this.#b}#xe(e){return this.#I==null?this.#H.getVisibleIndex(e)??-1:this.#P?.get(e)??-1}#Se(e){return this.#F?.[e]??e}#Ce(e){return this.#P?.get(e)??this.#H.getVisibleIndex(e)??-1}#we(e){let t=this.#k;if(t.length===0)return;let n=this.#c,r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}#Te(e,t){let n=e==null?null:Ye(e),r=this.#M;if(r!==n){if(r==null&&n!=null&&(this.#j=this.#ge()),this.#M=n,n==null)this.#_e(!0),this.#j=null,this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else if(n.length===0)this.#_e(!1),this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else{let e=this.#Ee();this.#je(e,!0)}t&&(this.#y?.(this.#M),this.#De())}}#Ee(){if(this.#M==null||this.#M.length===0)return this.#O.clear(),this.#c;let e=this.#M,t=this.#ue(),n=this.#fe(),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=this.#pe(),s=this.#me();for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}this.#O=i;let c=this.#A===`hide-non-matches`&&r.length>0?new Set:null;this.#N=c;let l=this.#A===`expand-matches`?new Set(this.#j??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of He(e))l.add(t),c?.add(t)}return this.#ve(l),a??this.#c}#De(){for(let e of this.#t)e()}#Oe(e){this.#n.get(e.operation)?.forEach(t=>{t(e)}),this.#n.get(`*`)?.forEach(t=>{t(e)})}#ke(e){for(let t of He(e))this.#H.isExpanded(t)||this.#H.expand(t);this.#H.isExpanded(e)||this.#H.expand(e)}#Ae(e){let t=this.#G;if(t===0)return;let n=this.#s===-1?0:this.#s,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#s===-1)&&(!this.#l&&this.#F==null&&r>=this.#b.length&&this.#Ie(),this.#Fe(r))}#je(e,t=!0){let n=this.#H.getVisibleCount();this.#U=n;let r=tt(this.#H.getVisibleTreeProjectionData(t?void 0:Math.min(n,Ze)),e,t?e=>this.#H.getVisibleIndex(e):void 0);this.#a.clear(),this.#o.clear(),this.#l=r.paths.length>=n,this.#u=r.getParentIndex,this.#b=r.paths,this.#x=r.posInSetByIndex,this.#S=r.setSizeByIndex,this.#ye(),this.#s=e==null?this.#be().length>0?0:-1:this.#Z(e),this.#c=this.#s<0?null:this.#Me(this.#s)}#Me(e){return this.#be()[e]??(this.#F==null?this.#H.getVisibleRowContext(e)?.row.path??null:null)}#Ne(e){return this.#H.getPathInfo(e)?.path??null}#Pe(e){if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t,!1)}#Fe(e,t=!0){let n=this.#Me(e);n!=null&&(this.#s===e&&this.#c===n||(this.#s=e,this.#c=n,t&&this.#De()))}#Ie(){this.#l||this.#je(this.#c,!0)}#Le(e){let t=Ie(this.#T,e);t==null&&this.#T!=null&&(this.#E=``),this.#T=t;let n=Ie(this.#c,e,!0),r=[...this.#B].map(t=>Ie(t,e)).filter(e=>e!=null).map(e=>this.#H.getPathInfo(e)?.path??null).filter(e=>e!=null),i=Ie(this.#z,e),a=i==null?null:this.#H.getPathInfo(i)?.path??null,o=[...new Set(r)];return Ve(this.#B,o)||(this.#B=new Set(o),this.#V+=1),this.#z=a,n}#Re(){return this.#H.on(`*`,e=>{if(this.#W)return;e.canonicalChanged&&(this.#d.clear(),this.#he()),this.#i!=null&&Ne(e)&&(this.#i=null);let t=Ne(e)?this.#Le(e):this.#c,n=this.#M!=null&&this.#M.length>0?this.#Ee():this.#M===``?this.#c:t,r=this.#M!=null||e.operation!==`expand`&&e.operation!==`collapse`;this.#je(n,r),this.#De();let i=Be(e);i!=null&&this.#Oe(i)})}#ze(e){if(this.#H.isExpanded(e)){this.#ie(e);return}this.#ke(e)}},rt=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t};function it(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(!(e[t]===`/`||t===e.length)){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}function at(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function ot(e,t){return t?`${e}/`:e}function U(e,t=null){let n=rt(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set;for(let t of e??[]){let e=it(t.path);if(e==null)continue;let n=ot(e.path,e.isDirectory);r.set(n,t.status),t.status===`ignored`&&e.isDirectory?a.add(n):e.isDirectory&&a.delete(n);for(let t of at(e.path))i.add(t)}return{directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}var W,st,G,ct,lt,ut,dt,ft,pt,mt,K={},ht=[],q=Array.isArray,gt=ht.slice,_t=Object.assign;function vt(e){e&&e.parentNode&&e.remove()}function yt(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?gt.call(arguments,2):n),bt(e,o,r,i,null)}function bt(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++st,__i:-1,__u:0};return i==null&&W.vnode!=null&&W.vnode(a),a}function xt(e){return e.children}function St(e,t){this.props=e,this.context=t,this.__g=0}function Ct(e,t){if(t==null)return e.__?Ct(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Ct(e):null}function wt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return wt(e)}}function Tt(e){(8&e.__g||!(e.__g|=8)||!G.push(e)||lt++)&&ct==W.debounceRendering||((ct=W.debounceRendering)||queueMicrotask)(Et)}function Et(){for(var e,t,n,r,i,a,o,s,c=1;G.length;)G.length>c&&G.sort(ut),e=G.shift(),c=G.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=_t({},r)).__v=r.__v+1,W.vnode&&W.vnode(n),Pt(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??Ct(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,It(a,n,o),n.__e!=i&&wt(n)));lt=0}function Dt(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||ht,b=t.length;for(c=Ot(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?K:y[m.__i]||K,m.__i=f,_=Pt(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&zt(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=kt(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function Ot(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?bt(null,o,null,null,null):q(o)?bt(xt,{children:o},null,null,null):o.constructor==null&&o.__b>0?bt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=At(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Ct(s)),Bt(s,s));return r}function kt(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=kt(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ct(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function At(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>(u?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function jt(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function Mt(e,t,n,r,i){var a;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||jt(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||jt(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(dt,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=ft,e.addEventListener(t,a?mt:pt,a)):e.removeEventListener(t,a?mt:pt,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function Nt(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=ft++;else if(t.u<n.l)return;return n(W.event?W.event(t):t)}}}function Pt(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,w,T,E,te,D,O,k,A=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=W.__b)&&d(t);n:if(typeof A==`function`)try{if(v=t.props,y=`prototype`in A&&A.prototype.render,b=(d=A.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new A(v,x):(t.__c=f=new St(v,x),f.constructor=A,f.render=Vt),b&&b.sub(f),f.props=v,f.state||={},f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&A.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=_t({},f.__s)),_t(f.__s,A.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&A.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&A.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=W.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),w=0;w<f._sb.length;w++)f.__h.push(f._sb[w]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=_t({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),T=d,d!=null&&d.type===xt&&d.key==null&&(T=Lt(d.props.children)),s=Dt(e,q(T)?T:[T],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(E=0,te=!1,t.__u|=c?160:128,t.__c.__z=[],D=0;D<a.length;D++)(O=a[D])==null||te||(O.nodeType==8&&O.data==`$s`?(E>0&&t.__c.__z.push(O),E++,a[D]=null):O.nodeType==8&&O.data==`/$s`?(--E>0&&t.__c.__z.push(O),te=E===0,s=a[D],a[D]=null):E>0&&(t.__c.__z.push(O),a[D]=null));if(!te){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(k=a.length;k--;)vt(a[k]);Ft(t)}else t.__e=n.__e,t.__k=n.__k,e.then||Ft(t);W.__e(e,t,n)}else s=t.__e=Rt(n.__e,t,n,r,i,a,o,c,l,u);return(d=W.diffed)&&d(t),128&t.__u?void 0:s}function Ft(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(Ft)}function It(e,t,n){for(var r=0;r<n.length;r++)zt(n[r],n[++r],n[++r]);W.__c&&W.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){W.__e(e,t.__v)}})}function Lt(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:q(e)?e.map(Lt):_t({},e)}function Rt(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(W.__m&&W.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=gt.call(e.childNodes),v=n.props||K,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;Mt(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||Mt(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),Dt(b==`template`?e.content:e,q(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Ct(n,0),s,c,l),a!=null)for(u=a.length;u--;)vt(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||Mt(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&Mt(e,u,g,v[u],i))}return e}function zt(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){W.__e(e,n)}}function Bt(e,t,n){var r,i;if(W.unmount&&W.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||zt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){W.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Bt(r[i],t,n||typeof e.type!=`function`);n||vt(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function Vt(e,t,n){return this.constructor(e,n)}function Ht(e,t){var n,r,i,a;t==document&&(t=document.documentElement),W.__&&W.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=yt(xt,null,[e]),i=[],a=[],Pt(t,e,r||K,K,t.namespaceURI,r?null:t.firstChild?gt.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),It(i,e,a)}function Ut(e,t){e.__u|=32,Ht(e,t)}W={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw lt=0,e}},st=0,St.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=_t({},this.state);typeof e==`function`&&(e=e(_t({},n),this.props)),e&&_t(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Tt(this))},St.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Tt(this))},St.prototype.render=xt,G=[],lt=0,ut=function(e,t){return e.__v.__b-t.__v.__b},dt=/(PointerCapture)$|Capture$/i,ft=0,pt=Nt(!1),mt=Nt(!0);var Wt=0;Array.isArray;function J(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wt,__i:-1,__u:0,__source:i,__self:a};return W.vnode&&W.vnode(l),l}var Gt=16,Kt=16,qt={};function Jt({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=qt[e]??{width:Gt,height:Kt},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`,h=o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`};return J(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...h,viewBox:m,width:f,height:p,children:J(`use`,{href:c})})}var Yt=e=>{if(e.length<2)return[e,``];let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},Xt=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Zt=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Qt=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},$t=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},en=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]};function tn({children:e,marker:t,variant:n=`default`}){"use no memo";let r=n===`fade`;return J(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:J(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):r?J(`span`,{"data-truncate-fade":!0}):t})})}function nn(e){"use no memo";let{mode:t,children:n}=e;return J(`div`,{children:[J(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?J(`span`,{children:n}):n}),J(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?J(`span`,{children:n}):n})]})}function rn({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=J(nn,{mode:t,children:e},`content`),o=J(tn,{marker:n,mode:t,variant:r},`marker`),s=J(`div`,{"data-truncate-fill":!0},`fill`);return J(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:J(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function an({children:e,...t}){"use no memo";return J(rn,{mode:`truncate`,...t,children:e})}function on({children:e,...t}){"use no memo";return J(rn,{mode:`fruncate`,...t,children:e})}function sn({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=J(an,{...s,children:t[0]}),l=J(on,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return J(`div`,{className:a,style:o});if(e.length<i)return J(n===`end`?on:an,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=Yt:r===`extension`?t=Xt:r===`leaf-path`&&(t=Zt);else if(typeof r==`number`)t=Qt,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=$t:e===`first`&&(t=en)}else typeof r==`function`&&(t=r);t??=Yt;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=J(an,{...s,..._,children:f}),l=J(on,{...s,...v,children:p})}return J(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[J(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),J(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var cn={endIndex:-1,startIndex:-1};function ln(e,t,n){return Math.min(Math.max(e,t),n)}function un(e,t){return e<0||t<e?cn:{endIndex:t,startIndex:e}}function dn(e){return e.startIndex<0||e.endIndex<e.startIndex}function fn(e,t){return dn(e)?0:(e.endIndex-e.startIndex+1)*t}function pn(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function mn(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function hn(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function gn(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function _n(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function vn(e,t,n){if(e.length===0||t<=0)return[];let r=_n(e),i=hn(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=gn(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function yn(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=ln(t.scrollTop,0,o),c=t.stickyRows??vn(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=pn(s,n,t.itemHeight),m=pn(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?cn:un(m,mn(u+d,n,t.itemHeight)),y=g+1,b=dn(v)?cn:un(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=fn(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:dn(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var bn={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},xn={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},Sn=`Contains git status items`;function Cn(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function wn(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return Cn({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function Tn(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function En(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function Dn(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function On(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function kn(e,t){return e!=null&&e>0?e:t}function An(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function jn(e,t,n,r,i=0){let a=Cn({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a==null?!1:(e.scrollTop=a,!0)}function Mn(e,t,n,r,i,a,o=0){let s=wn({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s==null?!1:(e.scrollTop=s,!0)}function Nn(e,t,n,r,i,a){let o=Tn({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o==null?!1:(e.scrollTop=o,!0)}function Pn(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function Fn(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function In({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return J(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function Ln(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function Rn(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}var zn,Y,Bn,Vn,Hn=Object.is,Un=0,Wn=[],X=W,Gn=X.__b,Kn=X.__r,qn=X.diffed,Jn=X.__c,Yn=X.unmount,Xn=X.__;function Zn(e,t){X.__h&&X.__h(Y,e,Un||t),Un=0;var n=Y.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function Qn(e){return Un=1,$n(ur,e)}function $n(e,t,n){var r=Zn(zn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ur(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);Hn(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Y,!Y.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,Hn(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Y.__f=!0;var a=Y.shouldComponentUpdate,o=Y.componentWillUpdate;Y.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Y.shouldComponentUpdate=i}return r.__N||r.__}function er(e,t){var n=Zn(zn++,3);!X.__s&&lr(n.__H,t)&&(n.__=e,n.u=t,Y.__H.__h.push(n))}function tr(e,t){var n=Zn(zn++,4);!X.__s&&lr(n.__H,t)&&(n.__=e,n.u=t,Y.__h.push(n))}function Z(e){return Un=5,nr(function(){return{current:e}},[])}function nr(e,t){var n=Zn(zn++,7);return lr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function rr(e,t){return Un=8,nr(function(){return e},t)}function ir(){for(var e;e=Wn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(sr),e.__H.__h.forEach(cr),e.__H.__h=[]}catch(t){e.__H.__h=[],X.__e(t,e.__v)}}X.__b=function(e){Y=null,Gn&&Gn(e)},X.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Xn&&Xn(e,t)},X.__r=function(e){Kn&&Kn(e),zn=0;var t=(Y=e.__c).__H;t&&(Bn===Y?(t.__h=[],Y.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(sr),t.__h.forEach(cr),t.__h=[],zn=0)),Bn=Y},X.diffed=function(e){qn&&qn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Wn.push(t)!==1&&Vn===X.requestAnimationFrame||((Vn=X.requestAnimationFrame)||or)(ir)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Bn=Y=null},X.__c=function(e,t){t.some(function(e){try{e.__h.forEach(sr),e.__h=e.__h.filter(function(e){return!e.__||cr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],X.__e(n,e.__v)}}),Jn&&Jn(e,t)},X.unmount=function(e){Yn&&Yn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{sr(e)}catch(e){t=e}}),n.__H=void 0,t&&X.__e(t,n.__v))};var ar=typeof requestAnimationFrame==`function`;function or(e){var t,n=function(){clearTimeout(r),ar&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);ar&&(t=requestAnimationFrame(n))}function sr(e){var t=Y,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Y=t}function cr(e){var t=Y;e.__c=e.__(),Y=t}function lr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!Hn(t,e[n])})}function ur(e,t){return typeof t==`function`?t(e):t}function dr(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:J(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return J(xt,{children:[J(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:J(an,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function fr(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function pr(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function mr(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function hr({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=yn(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:mr(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?mr(u,1,t,o):i&&r<=0&&c.length>0?vn(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}var gr=400,_r=10,vr=40,yr=18;function br(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?xr(e,t,n):a instanceof HTMLElement?a:null}function xr(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function Sr(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function Cr(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function wr(){return navigator.vendor!==`Apple Computer, Inc.`}function Tr(e,t){let n=e-t.top;if(n<vr){let e=Math.max(0,n);return-Math.ceil((vr-e)/vr*yr)}let r=t.bottom-e;if(r<vr){let e=Math.max(0,r);return Math.ceil((vr-e)/vr*yr)}return 0}function Er(e,t){if(e!=null){let t=bn[e];return t==null?null:{text:t,title:xn[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:Sn}:null}function Dr(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function Or(e){return e!=null&&`toggle`in e}function kr(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function Ar(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function jr(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function Mr(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function Nr(e,t){return t&&Mr(e)||(e.ctrlKey||e.metaKey)&&kr(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}var Pr=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`]);function Fr(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function Ir(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function Lr(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function Rr(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function zr(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function Br(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function Vr(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function Hr(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function Ur(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=Hr(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function Wr(e,t){return{kind:e.kind,name:pr(e),path:t}}function Gr(e){return e==null?void 0:`${e}__tree`}function Kr(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function qr(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function Jr(e,t){if(e==null)return null;if(`text`in e)return J(`span`,{title:e.title,children:e.text});let n=typeof e.icon==`string`?qr(e.icon)?t(e.icon):{name:e.icon}:qr(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return J(`span`,{title:e.title,children:J(Jt,{...n})})}function Yr(e){e!=null&&En(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function Xr(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=fr(e);return J(xt,{children:[e.depth>0?J(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>J(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,J(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?J(Jt,{...t(`file-tree-icon-chevron`)}):J(Jt,{...t(`file-tree-icon-file`,u)})}),J(`div`,{"data-item-section":`content`,children:e.isFlattened?dr(e,c,a):c??J(sn,{minimumLength:5,split:`extension`,children:e.name})}),i?J(`div`,{"data-item-section":`decoration`,children:r==null?null:Jr(r,t)}):null,s?J(`div`,{"data-item-section":`git`,children:Jr(o,t)}):null,n?J(`div`,{"data-item-section":`action`,children:l?J(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:J(Jt,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function Zr(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:w,contextMenuRightClickEnabled:T,registerRenameInput:E,registerButton:te,resolveIcon:D,renderDecorationForRow:O,openContextMenuForRow:k,onRowClick:A,onKeyDown:j}=e,M=fr(t),{isParked:N=!1,mode:P=`flow`,style:ne}=r,F=P===`sticky`,I=_?.get(M)??null??Dr(t.ancestorPaths,v,y),re=t.kind===`directory`&&(b?.has(M)??!1),ie=O(t,M),ae=Er(I,re),oe=S&&ee,se=ie!=null||x||oe,ce=oe&&w===`always`,le=a.getPath()===M,ue=le?a.getValue():``,de=F||!le?null:J(In,{ref:E,ariaLabel:`Rename ${pr(t)}`,isFlattened:t.isFlattened,value:ue,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),L=Xr(t,D,{actionLaneEnabled:oe,customDecoration:ie,decorationLaneEnabled:se,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:ae,gitLaneActive:x,renameInput:de,showDecorativeActionAffordance:ce}),fe={...Ln({ariaLabel:pr(t),domId:t.isFocused?Kr(h,M,N):void 0,extraStyle:ne,features:{actionLaneEnabled:oe,contextMenuButtonVisibility:oe?w:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:N,itemHeight:g,mode:P,row:t,state:{containsGitChange:re,effectiveGitStatus:I,isContextHovered:s===M,isDragTarget:l?.kind===`directory`&&l.directoryPath===M,isDragging:c?.has(M)===!0,isFocusRinged:t.isFocused&&o===M},targetPath:M}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),T&&(i.focusMountedPathFromInput(M),k(t,M,{anchorRect:Lr(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:F?void 0:()=>{i.focusMountedPathFromInput(M)},onKeyDown:F?void 0:j,ref:e=>{te(M,e)}};return!F&&le?J(`div`,{...fe,children:L}):J(`button`,{...fe,type:`button`,draggable:u&&!N,onDragEnd:u&&!N?p:void 0,onDragStart:u&&!N?e=>{f(e,t,M)}:void 0,onMouseDown:e=>{if(F){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!N?e=>{m(e,t,M)}:void 0,onClick:e=>{A(e,t,M,P)},children:L})}function Qr(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(fr(e))).map((n,r)=>Zr(e,n,t.start+r))}function $r({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=de,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=Z(null),v=Z(null),y=Z(!1),b=Z(null),x=Z(null),S=Z(null),C=Z(null),ee=Z(null),T=Z(new Map),E=Z(new Map),te=Z(()=>{}),D=Z(null),O=Z(0),k=Z(!1),A=Z(null);A.current!==t&&(k.current=!1,A.current=t);let j=Z(!1),M=Z(null),N=Z(null),P=Z(!1),ne=Z(null),F=Z(null),I=Z(null),re=Z(null),ie=Z(null),ae=Z(null),le=Z(null),ue=Z(null),L=Z(!1),fe=Z(null),R=Z(null),z=Z(null),pe=Z(null),me=nr(()=>new Map,[]),[,he]=Qn(0),[ge,_e]=Qn(null),[ve,ye]=Qn(null),[B,be]=Qn(null),[xe,Se]=Qn(null),[Ce,we]=Qn(0),[V,Te]=Qn(null),Ee=Z(V);Ee.current=V;let De=Z(null),Oe=Z(null),ke=Z(null),Ae=Z(null),je=Z(null),Me=Z(!1),Ne=()=>{Oe.current=null,ke.current=null,Ae.current=null},Pe=(e,t)=>{Oe.current=e,ke.current=null,Ae.current=t==null?null:{path:e,scrollTop:t}},Fe=(e,t)=>{Oe.current=null,ke.current={path:e,viewportOffset:t},Ae.current=null},Ie=Z(d===`retain`&&t.isSearchOpen()),[Le,Re]=Qn(p);er(()=>{p||Re(!1)},[p]);let ze=Z(!1),Be=rr(()=>{ze.current=!0,Re(e=>e&&!1)},[]),[Ve,He]=Qn(()=>hr({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[Ue,We]=Qn(!1);er(()=>{We(!0)},[]);let H=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,Ge=e?.contextMenu?.triggerMode??(H?`right-click`:`both`),Ke=Ge===`both`||Ge===`button`,qe=e?.contextMenu?.buttonVisibility??`when-needed`,Je=Ge===`both`||Ge===`right-click`;tr(()=>{let e=S.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;je.current=t,ye(t),Se(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(Me.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let Ye=rr((e,t)=>{zr(T.current,e,t)},[]),Ze=rr((e,t)=>{zr(E.current,e,t)},[]),Qe=rr(e=>{x.current=e},[]),$e=rr(e=>Br(e,E.current,T.current),[]),et=n!=null||r!=null||i!=null,{resolveIcon:tt}=nr(()=>w(a),[a]),nt=t[Xe](),rt=nt.getPath(),it=rt!=null,at=t.isSearchOpen(),ot=t.getSearchValue(),U=t.getFocusedPath(),W=t.getFocusedIndex(),st=t.getScrollRequest(),G=t.isDragAndDropEnabled(),ct=t.getDragSession(),lt=nr(()=>ct==null?null:new Set(ct.draggedPaths),[ct]),ut=ct?.target??null,dt=ct?.primaryPath??null,ft=Gr(o),{overlayHeight:pt,overlayRows:mt,snapshot:K,visibleRows:ht}=Ve,q=K.physical.viewportHeight,gt=nr(()=>({end:K.window.endIndex,start:K.window.startIndex}),[K.window.endIndex,K.window.startIndex]),_t=mt,vt=K.sticky.rows,yt=K.physical.totalHeight,bt=K.sticky.height,xt=nr(()=>new Set(vt.map(e=>fr(e.row))),[vt]),St=W>=0&&W>=gt.start&&W<=gt.end,Ct=rr((e,t)=>u?.({item:Wr(e,t),row:e})??null,[u]),wt=rr(e=>En(e==null?null:T.current.get(e)??null)?!0:En(S.current),[]),Tt=rr(e=>{wt(t.focusNearestPath(e))},[t,wt]),Et=Z(Tt);Et.current=Tt;let Dt=Z(!0),Ot=Z(()=>{}),kt=rr((t=!0)=>{let n=Ee.current;n!=null&&(Dt.current=Dt.current&&t,Te(null),e?.contextMenu?.onClose?.(),Dt.current&&Tt(n.path))},[e?.contextMenu,Tt]);Ot.current=kt;let At=rr(e=>{let t=e==null?null:Rr(S.current,e);be(e=>e===t?e:t)},[]),jt=rr((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=$e(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=C.current;Pe(n,e?.scrollTop??null),j.current=!0,_e(e=>e===n?e:n)}i.focus(),At(a),Dt.current=!0,Te({anchorRect:r?.anchorRect??null,item:Wr(e,n),path:n,source:r?.source??`keyboard`})},[t,$e,At]),Mt=rr(e=>{if(l){if(t.isSearchOpen()){let e=C.current,t=On(e,q);ne.current=W<0||e==null?null:Math.max(0,Math.min(W*s-e.scrollTop,Math.max(0,t-s))),P.current=!0}t.startRenaming(e)!==!1&&(Se(`focus`),he(e=>e+1))}},[t,W,s,l,q]),Nt=rr((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=C.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=On(i,q),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:hr({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return j.current=!0,Nn(i,a,s,l,u,d),te.current(),De.current=n?e:null,!0},[t,s,c,q,h]),Pt=()=>y.current===!0||pe.current!=null||L.current===!0,Ft=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),It=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},Lt=()=>{re.current!=null&&(clearTimeout(re.current),re.current=null),I.current=null},Rt=()=>{ae.current?.remove(),ae.current=null},zt=()=>{It(F.current),F.current=null,ie.current=null},Bt=e=>{let t=S.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},Vt=()=>{ue.current?.(),ue.current=null,pe.current!=null&&(clearTimeout(pe.current),pe.current=null),L.current=!1,fe.current=null,z.current=null,R.current!=null&&(R.current.setAttribute(`draggable`,`true`),R.current.style.removeProperty(`touch-action`),R.current=null),Rt(),Lt(),zt(),le.current=null},Ht=(e,n)=>{let r=S.current?.getRootNode(),i=Sr(br(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},Ut=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){Lt();return}let r=t.getItem(e.directoryPath),i=Or(r)?r:null;if(i==null||i.isExpanded()){Lt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;I.current!==a&&(Lt(),I.current=a,re.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind!==`directory`||n.directoryPath!==e.directoryPath||n.flattenedSegmentPath!==e.flattenedSegmentPath||i.expand()},n))},Wt=()=>{F.current=null;let e=ie.current,n=C.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=Tr(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,te.current()),Ut(Ht(e.clientX,e.clientY)),F.current=Ft(Wt)},Gt=(e,t)=>{ie.current={clientX:e,clientY:t},F.current??=Ft(Wt)},Kt=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Vt(),Rt(),Lt(),zt(),t.startDrag(r)===!1){e.preventDefault();return}if(le.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),wr())){let t=Cr(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Bt(t),ae.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},qt=()=>{Rt(),Lt(),zt(),le.current=null,t.cancelDrag()},Yt=(e,n,r)=>{if(pe.current!=null||L.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;z.current={clientX:i.clientX,clientY:i.clientY},R.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!L.current;pe.current!=null&&(clearTimeout(pe.current),pe.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),ue.current===o&&(ue.current=null),t&&(a.setAttribute(`draggable`,`true`),R.current===a&&(R.current=null),z.current=null)},s=e=>{let t=e.touches[0],n=z.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=_r*_r||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),ue.current=o,pe.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),R.current===a&&(R.current=null),z.current=null;return}L.current=!0,R.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),le.current=n;let e=a.getBoundingClientRect(),s=Cr(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Bt(s),ae.current=s,fe.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=fe.current;n!=null&&ae.current!=null&&(ae.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),Ut(Ht(t.clientX,t.clientY)),Gt(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&Ht(n.clientX,n.clientY),t.completeDrag(),Vt()},u=()=>{t.cancelDrag(),Vt()};ue.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},gr)},Xt=e=>{if(V!=null){if(e.key===`Escape`){kt(),e.preventDefault(),e.stopPropagation();return}Pr.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(nt.isActive()){if(e.key===`Escape`)nt.cancel();else if(e.key===`Enter`)nt.commit();else return;Se(`focus`),he(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Mt(U??void 0),e.preventDefault(),e.stopPropagation();return}if(at){if(e.key===`Escape`)P.current=!1,ne.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=C.current,r=On(n,q);ne.current=W<0||n==null?null:Math.max(0,Math.min(W*s-n.scrollTop,Math.max(0,r-s))),P.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Se(`focus`),he(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&Ar(e)){t.openSearch(e.key),he(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=H&&Mr(e),r=Nr(e,H),i=r&&S.current!=null?Dn(S.current):null,a=r?new Set(Vr(S.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==U&&a.has(o)){let e=C.current;Pe(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=Or(p)?p:null,h=u!=null&&(xt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=C.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=Br(u,E.current,T.current);e==null||n==null?y=!1:jt(e,u)}else if((e.ctrlKey||e.metaKey)&&kr(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Se(`focus`);let b=t.getFocusedPath(),x=b!=null&&(xt.has(b)||a.has(b)),ee=g&&b!==u,w=n&&c&&o===u&&b===u;if((h||w)&&b!=null&&(ee&&x||w))Pe(b,v?.scrollTop??null),j.current=!0,_e(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(Fe(b,Ur(S.current,v,i,u,s,bt,q)),j.current=!0,_e(e=>e===b?e:b)):Ne()}he(e=>e+1),e.preventDefault(),e.stopPropagation()};tr(()=>{if(!(!f||!at)){if(Ie.current){Ie.current=!1;return}En(ee.current)}},[at,f]),tr(()=>{let e=x.current;switch(Fn({hasRenderedInput:e!=null,previousRenamingPath:N.current,renamingPath:rt})){case`reset`:N.current=null;return;case`reveal-canonical`:rt!=null&&Nt(rt,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(De.current=null,N.current=rt,En(e),e.select());return}},[gt.end,gt.start,rt,Nt,xt]),tr(()=>{let e=S.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=Dn(e)?.dataset.itemPath??null;_e(e=>e===t?e:t)},i=()=>{n(),j.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,Dn(e)!=null){r();return}j.current=!1,_e(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),j.current=!1,_e(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;_e(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),tr(()=>{let e=S.current;e!=null&&(K.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[K.physical.scrollTop]),tr(()=>{let e=null,n=C.current,r=b.current,i=S.current;if(n==null)return;D.current=On(n,g);let a=()=>{let e=t.getVisibleCount(),r=kn(D.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),He(hr({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!k.current){k.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=kn(D.current,g),i=t.getVisibleRows(e,e)[0]??null;jn(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}te.current=a;let o=!1,l=t.subscribe(()=>{o?he(e=>e+1):o=!0,a()}),u=()=>{Me.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),y.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,y.current=!1,we(e=>e+1),e=null},50))},d=null,f=()=>{i!=null&&delete i.dataset.overlayReveal,d!=null&&(clearTimeout(d),d=null)},p=()=>{i==null||Me.current===!0||n.scrollTop>0||(i.dataset.overlayReveal=`true`,d!=null&&clearTimeout(d),d=setTimeout(()=>{f()},200))},m=()=>{if(a(),n.scrollTop>0&&f(),Ee.current!=null&&y.current&&Ot.current(),Me.current===!0){y.current=!1;return}ye(e=>e==null?e:null),u()},_=()=>{u(),p()},v=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),x=e=>{v.has(e.key)&&_()};n.addEventListener(`scroll`,m,{passive:!0}),n.addEventListener(`wheel`,_,{passive:!0}),n.addEventListener(`touchmove`,_,{passive:!0}),n.addEventListener(`keydown`,x);let ee=typeof ResizeObserver<`u`?new ResizeObserver(e=>{D.current=(e[0]==null?null:An(e[0]))??On(n,g),a()}):null;return ee?.observe(n),()=>{te.current=()=>{},l(),n.removeEventListener(`scroll`,m),n.removeEventListener(`wheel`,_),n.removeEventListener(`touchmove`,_),n.removeEventListener(`keydown`,x),e!=null&&clearTimeout(e),d!=null&&clearTimeout(d),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),y.current=!1,D.current=null,ee?.disconnect()}},[t,g,s,c,h]),tr(()=>{H||V==null||kt(!1)},[kt,H,V]);let Zt=nr(()=>V==null?null:`${V.path}::${V.source}`,[V]);tr(()=>{if(Zt==null){m?.clearSlotContent(se);return}let t=Ee.current;if(t==null)return;let n=v.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??Ir(n.getBoundingClientRect()),close:e=>{Ot.current(e?.restoreFocus??!0)},restoreFocus:()=>{Dt.current&&Et.current(Ee.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(se,i),e?.contextMenu?.onOpen?.(t.item,r),Yr(i),queueMicrotask(()=>{i==null||!i.isConnected||document.activeElement===i&&Yr(i)}),()=>{m?.clearSlotContent(se)}},[Zt,e?.contextMenu,m]),tr(()=>{V!=null&&t.getItem(V.path)==null&&kt()},[kt,V,t]),tr(()=>{if(V==null)return;let e=S.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:S.current,n=e=>{let n=e.target;n instanceof Node&&(Fr(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&kt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),kt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[kt,V]),tr(()=>{let e=C.current,n=S.current;if(e==null||n==null){M.current=U;return}let r=U==null?null:T.current.get(U)??null,i=Dn(n),a=i?.dataset.itemPath??null,o=it&&x.current===i,c=f&&ee.current===i,l=P.current&&!at,u=ne.current??0,d=De.current,p=Oe.current,m=ke.current,g=Ae.current,_=i!=null,v=j.current||_,y=M.current!==U,b=p!=null&&p===U&&U!=null,w=!1,E=!1;if(st!=null&&st.id!==O.current){O.current=st.id;let n=st.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,q-s))):bt;w=!0,E=Mn(e,n,s,q,yt,st.offset,t)}t.clearScrollRequest(st.id)}let D=!w&&l&&Nn(e,W,s,q,yt,u),k=!w&&d!=null&&d===U&&Nn(e,W,s,q,yt,bt),A=!w&&m!=null&&m.path===U&&Nn(e,W,s,q,yt,m.viewportOffset),N=!w&&g!=null&&g.path===U&&e.scrollTop!==g.scrollTop;if(N&&(e.scrollTop=g.scrollTop),(N||E||k||A||D||v&&y&&d!==U&&!b&&jn(e,W,s,q,bt))&&te.current(),w){M.current=U;return}if(!v){M.current=U;return}if(o){M.current=U;return}if(c&&!l){M.current=U;return}if(r==null){l&&W>=0&&(Nn(e,W,s,q,yt,u),te.current()),M.current=U;return}(y||l||d===U||p===U||m?.path===U||g?.path===U||a==null||a!==U)&&(En(r),d===U&&(De.current=null),p===U&&(Oe.current=null),m?.path===U&&(ke.current=null),g?.path===U&&(Ae.current=null),P.current=!1,ne.current=null),M.current=U},[t,W,U,St,s,it,at,gt,q,f,st,h,bt,yt,ht]);let Qt=W>=0&&W>=K.visible.startIndex&&W<=K.visible.endIndex,$t=U!=null&&_t.some(e=>fr(e.row)===U),en=Qt||$t,tn=Ke&&j.current===!0&&en?U:null,nn=xe===`pointer`?ve:null,rn=V?.path??je.current??nn??tn??ve,an=V?.source===`right-click`;tr(()=>{y.current&&V==null||At($e(rn))},[V,$e,gt,q,Ce,_t,rn,At,ht]);let on=rr(e=>{if(y.current||Fr(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Se(e=>e===`pointer`?e:`pointer`),ye(e=>e===i?e:i)},[]),sn=rr(()=>{ye(null)},[]);tr(()=>{if(!G)return;let e=()=>{Vt(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Vt(),t.cancelDrag()}},[t,G]);let cn=e=>{if(!G||t.getDragSession()==null||L.current)return;let n=Sr(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),Ut(t.getDragSession()?.target??null),Gt(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},ln=e=>{if(!G||t.getDragSession()==null||L.current)return;let n=e.relatedTarget;n instanceof Node&&S.current?.contains(n)===!0||(Lt(),zt(),t.setDragTarget(null))},un=e=>{!G||t.getDragSession()==null||L.current||(e.preventDefault(),Ht(e.clientX,e.clientY),t.completeDrag(),Rt(),Lt(),zt(),le.current=null)},dn=K.window.height,fn=K.window.offsetTop,pn=Math.min(0,q-dn),mn=Math.min(0,q-dn-bt),hn=ge===U||P.current,gn=U!=null&&hn&&!St&&W>=0?ht[W]??t.getVisibleRows(W,W)[0]??null:null,_n=gn==null?null:Pn(W,s,gt,dn),vn=le.current,yn=dt!=null&&vn!=null&&vn.path===dt&&vn.index>=gt.start&&vn.index<=gt.end,bn=dt!=null&&vn!=null&&vn.path===dt&&!yn&&vn.path!==gn?.path?vn:null,xn=bn==null?null:Pn(bn.index,s,gt,dn),Sn=jr((W>=0?ht[W]??t.getVisibleRows(W,W)[0]??null:null)?.ancestorPaths.at(-1)??null),Cn=at&&U!=null?Kr(o,U,!St):void 0,wn=V?.path??(at?U:ge),Tn=V?.path??ve,In=$e(rn),Ln=H&&Ke&&!an&&!it&&In!=null&&B!=null&&rn!=null,zn=H&&(Ln||V!=null),Y=V?.anchorRect,Bn=Y==null&&In!=null&&B!=null&&(V!=null||Ln)?B:null,Vn=Y==null?Bn==null?void 0:{top:`${Bn}px`}:{left:`${Y.left}px`,position:`fixed`,right:`auto`,top:`${Y.top}px`},Hn=an?{opacity:`0`}:void 0,Un=rr((e,n,r,i)=>{let a=Rn({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:at,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c);break}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=K.visible.startIndex&&n.index<=K.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(j.current=!0,_e(e=>e===c?e:c),Se(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Nt(c,{targetOffset:`sticky-parents`})},[t,at,K.visible.endIndex,K.visible.startIndex,Nt]),Wn=()=>{if(y.current||!Ke||rn==null||In==null)return;let e=t.getItem(rn);e!=null&&(At(In),Dt.current=!0,Te({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:In.getAttribute(`aria-label`)??rn,path:e.getPath()},path:e.getPath(),source:`button`}))},X={contextHoverPath:Tn,contextMenuButtonTriggerEnabled:Ke,contextMenuButtonVisibility:qe,contextMenuEnabled:H,contextMenuRightClickEnabled:Je,contextMenuTriggerMode:Ge,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:G,draggedPathSet:lt,dragTarget:ut,gitLaneActive:et,gitStatusByPath:n,handleRowDragEnd:qt,handleRowDragStart:Kt,handleRowTouchStart:Yt,ignoredGitDirectories:r,ignoredInheritanceCache:me,instanceId:o,itemHeight:s,onKeyDown:Xt,onRowClick:Un,openContextMenuForRow:jt,registerButton:Ye,registerRenameInput:Qe,renameView:nt,renderDecorationForRow:Ct,resolveIcon:tt,shouldSuppressContextMenu:Pt,visualFocusPath:wn},Gn={...X,registerButton:Ze};return J(`div`,{ref:S,id:ft,"data-file-tree-context-menu-button-visibility":H&&Ke?qe:void 0,"data-file-tree-context-menu-trigger-mode":H?Ge:void 0,"data-file-tree-has-context-menu-action-lane":H&&Ke?`true`:void 0,"data-file-tree-has-git-lane":et?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:G?ln:void 0,onDragOver:G?cn:void 0,onDrop:G?un:void 0,onKeyDown:Xt,onPointerLeave:H?sn:void 0,onPointerOver:H?on:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[J(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:Sn}}),J(`slot`,{name:oe,"data-type":`header-slot`}),f?J(`div`,{"data-file-tree-search-container":!0,"data-open":at?`true`:`false`,children:J(`input`,{ref:ee,"aria-activedescendant":Cn,"aria-controls":ft,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Le?`true`:void 0,value:ot,onBlur:()=>{d===`retain`&&!ze.current||t.closeSearch()},onFocus:Be,onPointerDown:Be,onInput:e=>{Be();let n=e.currentTarget;t.setSearch(n.value)}})}):null,J(`div`,{ref:C,"data-file-tree-virtualized-scroll":`true`,children:[h&&Ue&&_t.length>0?J(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:J(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${pt}px`},children:_t.map((e,t)=>Zr(Gn,e.row,`sticky:${fr(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${_t.length-t}`}}))})}):null,J(`div`,{ref:b,"data-file-tree-virtualized-list":`true`,style:{height:`${yt}px`},children:[J(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${fn}px`}}),J(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${dn}px`,top:`${pn}px`,bottom:`${mn}px`},children:[Qr(X,gt,xt),gn!=null&&_n!=null?Zr(X,gn,`parked:${gn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:dt===gn.path?`none`:void 0,position:`absolute`,right:`0`,top:`${_n}px`}}):null,bn!=null&&xn!=null?Zr(X,bn,`parked-drag:${bn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${xn}px`}}):null]})]})]}),H?J(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":zn?`true`:`false`,style:Vn,children:[J(`button`,{ref:v,type:`button`,"data-type":ce,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":V==null?`false`:`true`,"data-visible":Ln?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),V!=null){kt();return}Wn()},tabIndex:-1,style:Hn,children:J(Jt,{...tt(`file-tree-icon-ellipsis`)})}),V==null?null:J(`slot`,{name:se})]}):null,V==null?null:J(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),kt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),kt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var ei={hydrateRoot:(e,t)=>{Ut(yt($r,t),e)},renderRoot:(e,t)=>{Ht(yt($r,t),e)},unmountRoot:e=>{Ht(null,e)}};function ti(e,t){ei.renderRoot(e,t)}function ni(e,t){ei.hydrateRoot(e,t)}function ri(e){ei.unmountRoot(e)}var ii=class{#e=new Map;#t=null;clearAll(){for(let e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){let t=this.#n(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#t=e,e!=null){this.#i(e);for(let[e,t]of this.#e)this.#r(e,t)}}setSlotContent(e,t){let n=this.#n(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#r(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#r(e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=this.#n(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#r(e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}#n(e){let t=this.#e.get(e)??null;if(t!=null)return t;let n=this.#t;if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}#r(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#t!=null&&t.parentNode!==this.#t&&this.#t.appendChild(t)}#i(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||this.#e.has(e)||this.#e.set(e,t)}}},ai=`__c`,oi=`__k`,si=`__d`,ci=`__s`,li=/[\s\n\\/='"\0<>]/,ui=/^(xlink|xmlns|xml)([A-Z])/,di=/^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,fi=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,pi=new Set([`draggable`,`spellcheck`]);function mi(e){e.__g===void 0?e[si]=!0:e.__g|=8}function hi(e){e.__g===void 0?e[si]=!1:e.__g&=-9}function gi(e){return e.__g===void 0?!0===e[si]:!!(8&e.__g)}var _i=/["&<]/;function vi(e){if(e.length===0||!1===_i.test(e))return e;for(var t=0,n=0,r=``,i=``;n<e.length;n++){switch(e.charCodeAt(n)){case 34:i=`&quot;`;break;case 38:i=`&amp;`;break;case 60:i=`&lt;`;break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=i,t=n+1}return n!==t&&(r+=e.slice(t,n)),r}var yi={},bi=new Set(`animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom`.split(`.`)),xi=/[A-Z]/g;function Si(e){var t=``;for(var n in e){var r=e[n];if(r!=null&&r!==``){var i=n[0]==`-`?n:yi[n]||(yi[n]=n.replace(xi,`-$&`).toLowerCase()),a=`;`;typeof r!=`number`||i.startsWith(`--`)||bi.has(i)||(a=`px;`),t=t+i+`:`+r+a}}return t||void 0}function Ci(){this.__d=!0}function wi(e,t){return{__v:e,context:t,props:e.props,setState:Ci,forceUpdate:Ci,__d:!0,__h:[]}}function Ti(e,t,n){if(!e.s){if(n instanceof Ei){if(!n.s)return void(n.o=Ti.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Ti.bind(null,e,t),Ti.bind(null,e,2));e.s=t,e.v=n;let r=e.o;r&&r(e)}}var Ei=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var a=1&i?t:n;if(a){try{Ti(r,1,a(this.v))}catch(e){Ti(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?Ti(r,1,t?t(i):i):n?Ti(r,1,n(i)):Ti(r,2,i)}catch(e){Ti(r,2,e)}},r},e}(),Di,Oi,ki,Ai,ji={},Mi=Array.isArray,Ni=Object.assign,Pi=``,Fi=`<!--$s-->`,Ii=`<!--/$s-->`;function Li(e,t){var n,r=e.type,i=!0;return e[ai]?(i=!1,(n=e[ai]).state=n[ci]):n=new r(e.props,t),e[ai]=n,n.__v=e,n.props=e.props,n.context=t,mi(n),n.state??=ji,n[ci]??(n[ci]=n.state),r.getDerivedStateFromProps?n.state=Ni({},n.state,r.getDerivedStateFromProps(n.props,n.state)):i&&n.componentWillMount?(n.componentWillMount(),n.state=n[ci]===n.state?n.state:n[ci]):!i&&n.componentWillUpdate&&n.componentWillUpdate(),ki&&ki(e),n.render(n.props,n.state,t)}function Ri(e,t,n,r,i,a,o){if(e==null||!0===e||!1===e||e===Pi)return Pi;var s=typeof e;if(s!=`object`)return s==`function`?Pi:s==`string`?vi(e):e+Pi;if(Mi(e)){var c,l=Pi;i[oi]=e;for(var u=e.length,d=0;d<u;d++){var f=e[d];if(f!=null&&typeof f!=`boolean`){var p,m=Ri(f,t,n,r,i,a,o);typeof m==`string`?l+=m:(c||=Array(u),l&&c.push(l),l=Pi,Mi(m)?(p=c).push.apply(p,m):c.push(m))}}return c?(l&&c.push(l),c):l}if(e.constructor!==void 0)return Pi;e.__=i,Di&&Di(e);var h=e.type,g=e.props;if(typeof h==`function`){var _,v,y,b=t;if(h===xt){if(`tpl`in g){for(var x=Pi,S=0;S<g.tpl.length;S++)if(x+=g.tpl[S],g.exprs&&S<g.exprs.length){var C=g.exprs[S];if(C==null)continue;typeof C!=`object`||C.constructor!==void 0&&!Mi(C)?x+=C:x+=Ri(C,t,n,r,e,a,o)}return x}if(`UNSTABLE_comment`in g)return`<!--`+vi(g.UNSTABLE_comment)+`-->`;v=g.children}else{if((_=h.contextType)!=null){var ee=t[_.__c];b=ee?ee.props.value:_.__}var w=h.prototype&&typeof h.prototype.render==`function`;if(w)v=Li(e,b),y=e[ai];else{e[ai]=y=wi(e,b);for(var T=0;gi(y)&&T++<25;){hi(y),ki&&ki(e);try{v=h.call(y,g,b)}catch(t){throw a&&t&&typeof t.then==`function`&&(e._suspended=!0),t}}mi(y)}if(y.getChildContext!=null&&(t=Ni({},t,y.getChildContext())),w&&W.errorBoundaries&&(h.getDerivedStateFromError||y.componentDidCatch)){v=v!=null&&v.type===xt&&v.key==null&&v.props.tpl==null?v.props.children:v;try{return Ri(v,t,n,r,e,a,!1)}catch(i){return h.getDerivedStateFromError&&(y[ci]=h.getDerivedStateFromError(i)),y.componentDidCatch&&y.componentDidCatch(i,ji),gi(y)?(v=Li(e,t),(y=e[ai]).getChildContext!=null&&(t=Ni({},t,y.getChildContext())),Ri(v=v!=null&&v.type===xt&&v.key==null&&v.props.tpl==null?v.props.children:v,t,n,r,e,a,o)):Pi}finally{Oi&&Oi(e),Ai&&Ai(e)}}}v=v!=null&&v.type===xt&&v.key==null&&v.props.tpl==null?v.props.children:v;try{var E=Ri(v,t,n,r,e,a,o);return Oi&&Oi(e),W.unmount&&W.unmount(e),e._suspended?typeof E==`string`?Fi+E+Ii:Mi(E)?(E.unshift(Fi),E.push(Ii),E):E.then(function(e){return Fi+e+Ii}):E}catch(i){if(!a&&o&&o.onError){var te=function i(s){return o.onError(s,e,function(e,s){try{return Ri(e,t,n,r,s,a,o)}catch(e){return i(e)}})}(i);if(te!==void 0)return te;var D=W.__e;return D&&D(i,e),Pi}if(!a||!i||typeof i.then!=`function`)throw i;return i.then(function i(){try{var s=Ri(v,t,n,r,e,a,o);return e._suspended?Fi+s+Ii:s}catch(e){if(!e||typeof e.then!=`function`)throw e;return e.then(i)}})}}var O,k=`<`+h,A=Pi;for(var j in g){var M=g[j];if(typeof(M=Bi(M)?M.value:M)!=`function`||j===`class`||j===`className`){switch(j){case`children`:O=M;continue;case`key`:case`ref`:case`__self`:case`__source`:continue;case`htmlFor`:if(`for`in g)continue;j=`for`;break;case`className`:if(`class`in g)continue;j=`class`;break;case`defaultChecked`:j=`checked`;break;case`defaultSelected`:j=`selected`;break;case`defaultValue`:case`value`:switch(j=`value`,h){case`textarea`:O=M;continue;case`select`:r=M;continue;case`option`:r!=M||`selected`in g||(k+=` selected`)}break;case`dangerouslySetInnerHTML`:A=M&&M.__html;continue;case`style`:typeof M==`object`&&(M=Si(M));break;case`acceptCharset`:j=`accept-charset`;break;case`httpEquiv`:j=`http-equiv`;break;default:if(ui.test(j))j=j.replace(ui,`$1:$2`).toLowerCase();else{if(li.test(j))continue;j[4]!==`-`&&!pi.has(j)||M==null?n?fi.test(j)&&(j=j===`panose1`?`panose-1`:j.replace(/([A-Z])/g,`-$1`).toLowerCase()):di.test(j)&&(j=j.toLowerCase()):M+=Pi}}M!=null&&!1!==M&&(k=!0===M||M===Pi?k+` `+j:k+` `+j+`="`+(typeof M==`string`?vi(M):M+Pi)+`"`)}}if(li.test(h))throw Error(h+` is not a valid HTML tag name in `+k+`>`);if(A||(typeof O==`string`?A=vi(O):O!=null&&!1!==O&&!0!==O&&(A=Ri(O,t,h===`svg`||h!==`foreignObject`&&n,r,e,a,o))),Oi&&Oi(e),Ai&&Ai(e),!A&&zi.has(h))return k+`/>`;var N=`</`+h+`>`,P=k+`>`;return Mi(A)?[P].concat(A,[N]):typeof A==`string`?P+A+N:[P,A,N]}var zi=new Set([`area`,`base`,`br`,`col`,`command`,`embed`,`hr`,`img`,`input`,`keygen`,`link`,`meta`,`param`,`source`,`track`,`wbr`]);function Bi(e){return typeof e==`object`&&!!e&&typeof e.peek==`function`&&`value`in e}var Vi=0;function Hi(e){return e!=null&&e.length>0?e:(Vi+=1,`pst_ft_${Vi}`)}function Ui({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??de)}function Wi(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function Gi(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function Ki(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var qi=class{static LoadedCustomComponent=!0;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l=new ii;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y=null;#b;#x=!1;#S=!1;constructor(e){let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:f,renaming:p,search:m,searchBlurBehavior:h,searchFakeFocus:g,stickyFolders:_,unsafeCSS:v,initialVisibleRowCount:y,...b}=e;this.#e=t,this.#n=Hi(a),this.#p=U(i),this.#m=s,this.#h=v,this.#r=u,this.#i=f,this.#a=p!=null&&p!==!1,this.#o=h,this.#s=m===!0,this.#c=g===!0,this.#u=ue(n,c),this.#d={itemHeight:this.#u.itemHeight,overscan:d,stickyFolders:_,initialVisibleRowCount:y},this.#t=new nt({...b,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:p}),this.#v=this.#t.getSelectionVersion(),this.#y=this.#r==null?null:this.subscribe(()=>{this.#D()})}unmount(){this.#b!=null&&(ri(this.#b),delete this.#b.dataset.fileTreeVirtualizedWrapper,this.#b=void 0),this.#l.clearAll(),this.#l.setHost(null),this.#f!=null&&(delete this.#f.dataset.fileTreeVirtualized,this.#I(this.#f),this.#f=void 0)}cleanUp(){this.unmount(),this.#y?.(),this.#y=null,this.#t.destroy()}getFileTreeContainer(){return this.#f}getItem(e){return this.#t.getItem(e)}getFocusedItem(){return this.#t.getFocusedItem()}getFocusedPath(){return this.#t.getFocusedPath()}getSelectedPaths(){return this.#t.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#u.itemHeight}getDensityFactor(){return this.#u.factor}subscribe(e){let t=!1;return this.#t.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#t.focusPath(e)}scrollToPath(e,t){this.#t.scrollToPath(e,t)}focusNearestPath(e){return this.#t.focusNearestPath(e)}add(e){this.#t.add(e)}batch(e){this.#t.batch(e)}move(e,t,n){this.#t.move(e,t,n)}onMutation(e,t){return this.#t.onMutation(e,t)}setSearch(e){this.#t.setSearch(e)}openSearch(e){this.#t.openSearch(e)}closeSearch(){this.#t.closeSearch()}isSearchOpen(){return this.#t.isSearchOpen()}getSearchValue(){return this.#t.getSearchValue()}getSearchMatchingPaths(){return this.#t.getSearchMatchingPaths()}focusNextSearchMatch(){this.#t.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#t.focusPreviousSearchMatch()}startRenaming(e,t){return this.#t.startRenaming(e,t)}remove(e,t){this.#t.remove(e,t)}resetPaths(e,t){this.#t.resetPaths(e,t)}setComposition(e){this.#e=e;let t=this.#T();t!=null&&(this.#O(),ti(t.wrapper,this.#w()))}setGitStatus(e){this.#p=U(e,this.#p);let t=this.#T();t!=null&&ti(t.wrapper,this.#w())}setIcons(e){this.#m=e;let t=this.#T();t!=null&&(this.#E(t.host,t.wrapper),ti(t.wrapper,this.#w()))}hydrate({fileTreeContainer:e}){let t=this.#P(e),n=this.#N(t);this.#O(),ni(n,this.#w())}render({containerWrapper:e,fileTreeContainer:t}){let n=this.#P(t??this.#f,e),r=this.#N(n);this.#O(),ti(r,this.#w())}#C(){return{initialViewportHeight:Ui({initialVisibleRowCount:this.#d.initialVisibleRowCount,itemHeight:this.#d.itemHeight}),itemHeight:this.#d.itemHeight,overscan:this.#d.overscan,stickyFolders:this.#d.stickyFolders}}#w(){return{composition:this.#e,controller:this.#t,gitStatusByPath:this.#p?.statusByPath,ignoredGitDirectories:this.#p?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#p?.directoriesWithChanges,icons:this.#m,instanceId:this.#n,renamingEnabled:this.#a,renderRowDecoration:this.#i,searchBlurBehavior:this.#o,searchEnabled:this.#s,searchFakeFocus:this.#c,slotHost:this.#l,...this.#C()}}#T(){let e=this.#f,t=this.#b;return e==null||t==null?null:{host:e,wrapper:t}}#E(e,t){let n=e.shadowRoot;n!=null&&(this.#k(n),this.#A(n)),this.#j(t)}#D(){let e=this.#r;if(e==null)return;let t=this.#t.getSelectionVersion();t!==this.#v&&(this.#v=t,e(this.#t.getSelectedPaths()))}#O(){let e=this.#e?.header?.render;if(e!=null){this.#l.setSlotContent(oe,e());return}this.#l.setSlotHtml(oe,this.#e?.header?.html??null)}#k(e){let t=Ki(e).find(e=>Gi(e)),n=Wi(ee(C(this.#m).set));n!=null&&(t!=null&&t.outerHTML===n.outerHTML||(t==null?e.prepend(n):t.replaceWith(n)))}#A(e){let t=Ki(e),n=t.find(e=>Gi(e)),r=t.filter(e=>e!==n),i=C(this.#m).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=Wi(i);if(a==null){for(let e of r)e.remove();return}if(!(r.length===1&&r[0].outerHTML===a.outerHTML)){for(let e of r)e.remove();e.appendChild(a)}}#j(e){let t=C(this.#m);t.colored&&S(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}#M(e){let t=e.querySelector(`style[${I}]`);if(this.#g==null&&t instanceof HTMLStyleElement&&(this.#g=t),this.#h==null||this.#h===``){this.#g?.remove(),this.#g=void 0,this.#_=void 0;return}this.#g?.parentNode===e&&this.#_===this.#h||(this.#g??=document.createElement(`style`),this.#g.setAttribute(I,``),this.#g.parentNode!==e&&e.appendChild(this.#g),this.#g.textContent=z(this.#h),this.#_=this.#h)}#N(e){if(this.#b!=null)return this.#b;let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===this.#n)??n[0];return r!=null&&(this.#n=r.dataset.fileTreeId??this.#n),this.#b=r??document.createElement(`div`),this.#b.dataset.fileTreeId=this.#n,this.#b.dataset.fileTreeVirtualizedWrapper=`true`,this.#E(e,this.#b),this.#b.parentNode!==t&&t.appendChild(this.#b),this.#b}#P(e,t){let n=e??this.#f??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return ve(n,r),this.#M(r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,this.#F(n),this.#l.setHost(n),this.#f=n,n}#F(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(this.#u.itemHeight)}px`),this.#x=!0),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(this.#u.factor)),this.#S=!0)}#I(e){this.#x&&=(e.style.removeProperty(`--trees-item-height`),!1),this.#S&&=(e.style.removeProperty(`--trees-density-override`),!1)}},Q=e(t(),1),$=n(),Ji=typeof window>`u`?Q.useEffect:Q.useLayoutEffect;function Yi(e,t,n){let r=e==null?null:(0,$.jsx)(`div`,{slot:oe,children:e}),i=t!=null&&n!=null?(0,$.jsx)(`div`,{slot:se,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,$.jsxs)($.Fragment,{children:[r,i]})}function Xi(e,t){return typeof window>`u`&&t!=null?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,$.jsx)($.Fragment,{children:e})}function Zi(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement?!0:e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function Qi(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function $i({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,Q.useState)(null),[c,l]=(0,Q.useState)(null),u=(0,Q.useRef)(n.getComposition()),d=(0,Q.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,Q.useCallback)(()=>{s(null)},[]),m=(0,Q.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,Q.useMemo)(()=>Qi(h,e,f,p,m),[h,p,m,f,e]),_=(0,Q.useCallback)(e=>{l(e)},[]);(0,Q.useEffect)(()=>{f||s(null)},[f]),Ji(()=>{n.setComposition(g)},[g,n]),Ji(()=>{if(c!=null)return r!=null&&Zi(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=Xi(Yi(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,$.jsx)(ne,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}function ea(e){let[t]=(0,Q.useState)(()=>new qi(e)),n=(0,Q.useRef)({timeout:null,model:t});return(0,Q.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}function ta({isLoadingOpenTargets:e=!1,onAddToChat:t,onCopyPath:n,onOpenInTarget:r,primaryTarget:i,targetPath:a,visibleTargets:o}){if(a==null)return[];let s=n==null?`workspace`:`review`,c=[];return n!=null&&c.push({id:`copy-path`,message:h({id:`codex.review.fileTree.contextMenu.copyPath`,defaultMessage:`Copy path`,description:`Context menu action to copy the path of a file tree item`}),onSelect:()=>{n(a)}}),t!=null&&c.push({id:`add-to-chat`,message:h({id:`threadSidePanel.workspaceBrowser.addToChat`,defaultMessage:`Add to chat`,description:`Context menu action for adding a file from the file tree to the current chat`}),onSelect:()=>{t(a)}}),e?[{id:`open-in-loading`,message:ia(s),tooltipMessage:h({id:`threadSidePanel.workspaceBrowser.openIn.loading`,defaultMessage:`Loading available apps…`,description:`Tooltip shown when the file tree is still loading app options for opening a file`}),enabled:!1},{id:`open-in-separator`,type:`separator`},...c]:i==null?c:[...D({idPrefix:na(s),messages:ra(s),onOpenInTarget:(e,t)=>{r(e,t,a)},primaryTarget:i,visibleTargets:o}),{id:`open-in-separator`,type:`separator`},...c]}function na(e){switch(e){case`review`:return`review-file-tree-open`;case`workspace`:return`workspace-directory-tree-open`}}function ra(e){switch(e){case`review`:return{openInTarget:h({id:`codex.review.fileTree.contextMenu.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a review file in the preferred app`}),openIn:ia(e),openInTargetSubmenu:h({id:`codex.review.fileTree.contextMenu.openWithTarget`,defaultMessage:`{target}`,description:`Context menu action to open a review file in a specific app`})};case`workspace`:return{openInTarget:h({id:`threadSidePanel.workspaceBrowser.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a workspace browser file in the preferred app`}),openIn:ia(e),openInTargetSubmenu:h({id:`threadSidePanel.workspaceBrowser.openInTargetSubmenu`,defaultMessage:`{target}`,description:`Context menu action to open a workspace browser file in a specific app`})}}}function ia(e){switch(e){case`review`:return h({id:`codex.review.fileTree.contextMenu.openWith`,defaultMessage:`Open with`,description:`Context menu submenu label for choosing an app to open a review file`});case`workspace`:return h({id:`threadSidePanel.workspaceBrowser.openIn`,defaultMessage:`Open in…`,description:`Context menu submenu label for choosing an app to open a workspace browser file`})}}function aa(e){for(let t of e.composedPath()){if(!(t instanceof Element)||t.getAttribute(`data-item-type`)!==`file`)continue;let e=t.getAttribute(`data-item-path`);if(e)return e}return null}var oa=r();function sa(e){let t=(0,oa.c)(26),{turnId:n,cwd:r,hostId:i,openPath:a}=e,o;t[0]!==r||t[1]!==i||t[2]!==a?(o={cwd:r,hostId:i,isQueryEnabled:!1,openPath:a},t[0]=r,t[1]=i,t[2]=a,t[3]=o):o=t[3];let s=da(o),{data:c}=s,l=c?.targets,u;t[4]!==r||t[5]!==i||t[6]!==a||t[7]!==l||t[8]!==n?(u={turnId:n,cwd:r,hostId:i,openPath:a,targets:l},t[4]=r,t[5]=i,t[6]=a,t[7]=l,t[8]=n,t[9]=u):u=t[9];let d=ua(u),f;t[10]!==r||t[11]!==a?(f=la({cwd:r,openPath:a}),t[10]=r,t[11]=a,t[12]=f):f=t[12];let p=f,m=c?.preferredTarget??null,h;t[13]===c?.targets?h=t[14]:(h=c?.targets??[],t[13]=c?.targets,t[14]=h);let g;t[15]===c?.availableTargets?g=t[16]:(g=c?.availableTargets??[],t[15]=c?.availableTargets,t[16]=g);let _=c?.mode,v=c!=null,y;return t[17]!==p||t[18]!==d||t[19]!==s.isFetching||t[20]!==m||t[21]!==h||t[22]!==g||t[23]!==_||t[24]!==v?(y={canLoadTargets:p,preferredTarget:m,targets:h,availableTargets:g,mode:_,hasLoadedTargets:v,isLoadingTargets:s.isFetching,open:d},t[17]=p,t[18]=d,t[19]=s.isFetching,t[20]=m,t[21]=h,t[22]=g,t[23]=_,t[24]=v,t[25]=y):y=t[25],y}function ca(e){let t=(0,oa.c)(23),{cwd:n,delayMs:r,hostId:i,openPath:a}=e,o=r===void 0?0:r,s;t[0]!==n||t[1]!==a?(s=la({cwd:n,openPath:a}),t[0]=n,t[1]=a,t[2]=s):s=t[2];let c=s,l=o<=0,u;t[3]!==n||t[4]!==i||t[5]!==a||t[6]!==l?(u={cwd:n,hostId:i,isQueryEnabled:l,openPath:a},t[3]=n,t[4]=i,t[5]=a,t[6]=l,t[7]=u):u=t[7];let{data:d,refetch:f}=da(u),p;t[8]===f?p=t[9]:(p=()=>{f()},t[8]=f,t[9]=p);let m=(0,Q.useEffectEvent)(p),h;t[10]!==c||t[11]!==d||t[12]!==o||t[13]!==m||t[14]!==l?(h=()=>{if(l||!c||d!=null)return;let e=window.setTimeout(m,o);return()=>{window.clearTimeout(e)}},t[10]=c,t[11]=d,t[12]=o,t[13]=m,t[14]=l,t[15]=h):h=t[15];let g;return t[16]!==c||t[17]!==n||t[18]!==d||t[19]!==o||t[20]!==a||t[21]!==l?(g=[c,n,d,o,a,l],t[16]=c,t[17]=n,t[18]=d,t[19]=o,t[20]=a,t[21]=l,t[22]=g):g=t[22],(0,Q.useEffect)(h,g),null}function la({cwd:e,openPath:t}){return!1}function ua(e){let t=(0,oa.c)(13),{turnId:n,cwd:r,hostId:l,openPath:f,targets:p}=e,h=c(),g=a(s),_=m(),v;t[0]!==_||t[1]!==g?(v={onSuccess:e=>{e.success||g.get(y).danger(_.formatMessage({id:`localConversation.openTarget.error`,defaultMessage:`Unable to open item`,description:`Toast shown when opening a file or website externally fails`}))},onError:()=>{g.get(y).danger(_.formatMessage({id:`localConversation.openTarget.error`,defaultMessage:`Unable to open item`,description:`Toast shown when opening a file or website externally fails`}))}},t[0]=_,t[1]=g,t[2]=v):v=t[2];let{mutate:b}=d(`open-file`,v),x=o(i),S=o(P),C;return t[3]!==r||t[4]!==l||t[5]!==b||t[6]!==f||t[7]!==x||t[8]!==h||t[9]!==S||t[10]!==p||t[11]!==n?(C=(e,t)=>{let{appPath:i,openMode:a,persistPreferred:o,line:s,column:c,path:d}=t,m=d??f??r;m&&(p?.find(t=>t.target===e&&(t.appPath??null)===(i??null))?.kind===`editor`&&S!=null&&n!=null&&x.submitCodexAnalyticsEvent?.({action:`open_in_ide`,eventKind:`action`,metadata:{target:e},threadId:S.threadId,turnId:n}),o&&r&&h.setQueryData(u(`open-in-targets`,{cwd:r,hostId:l,path:f}),t=>t&&{...t,preferredTarget:e,targets:t.targets.map(t=>({...t,default:t.target===e?!0:void 0}))}),b({path:m,cwd:r??null,target:e,...i==null?{}:{appPath:i},...s==null?{}:{line:s},...c==null?{}:{column:c},...a==null?{}:{openMode:a},...o&&r?{persistPreferredTargetPath:r}:{},...l==null?{}:{hostId:l}}))},t[3]=r,t[4]=l,t[5]=b,t[6]=f,t[7]=x,t[8]=h,t[9]=S,t[10]=p,t[11]=n,t[12]=C):C=t[12],C}function da(e){let t=(0,oa.c)(13),{cwd:n,hostId:r,isQueryEnabled:i,openPath:a}=e,o=c(),s,l,d;t[0]!==n||t[1]!==r||t[2]!==a?(s={cwd:n,hostId:r,path:a},d=p,l=u(`open-in-targets`,s),t[0]=n,t[1]=r,t[2]=a,t[3]=s,t[4]=l,t[5]=d):(s=t[3],l=t[4],d=t[5]);let m;t[6]!==s||t[7]!==o?(m=()=>fa({params:s,queryClient:o}),t[6]=s,t[7]=o,t[8]=m):m=t[8];let h;return t[9]!==l||t[10]!==m||t[11]!==!1?(h={queryKey:l,queryFn:m,enabled:!1,staleTime:f.ONE_MINUTE},t[9]=l,t[10]=m,t[11]=!1,t[12]=h):h=t[12],d(h)}async function fa({params:e,queryClient:t}){if(pa(e.path)){let n=await l(`open-in-targets`,{params:{...e,nativeBrowserDiscovery:`known`}});n.targets.some(e=>e.kind===`native`&&e.appPath!=null)&&t.setQueryData(u(`open-in-targets`,e),n)}return l(`open-in-targets`,{params:e})}function pa(e){return!1}var ma=28,ha=60;function ga(e){let t=(0,oa.c)(97),{cwd:n,decorationIcons:r,flattenEmptyDirectories:i,hostId:a,icons:o,initialExpandedPaths:s,initialScrollTop:l,onClick:u,onDoubleClick:f,onExpandedPathsChange:p,onSelectionChange:m,onStateChange:h,paths:g,revealSelectedPath:v,renderRowDecoration:y,resetKey:b,selectedPath:S,unsafeCSS:C}=e,ee=i===void 0?!1:i,w=l===void 0?0:l,T=v===void 0?!1:v,D=te(E()),{platform:O}=x(),k=d(`add-context-file`),N=c(),P;t[0]!==n||t[1]!==a?(P={cwd:n,hostId:a},t[0]=n,t[1]=a,t[2]=P):P=t[2];let ne=sa(P),F;t[3]===g?F=t[4]:(F=g.map(_a),t[3]=g,t[4]=F);let I=F,re;if(t[5]!==n||t[6]!==g||t[7]!==O){re=new Map;for(let e of g)typeof e!=`string`&&re.set(e.displayPath,_(n??``,e.path,O===`windows`));t[5]=n,t[6]=g,t[7]=O,t[8]=re}else re=t[8];let ie=re,ae;t[9]!==r||t[10]!==o?(ae=ya(o,r),t[9]=r,t[10]=o,t[11]=ae):ae=t[11];let oe=ae,se=(0,Q.useRef)(null),ce;t[12]===s?ce=t[13]:(ce=Array.from(s??[]),t[12]=s,t[13]=ce);let le=(0,Q.useRef)(ce),ue=(0,Q.useRef)(null),de=(0,Q.useRef)(null),L=(0,Q.useRef)(w),fe=(0,Q.useRef)(S??null),R;t[14]===h?R=t[15]:(R=()=>{h?.({expandedPaths:le.current,scrollTop:L.current,selectedPath:fe.current})},t[14]=h,t[15]=R);let z=j(R),pe;t[16]!==p||t[17]!==z?(pe=e=>{le.current=e,p?.(e),z()},t[16]=p,t[17]=z,t[18]=pe):pe=t[18];let me=j(pe),he;t[19]!==m||t[20]!==z?(he=e=>{fe.current=e[0]??null,m?.(e),z()},t[19]=m,t[20]=z,t[21]=he):he=t[21];let ge=j(he),_e;t[22]===S?_e=t[23]:(_e=S==null?void 0:[S],t[22]=S,t[23]=_e);let ve=`
      :host {
        --trees-bg-override: var(--color-token-main-surface-primary);
        --trees-bg-muted-override: var(--color-token-list-hover-background);
        --trees-border-color-override: var(--color-token-border);
        --trees-fg-override: var(--color-token-foreground);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-token-list-focus-outline);
        --trees-item-padding-x-override: 6px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-token-list-active-selection-background);
        --trees-selected-fg-override: var(--color-token-list-active-selection-foreground);
        --trees-item-row-gap-override: 10px;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: var(--color-token-main-surface-primary);
      }

      [data-file-tree-virtualized-scroll='true'] {
        scrollbar-gutter: auto;
      }

      [role="treeitem"] {
        cursor: var(--cursor-interaction) !important;
      }

      [role="treeitem"] * {
        cursor: var(--cursor-interaction) !important;
      }

      [data-item-type='file']:has([data-item-section='content']:empty) {
        display: none;
      }

      ${C??``}
    `,ye;t[24]!==oe||t[25]!==ee||t[26]!==ge||t[27]!==s||t[28]!==y||t[29]!==_e||t[30]!==ve||t[31]!==I?(ye={fileTreeSearchMode:`hide-non-matches`,flattenEmptyDirectories:ee,icons:oe,initialExpandedPaths:s,initialSelectedPaths:_e,itemHeight:ma,onSelectionChange:ge,paths:I,renderRowDecoration:y,search:!1,stickyFolders:!0,unsafeCSS:ve},t[24]=oe,t[25]=ee,t[26]=ge,t[27]=s,t[28]=y,t[29]=_e,t[30]=ve,t[31]=I,t[32]=ye):ye=t[32];let{model:B}=ea(ye),be,xe;t[33]!==s||t[34]!==B||t[35]!==b||t[36]!==I?(be=()=>{let e=Array.from(s??[]),t=ue.current;t!=null&&t.model===B&&t.resetKey===b&&va(t.treePaths,I)&&va(t.initialExpandedPaths,e)||(ue.current={initialExpandedPaths:e,model:B,resetKey:b,treePaths:Array.from(I)},le.current=e,de.current=null,B.resetPaths(I,{initialExpandedPaths:s}))},xe=[s,B,b,I],t[33]=s,t[34]=B,t[35]=b,t[36]=I,t[37]=be,t[38]=xe):(be=t[37],xe=t[38]),(0,Q.useEffect)(be,xe);let Se,Ce;t[39]!==w||t[40]!==B||t[41]!==T||t[42]!==S?(Se=()=>{let e=null,t=0,n=()=>{e=null,!ka(B,w)&&(t>=ha||(t+=1,e=window.requestAnimationFrame(n)))};return w>0&&!(T&&S!=null)?(L.current=w,n()):L.current=0,()=>{e!=null&&window.cancelAnimationFrame(e)}},Ce=[w,B,T,S],t[39]=w,t[40]=B,t[41]=T,t[42]=S,t[43]=Se,t[44]=Ce):(Se=t[43],Ce=t[44]),(0,Q.useEffect)(Se,Ce);let we;t[45]!==B||t[46]!==T||t[47]!==S?(we=()=>{if(fe.current=S??null,Ta(B,S),!T||S==null){de.current=null;return}de.current!==S&&Ea(B,S)&&(de.current=S)},t[45]=B,t[46]=T,t[47]=S,t[48]=we):we=t[48];let V;t[49]!==B||t[50]!==T||t[51]!==S||t[52]!==I?(V=[B,T,S,I],t[49]=B,t[50]=T,t[51]=S,t[52]=I,t[53]=V):V=t[53],(0,Q.useEffect)(we,V);let Te,Ee;t[54]!==oe||t[55]!==B?(Te=()=>{B.setIcons(oe)},Ee=[oe,B],t[54]=oe,t[55]=B,t[56]=Te,t[57]=Ee):(Te=t[56],Ee=t[57]),(0,Q.useEffect)(Te,Ee);let De,Oe;t[58]!==me||t[59]!==B||t[60]!==I?(De=()=>B.subscribe(()=>{L.current=Oa(B),me(wa(B,I))}),Oe=[me,B,I],t[58]=me,t[59]=B,t[60]=I,t[61]=De,t[62]=Oe):(De=t[61],Oe=t[62]),(0,Q.useEffect)(De,Oe);let ke,Ae;t[63]!==B||t[64]!==z?(ke=()=>{let e=null,t=0,n=null,r=()=>{e=null;let i=Da(B);if(i!=null){let e=()=>{L.current=i.scrollTop,z()};i.addEventListener(`scroll`,e,{passive:!0}),n=()=>{i.removeEventListener(`scroll`,e)};return}t>=ha||(t+=1,e=window.requestAnimationFrame(r))};return r(),()=>{e!=null&&window.cancelAnimationFrame(e),n?.()}},Ae=[B,z],t[63]=B,t[64]=z,t[65]=ke,t[66]=Ae):(ke=t[65],Ae=t[66]),(0,Q.useEffect)(ke,Ae);let je;t[67]!==n||t[68]!==a?(je=(0,$.jsx)(ca,{cwd:n,hostId:a}),t[67]=n,t[68]=a,t[69]=je):je=t[69];let Me;t[70]!==k||t[71]!==n||t[72]!==ne||t[73]!==a||t[74]!==N||t[75]!==ie?(Me=()=>{let e=Ca(ie,se.current);return ta({...xa({cwd:n,fallbackOpenTargets:ne,hostId:a,queryClient:N,targetPath:e}),onAddToChat:a==null?void 0:e=>{k.mutateAsync({hostId:a,path:e})},onCopyPath:A,onOpenInTarget:(e,t,n)=>{ne.open(e,{appPath:t,persistPreferred:!1,path:n})},targetPath:e})},t[70]=k,t[71]=n,t[72]=ne,t[73]=a,t[74]=N,t[75]=ie,t[76]=Me):Me=t[76];let Ne;t[77]!==n||t[78]!==a||t[79]!==N||t[80]!==ie?(Ne=()=>Sa({cwd:n,hostId:a,queryClient:N,targetPath:Ca(ie,se.current)}),t[77]=n,t[78]=a,t[79]=N,t[80]=ie,t[81]=Ne):Ne=t[81];let Pe;t[82]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=e=>{se.current=aa(e.nativeEvent)},t[82]=Pe):Pe=t[82];let Fe;t[83]===D?Fe=t[84]:(Fe={backgroundColor:`var(--color-token-main-surface-primary)`,color:`var(--color-token-foreground)`,colorScheme:D,width:`100%`},t[83]=D,t[84]=Fe);let Ie;t[85]!==B||t[86]!==u||t[87]!==f||t[88]!==Fe?(Ie=(0,$.jsx)($i,{"data-tab-preview-pin-exempt":!0,onClick:u,onContextMenu:Pe,onDoubleClick:f,model:B,style:Fe}),t[85]=B,t[86]=u,t[87]=f,t[88]=Fe,t[89]=Ie):Ie=t[89];let Le;t[90]!==Me||t[91]!==Ne||t[92]!==Ie?(Le=(0,$.jsx)(M,{awaitBeforeOpen:!1,getItems:Me,onBeforeOpen:Ne,children:Ie}),t[90]=Me,t[91]=Ne,t[92]=Ie,t[93]=Le):Le=t[93];let Re;return t[94]!==je||t[95]!==Le?(Re=(0,$.jsxs)($.Fragment,{children:[je,Le]}),t[94]=je,t[95]=Le,t[96]=Re):Re=t[96],Re}function _a(e){return typeof e==`string`?e:e.displayPath}function va(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}function ya(e,t){if(t==null||t.length===0)return e;let n=t.map(e=>`<symbol id="${e.name}" viewBox="${e.viewBox??`0 0 ${e.width??0} ${e.height??0}`}">${e.body}</symbol>`).join(``),r=ba(typeof e==`string`?void 0:e?.spriteSheet,n);return e==null?{set:`complete`,spriteSheet:r}:typeof e==`string`?{set:e,spriteSheet:r}:{...e,spriteSheet:r}}function ba(e,t){return e==null?`<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`:e.replace(`</svg>`,`${t}</svg>`)}function xa({cwd:e,fallbackOpenTargets:t,hostId:n,queryClient:r,targetPath:i}){if(i==null)return{isLoadingOpenTargets:!1,primaryTarget:null,visibleTargets:[]};let a=u(`open-in-targets`,{cwd:e,hostId:n,path:i}),o=r.getQueryData(a),s=o?.targets??t.targets,c=o?.availableTargets??t.availableTargets,l=o?.preferredTarget??t.preferredTarget,d=o?.mode??t.mode;return{isLoadingOpenTargets:o==null&&!t.hasLoadedTargets&&r.getQueryState(a)?.status!==`error`,primaryTarget:k({preferredTarget:l,targets:s,availableTargets:c,mode:d}),visibleTargets:O({targets:s,availableTargets:c,includeHiddenTargets:!0,mode:d})}}function Sa({cwd:e,hostId:t,queryClient:n,targetPath:r}){}function Ca(e,t){return t==null?null:e.get(t)??t}function wa(e,t){let n=[];for(let r of t){if(!r.endsWith(`/`))continue;let t=r.slice(0,-1),i=e.getItem(t);i==null||!Aa(i)||!i.isExpanded()||n.push(t)}return n}function Ta(e,t){let n=e.getSelectedPaths();if(t==null){for(let t of n)e.getItem(t)?.deselect();return}if(!(n.length===1&&n[0]===t)){for(let t of n)e.getItem(t)?.deselect();e.getItem(t)?.select()}}function Ea(e,t){return e.getItem(t)==null?!1:(e.scrollToPath(t,{offset:`top`}),!0)}function Da(e){return e.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`)??null}function Oa(e){return Da(e)?.scrollTop??0}function ka(e,t){let n=Da(e);return n==null?!1:(n.scrollTop=Math.max(0,t),!0)}function Aa(e){return e.isDirectory()}function ja(e){let t=(0,oa.c)(23),{autoFocus:n,inputId:r,inputRef:i,onQueryChange:a,searchQuery:o}=e,s=r===void 0?`file-tree-search`:r,c=m(),l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,$.jsx)(g,{id:`codex.fileTreeSearch.label`,defaultMessage:`Filter files`,description:`Label for a file tree filter input`}),t[0]=l):l=t[0];let u;t[1]===s?u=t[2]:(u=(0,$.jsx)(`label`,{className:`sr-only`,htmlFor:s,children:l}),t[1]=s,t[2]=u);let d;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,$.jsx)(N,{className:`icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground`}),t[3]=d):d=t[3];let f;t[4]===a?f=t[5]:(f=e=>a(e.target.value),t[4]=a,t[5]=f);let p;t[6]===c?p=t[7]:(p=c.formatMessage({id:`codex.fileTreeSearch.placeholder`,defaultMessage:`Filter files…`,description:`Placeholder text for a file tree filter input`}),t[6]=c,t[7]=p);let h;t[8]!==n||t[9]!==s||t[10]!==i||t[11]!==o||t[12]!==f||t[13]!==p?(h=(0,$.jsx)(`input`,{autoFocus:n,id:s,ref:i,className:`w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-token-foreground ring-0 outline-none select-text placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none`,type:`text`,value:o,onChange:f,placeholder:p}),t[8]=n,t[9]=s,t[10]=i,t[11]=o,t[12]=f,t[13]=p,t[14]=h):h=t[14];let _;t[15]!==c||t[16]!==a||t[17]!==o.length?(_=o.length>0?(0,$.jsx)(v,{"aria-label":c.formatMessage({id:`codex.fileTreeSearch.clear`,defaultMessage:`Clear file filter`,description:`Button label to clear a file tree filter input`}),className:`text-token-input-placeholder-foreground hover:text-token-foreground`,color:`ghost`,size:`icon`,onClick:()=>a(``),children:(0,$.jsx)(b,{className:`icon-2xs`})}):null,t[15]=c,t[16]=a,t[17]=o.length,t[18]=_):_=t[18];let y;return t[19]!==u||t[20]!==h||t[21]!==_?(y=(0,$.jsxs)(`div`,{className:`relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-token-border bg-token-bg-fog text-base leading-[18px]`,children:[u,d,h,_]}),t[19]=u,t[20]=h,t[21]=_,t[22]=y):y=t[22],y}export{aa as a,sa as i,ga as n,ca as r,ja as t};
//# sourceMappingURL=file-tree-search-input-XzMwdncM.js.map