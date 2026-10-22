import type { ReactNode } from "react";
import "./app-header.css";

/**
 * AppHeader: the sticky header lockup. The mark in a colored tile, then the
 * tool name in the display face; page-level controls on the right.
 *
 * Copied from Decision Lab's lockup (the DeeBuilt tools design system in
 * opsette-tools.github.io/docs/DEEBUILT-TOOLS-MIGRATION.md). Banner Designer
 * has no side rail, so it drops the nav toggle.
 */
export function AppHeader({
  mark,
  name,
  actions,
}: {
  /** An icon drawn in currentColor; it renders white on the tile. */
  mark: ReactNode;
  name: string;
  actions?: ReactNode;
}) {
  return (
    <header className="app-header">
      <div className="app-header__lockup">
        <span className="app-header__tile" aria-hidden="true">
          {mark}
        </span>
        <h1 className="app-header__name">{name}</h1>
      </div>
      {actions && <div className="app-header__actions">{actions}</div>}
    </header>
  );
}

/** Banner Designer's mark: the pennant from its favicon, in currentColor. */
export function FlagMark() {
  return (
    <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth={24} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" />
    </svg>
  );
}
