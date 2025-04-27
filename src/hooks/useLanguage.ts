
import { useLanguage as useLanguageContext } from '@/lib/language-context';

/**
 * Custom hook for accessing language context
 * This hook provides access to the current language and functions to change it
 * @returns The language context with currentLanguage and setLanguage function
 */
export const useLanguage = () => {
  const languageContext = useLanguageContext();
  
  // Make sure document direction is always up to date
  if (document.documentElement.dir !== languageContext.currentLanguage.direction) {
    document.documentElement.dir = languageContext.currentLanguage.direction;
    document.documentElement.lang = languageContext.currentLanguage.code;
  }
  
  return languageContext;
};
