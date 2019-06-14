export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d03deb28cdf1599e38b42fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d1ef3mdp',
                  apiId: '5e971bcd-2d54-45bd-b1a1-7728e083ad78'
                },
                {
                  buildHookId: '5d03deb390be7ea25e88ce3a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3ohqmrtq',
                  apiId: 'f93edaba-dc10-45a6-b897-9db58428533d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihai-cloudbrick/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-3ohqmrtq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
