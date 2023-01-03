import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import BlogPostItem from "@theme/BlogPostItem"
import BlogListPaginator from "@theme/BlogListPaginator"
import type { FrontMatter as OriginalFrontMatter } from "@theme/BlogPostPage"
import type { Props } from "@theme/BlogListPage"
import type { Tag } from "@theme/BlogTagsListPage"
import { ThemeClassNames } from "@docusaurus/theme-common"
import styles from "./styles.module.css"
import { ListItem } from "./ListItem"
import { Categories } from "./Categories"
import type { Props as CategoriesProps } from "./Categories"
import { Chips } from "./Chips"
import type { Props as ChipProps } from "./Chips"

export type FrontMatter = OriginalFrontMatter & { permalink?: string }

const categories: CategoriesProps["categories"] = [
  {
    title: "Benchmarks",
    description:
      "Reproducible benchmarks of QuestDB and other databases using open source benchmarking frameworks",
    url: "/blog/tags/benchmark",
  },
  {
    title: "Demos",
    description:
      "Demos involving QuestDB and other popular open source tools for a wide range of use cases",
    url: "/blog/tags/demo",
  },
  {
    title: "Tutorials",
    description:
      "Step-by-step tutorials and guides for developers to build applications with QuestDB",
    url: "/blog/tags/tutorial",
  },
  {
    title: "User Stories",
    description:
      "How QuestDB powers the core infrastructure of our users for time series data and real-time analytics",
    url: "/customers",
  },
]

const prioritizedTags: ChipProps["items"] = [
  "release",
  "engineering",
  "python",
  "grafana",
  "crypto",
  "sql",
  "kafka",
  "prometheus",
  "telegraf",
  "company",
  "community",
].map((tag) => ({
  name: tag,
  permalink: `/blog/tags/${tag.replace(/ /g, "-")}`,
}))

function BlogListPage(props: Props): JSX.Element {
  const { metadata, items } = props
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === "/"
  const isTagsPage =
    typeof ((metadata as unknown) as Tag).allTagsPath !== "undefined"
  const title = isBlogOnlyMode ? siteTitle : blogTitle

  const posts = [...items]
  const latestPost = metadata.page === 1 ? posts.shift() : undefined

  return (
    <Layout
      title={title}
      description={blogDescription}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: "blog_posts_list",
      }}
    >
      <main className={styles.root}>
        {latestPost !== undefined && (
          <div className={styles.latestPost}>
            <BlogPostItem
              key={latestPost.content.metadata.permalink}
              frontMatter={latestPost.content.frontMatter}
              metadata={{
                ...latestPost.content.metadata,
                permalink:
                  (latestPost.content.frontMatter as FrontMatter).permalink ??
                  latestPost.content.metadata.permalink,
                tags: [],
              }}
              truncated={latestPost.content.metadata.truncated}
            >
              {React.createElement(latestPost.content)}
            </BlogPostItem>
          </div>
        )}

        <h2>Popular topics</h2>
        {/* BlogListPage component is used for blog and for tags.
                When rendered for tags, then `metadata` includes tag, instead of blog data */}
        <Categories
          activeCategory={((metadata as unknown) as Tag).permalink}
          categories={categories}
        />
        <Chips
          activeChip={((metadata as unknown) as Tag).permalink}
          items={prioritizedTags}
        />

        <h2>
          {isTagsPage
            ? `Articles tagged with "${((metadata as unknown) as Tag).name}"`
            : "Blog Posts"}
        </h2>

        <div className={styles.posts}>
          {posts.map(({ content }, i) => (
            <ListItem
              key={content.metadata.permalink}
              content={content}
              belowFold={i > 5}
              forcedTag={
                isTagsPage
                  ? {
                      label: ((metadata as unknown) as Tag).name,
                      permalink: metadata.permalink,
                    }
          ))}
         </div>
        <BlogListPaginator metadata={metadata} />
      </main>
    </Layout>
  )
}

export default BlogListPage
