---
layout: page
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
      { icon: 'email', link: 'mailto:cj87holler@gmail.com'},
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About Me
    </template>
    <template #lead>
      I am a Digital Product Manager based in Dallas, Texas. If you are in the DFW area, I'm always up for a coffee chat to talk Product & Tech. If you are elsewhere, drop me a note through one of the channels below and we will find another way to connect!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
 