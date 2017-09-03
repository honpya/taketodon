object false

node(:name)             { Setting.site_title }
node(:short_name)       { Setting.site_title }
node(:description)      { strip_tags(Setting.site_description.presence || I18n.t('about.about_mastodon_html')) }
node(:icons)            { [
                            { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' density: '4.0' },
                            { src: '/android-chrome-144x144.png', sizes: '144x144', type: 'image/png' density: '3.0' },
                            { src: '/android-chrome-96x96.png', sizes: '96x96', type: 'image/png' density: '2.0' },
                            { src: '/android-chrome-72x72.png', sizes: '72x72', type: 'image/png' density: '1.5' },
                            { src: '/android-chrome-48x48.png', sizes: '48x48', type: 'image/png' density: '1.0' },
                            { src: '/android-chrome-36x36.png', sizes: '36x36', type: 'image/png' density: '0.75' }
                        ] }
node(:theme_color)      { '#282c37' }
node(:background_color) { '#d9e1e8' }
node(:display)          { 'standalone' }
node(:start_url)        { '/web/timelines/home' }
node(:scope)            { root_url }
