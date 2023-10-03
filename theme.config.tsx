import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { Logo } from "nextra-logo";

const logo = (
  <Logo
    dark="/logo/gs-dark.svg"
    light="/logo/gs-light.svg"
    size="50"
    logoText="Gitsecure"
    textWeight="700"
    textSize="20"
  />
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/GitsecureHQ/gitsecure-docs",
  },
  chat: {
    link: "https://discord.gg/u5tkbCnP3G",
  },
  docsRepositoryBase: "https://github.com/GitsecureHQ/gitsecure-docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Gitsecure",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A platform for for secret monitoring and scanning infrastructure, tailored specifically for developers and teams."
        />
        <meta
          name="og:description"
          content="A platform for for secret monitoring and scanning infrastructure, tailored specifically for developers and teams."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/gsdocs-preview.png" />
        <meta name="twitter:site:domain" content="docs.gitsecure.dev" />
        <meta name="twitter:url" content="docs.gitsecure.dev" />
        <meta
          name="og:title"
          content={title ? title + " – Gitsecure Docs" : "Gitsecure Docs"}
        />
        <meta name="og:image" content="/gsdocs-preview.png" />
        <meta name="apple-mobile-web-app-title" content="Gitsecure Docs" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/gs-light.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/logo/gs-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/logo/gs-light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Gitsecure.</p>
      </div>
    ),
  },
};

export default config;
