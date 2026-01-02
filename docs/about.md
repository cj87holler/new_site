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
    name: 'Evan You',
    title: 'Sr. Technical Product Manager',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
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
      I am a Digital Product Manager based in Dallas, Texas. 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
 