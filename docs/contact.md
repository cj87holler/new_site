---
layout: page 
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/17093384?s=96&v=4',
    name: 'C.J. Holler',
    title: 'Sr. Technical Product Manager',
    links: [
      { icon: 'github', link: 'https://github.com/cj87holler' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/c-j-holler-04b0535b/' },  
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' }, link: 'mailto:cj87holler@gmail.com'},
    ]
  },
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Let's Connect
    </template>
    <template #lead>
      I am a Digital Product Manager based in Dallas, Texas. If you are in the DFW area, I'm always up for a coffee chat to talk Product & Tech. If you are elsewhere, drop me a note through one of the channels below and we will find another way to connect!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
 