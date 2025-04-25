
import { useLanguage } from '@/lib/language-context';
import { translations, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  const { currentLanguage } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return translations[currentLanguage.code][key] || translations.en[key] || key;
  };
  
  return { t };
}
