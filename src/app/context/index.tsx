export enum LANGUAGE {
  DE = "german",
  EN = "english",
  RUS = "russian",
}

export interface LanguageParams {
  params: { lang: string };
}

export const getLanguage = (lang: string | string[] | undefined) => {
  switch (lang) {
    case "en":
      return LANGUAGE.EN;
    case "rus":
      return LANGUAGE.RUS;
    default:
      return LANGUAGE.DE;
  }
};

export const mapLanguageName = (lang: LANGUAGE) => {
  switch (lang) {
    case LANGUAGE.EN:
      return "English";
    case LANGUAGE.RUS:
      return "Русский";
    default:
      return "Deutsch";
  }
};

export function generateStaticParams() {
  const languages = ["en", "de", "rus"];

  // Generate a params object for each language
  const paramsArray = languages.map((lang) => ({
    lang: `${lang}`,
  }));

  return paramsArray;
}
