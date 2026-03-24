// Import tab contents using Vite's ?raw import
import githubHtml from '../tabs/github.html?raw';
import cloudflareHtml from '../tabs/cloudflare.html?raw';
import telegramHtml from '../tabs/telegram.html?raw';
import toolHtml from '../tabs/tool.html?raw';
import lobsterHtml from '../tabs/lobster.html?raw';
import updateHtml from '../tabs/update.html?raw';
import welcomeHtml from '../tabs/welcome.html?raw';

export const tabContents: Record<string, string> = {
  'tab-welcome': welcomeHtml,
  'tab-github': githubHtml,
  'tab-cloudflare': cloudflareHtml,
  'tab-telegram': telegramHtml,
  'tab-tool': toolHtml,
  'tab-lobster': lobsterHtml,
  'tab-update': updateHtml
};

export const tabTitles: Record<string, string> = {
  'tab-welcome': '導覽總覽',
  'tab-github': 'GitHub 設定',
  'tab-cloudflare': 'Cloudflare 設定',
  'tab-telegram': 'Telegram 設定',
  'tab-tool': 'Tool 設定',
  'tab-lobster': '小龍蝦自我介紹',
  'tab-update': '更新龍蝦大腦'
};
