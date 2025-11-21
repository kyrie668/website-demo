import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ENJSON } from './en';
import { CNJSON } from './cn';
import { ZHTWJSON } from './zh-TW';

// 获取浏览器的默认语言
const browserLanguage = navigator.language; // 获取浏览器语言，如 'en' 或 'zh-TW'

// 根据浏览器语言设置默认语言
let defaultLanguage = 'en';
if (browserLanguage.startsWith('zh')) {
  // 如果是繁体中文地区（如 zh-TW, zh-HK），使用繁体中文
  if (browserLanguage.includes('TW') || browserLanguage.includes('HK')) {
    defaultLanguage = 'zh-TW';
  } else {
    // 简体中文使用繁体中文（因为项目只支持繁体中文和英文）
    defaultLanguage = 'zh-TW';
  }
}

const resources = {
  en: {
    translation: ENJSON,
  },
  'zh-TW': {
    translation: ZHTWJSON,
  },
  // 保留简体中文作为兼容，映射到繁体中文
  zh: {
    translation: ZHTWJSON,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage, // 使用浏览器的语言，默认为英文
  fallbackLng: 'en', // 如果当前语言资源不可用，则回退到英文
  interpolation: {
    escapeValue: false, // React 已经处理了 XSS 安全性，不需要额外转义
  },
});

export default i18n;
