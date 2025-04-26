
import { useLanguage } from '@/lib/language-context';
import { translations, TranslationKey } from '@/lib/translations';

type TranslationParams = {
  [key: string]: string | number;
};

export function useTranslation() {
  const { currentLanguage } = useLanguage();
  
  const t = (key: TranslationKey, params?: TranslationParams): string => {
    let translation = translations[currentLanguage.code][key] || translations.en[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
      });
    }
    
    return translation;
  };
  
  return { t };
}
