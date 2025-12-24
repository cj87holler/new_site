import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "C.J. Holler",
  description: "Digital Product Leader",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },  
      { text: 'About', link: '/about'}, 
      { text: 'Work', link: '/work' },
    //{ text: 'Examples', link: '/markdown-examples' }, 
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cj87holler' }, 
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/cj-holler/' }
    ]
  }
})
