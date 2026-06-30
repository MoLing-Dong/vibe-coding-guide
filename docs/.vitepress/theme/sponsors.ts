export type SponsorTier = 'platinum' | 'gold' | 'silver'

export interface SponsorItem {
    name: string
    href: string
    description: string
}

export interface SponsorGroup {
    tier: SponsorTier
    items: SponsorItem[]
}

const sponsorGroups = {
    zh: [
        {
            tier: 'platinum',
            items: [
                {
                    name: 'SubAPI',
                    href: 'https://subapi.stjhub.com/',
                    description: '稳定的 API 中转服务，适合统一接入、转发与管理。'
                },
            ]
        },
        { tier: 'gold', items: [] },
        { tier: 'silver', items: [] }
    ],
    en: [
        {
            tier: 'platinum',
            items: [
                {
                    name: 'SubAPI Relay Gateway',
                    href: 'https://subapi.stjhub.com/',
                    description: 'A stable API relay service for unified access, forwarding, and management.'
                }
            ]
        },
        { tier: 'gold', items: [] },
        { tier: 'silver', items: [] }
    ]
} satisfies Record<'zh' | 'en', SponsorGroup[]>

export function getSponsorGroups(localeIndex?: string, mode: 'home' | 'aside' = 'home') {
    const locale = localeIndex?.startsWith('en') ? 'en' : 'zh'
    const groups = sponsorGroups[locale]
    const visible = mode === 'aside' ? groups.filter((group) => group.tier === 'platinum') : groups

    return visible.filter((group) => group.items.length > 0)
}
