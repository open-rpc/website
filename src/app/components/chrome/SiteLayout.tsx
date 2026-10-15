import { Footer, Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { SiteNavbar } from './SiteNavbar';

// Shared Nextra chrome (navbar with search + icons, footer). Used by the
// landing page and the docs section — i.e. everywhere except /blog, which
// intentionally uses its own clean magazine chrome.
//
// The /blog route is filtered out of the page map so it doesn't render as a
// top-level sidebar entry ahead of Docs; it stays reachable via the navbar
// and via the Blog link at the bottom of the docs sidebar.
export async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = (await getPageMap()).filter(
    (item) => !('route' in item && item.route === '/blog'),
  );
  return (
    <Layout
      navbar={<SiteNavbar />}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/open-rpc/website"
      footer={
        <Footer>
          Apache License 2.0 {new Date().getFullYear()} © OpenRPC.
        </Footer>
      }
    >
      {children}
    </Layout>
  );
}
