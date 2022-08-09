export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f215d4ce6c8005aa640756',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6rqh9qvs',
                  apiId: 'f6770b39-d7da-41e6-a22e-e09ee791e710'
                },
                {
                  buildHookId: '62f215d4c4b89405f753537a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zaftyt2a',
                  apiId: 'f0f8b5da-0edb-4244-8a0d-e89951674fa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/glenfish/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zaftyt2a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
