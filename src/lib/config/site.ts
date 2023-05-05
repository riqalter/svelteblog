import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'riq.my.id',
  title: 'riqblog',
  subtitle: 'riqs experiment',
  lang: 'en-US',
  description: 'Powered by SvelteKit',
  author: {
    avatar: '/assets/mefr.png',
    name: 'Mikail Thoriq',
    status: '👀',
    bio: 'a tech enthusiast'
  },
  themeColor: '#3D4451'
}
