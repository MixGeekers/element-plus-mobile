import type { Component } from 'vue'

import GitHubIcon from '~icons/ri/github-fill'

export const useSocialLinks = () => {
  return [
    {
      link: 'https://github.com/MixGeekers/element-plus-mobile',
      icon: GitHubIcon as Component,
      text: 'GitHub',
    },
  ]
}
