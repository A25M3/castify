
import { useLanguage as useLanguageContext } from '@/lib/language-context';
import { useEffect } from 'react';

/**
 * Custom hook for accessing language context
 * This hook provides access to the current language and functions to change it
 * @returns The language context with currentLanguage and setLanguage function
 */
export const useLanguage = () => {
  const languageContext = useLanguageContext();
  
  // Make sure document direction is always up to date
  useEffect(() => {
    if (document.documentElement.dir !== languageContext.currentLanguage.direction) {
      document.documentElement.dir = languageContext.currentLanguage.direction;
      document.documentElement.lang = languageContext.currentLanguage.code;
    }
    
    // Apply RTL-specific spacing adjustments
    if (languageContext.currentLanguage.direction === 'rtl') {
      document.documentElement.classList.add('rtl-spacing');
    } else {
      document.documentElement.classList.remove('rtl-spacing');
    }
  }, [languageContext.currentLanguage]);
  
  return languageContext;
};
