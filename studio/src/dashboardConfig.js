export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aff70e5ad8ad10492de700",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xfo5tnti",
                  apiId: "76e22e62-f987-4961-8835-4c9b1aa82124",
                },
                {
                  buildHookId: "60aff70e4bdf4d10cc8841bd",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ag8wszbt",
                  apiId: "55749b9f-6430-4e36-baf4-05301ef5ac14",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ax-vasquez/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ag8wszbt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
