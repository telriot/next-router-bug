
Hi everyone!

I have been having trouble switching languages through the new 10.0.1 routing features as the ServerRouter return object from useRouter returns undefined parameters for the locales even though the next-config.js file has been set up for i18n.

next-config.js:

    module.exports = {
	    i18n: {
		    locales: ["en", "ja-JP"],
		    defaultLocale: "en",
	    },
    };


This is the response I get when logging router from useRouter():

    ServerRouter {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '',
    events: undefined,
    isFallback: false,
    locale: undefined,
    locales: undefined,
    defaultLocale: undefined
}

and here is the component I am trying to use to switch languages:

    import Link from "next/link";
    import useTranslation from "next-translate/useTranslation";
    import i18nConfig from "../../i18n.json";
    import { useRouter } from "next/router";
    const { locales } = i18nConfig;

    function ChangeLanguage() {
	const { t, lang } = useTranslation();
	const router = useRouter();
	
    return (
		<>
			{locales.map((lng) => {
				if (lng === lang) return null;
				return (
					<Link href="/" locale={lng} key={`btn-change-${lng}`}>
						{t(`layout:language-name-${lng}`)}
					</Link>
				);
			})}
		</>
	    );
    }

I tried both using Link and useRouter with the same results.
Before thinking about a bug I was wondering if someone had similar experiences.

Thank you for your time and have a great day everybody!