import { Footer, Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { SiteNavbar } from './SiteNavbar';

// Shared Nextra chrome (navbar with search + icons, footer). Used by the
// landing page and the docs section — i.e. everywhere except /blog, which
// intentionally uses its own clean magazine chrome.
export async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      navbar={<SiteNavbar />}
      pageMap={await getPageMap()}
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
