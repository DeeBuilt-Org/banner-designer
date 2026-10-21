import type { ReactNode } from "react";
import { FlagOutlined } from "@ant-design/icons";
import "./app-header.css";

/**
 * AppHeader — Banner Designer's own sticky header: app mark + tool name on the
 * left, page controls on the right. Colors and spacing come from the
 * --app-header-* variables in app-header.css.
 */
export function AppHeader({ actions }: { actions?: ReactNode }) {
  return (
    <header className="app-header">
      <div className="app-header__title">
        <FlagOutlined className="app-header__mark" aria-hidden />
        <h1 className="app-header__name">Banner Designer</h1>
      </div>
      {actions && <div className="app-header__actions">{actions}</div>}
    </header>
  );
}
