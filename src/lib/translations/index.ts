
import en from './en';
// import es from './es';
// import fr from './fr';
// import de from './de';
// import it from './it';
// import pt from './pt';
// import ja from './ja';
// import ko from './ko';
// import zh from './zh';
// import ar from './ar';

export const translations = {
  en,
  // es,
  // fr,
  // de,
  // it,
  // pt,
  // ja,
  // ko,
  // zh,
  // ar,
} as const;

export type TranslationKey = keyof typeof translations.en;
