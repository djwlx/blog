Waline.init({
  el: '#waline',
  serverURL: 'https://waline.djwl.top',
  path: window.location.pathname,
  meta: ['nick', 'mail'],
  lang: 'zh-CN',
  dark: 'html[data-user-color-scheme="dark"]',
  pageSize: 10,
  emoji: [
    '//unpkg.com/@waline/emojis@1.4.0/tieba',
    '//unpkg.com/@waline/emojis@1.4.0/bilibili',
    '//unpkg.com/@waline/emojis@1.4.0/qq',
  ],
});
