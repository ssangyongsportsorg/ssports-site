import { ReactCusdis } from 'react-cusdis'
import React from "react"
import { ThemeClassNames } from "@docusaurus/theme-common"
import BlogPostItem from "@theme/BlogPostItem"
import type { Props } from "@theme/BlogPostPage"
import BlogPostPaginator from "@theme/BlogPostPaginator"
import BlogSidebar from "@theme/BlogSidebar"
import EditThisPage from "@theme/EditThisPage"
import Layout from "@theme/Layout"
import Toc from "@theme/TOC"
import { Section } from "../../components/Section"
import { ActionFooter } from "../../components/ActionFooter"

function BlogPostPage(props: Props): JSX.Element {
  const { content: BlogPostContents, sidebar } = props
  const { frontMatter, metadata } = BlogPostContents
  const { title, description, nextItem, prevItem, editUrl } = metadata
  const { hide_table_of_contents: hideTableOfContents } = frontMatter

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogPostPage}
    >
      {BlogPostContents != null && (
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--3">
              <BlogSidebar sidebar={sidebar} />
            </div>
            <main className="col col--7">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage
              >
                <BlogPostContents />
              </BlogPostItem>
              <div>
                {typeof editUrl === "string" && (
                  <EditThisPage editUrl={editUrl} />
                )}
              </div>
              {(nextItem != null || prevItem != null) && (
                <div className="margin-vert--xl">
                  <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                </div>
              )}
            </main>

            {typeof hideTableOfContents === "boolean" &&
              !hideTableOfContents &&
              BlogPostContents.toc && (
                <div className="col col--2">
                  <Toc toc={BlogPostContents.toc} />
                </div>
              )}
          </div>
        </div>
      )}
<div>
      <ReactCusdis
        attrs={{
          host: 'https://dfff-nijxcc7sb-ssangyongsports.vercel.app',
          appId: '583956c6-98dd-40e3-9d48-7ee4480f3d28',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
      />

    </div>
      <Section>
        <ActionFooter />
      </Section>
    </Layout>
  )
}

export default BlogPostPage
