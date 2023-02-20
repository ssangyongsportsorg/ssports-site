import { useThemeConfig } from "@docusaurus/theme-common";
import React, { useEffect } from "react";
import FooterLayout from "./Layout";
import FooterLinks from "./Links";

const Footer = () => {
  const { footer } = useThemeConfig();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document
        .querySelector(".navb6ar__logo")
        .addEventListener("contextmenu", (e) => {
          e.preventDefault();
        });
    }
  }, []);

  if (!footer) {
    return null;
  }

  const { links, style } = footer;
  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
    />
  );
};

export default React.memo(Footer);
