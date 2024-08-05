import "server-only";

const dictionaries = {
	en: () => import("../../dictionaries/en.json").then((module) => module.default),
	nl: () => import("../../dictionaries/nl.json").then((module) => module.default)
};

export const getDictionary = async (locale) => {
	if (!(locale in dictionaries)) {
		locale = "en";
	}
	return dictionaries[locale]();
};
