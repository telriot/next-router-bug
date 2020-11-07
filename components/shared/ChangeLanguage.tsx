import React from "react";
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
				console.log(lng);
				console.log(router);

				if (lng === lang) return null;
				return (
					<Link href="/" locale={lng} key={`btn-change-${lng}`}>
						Change language
					</Link>
				);
			})}
		</>
	);
}
export default ChangeLanguage;
