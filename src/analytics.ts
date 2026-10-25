/**
 * Google Analytics 4 – načítá se až po souhlasu s analytickými cookies.
 * ID měření (G-XXXXXXXXXX) se nastavuje v content.ts (meta.gaMeasurementId).
 */

import { siteContent } from './content';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const CONSENT_KEY = 'duse_cookies_consent';
let loaded = false;

const measurementId = () => (siteContent.meta.gaMeasurementId || '').trim();

export const hasAnalyticsConsent = (): boolean => {
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    return saved ? Boolean(JSON.parse(saved).analytics) : false;
  } catch {
    return false;
  }
};

const loadGa = (id: string) => {
  if (loaded) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  // page_view posíláme ručně při každé změně adresy (web je jednostránková aplikace)
  window.gtag('config', id, { send_page_view: false, anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
};

/** Zavolat po změně souhlasu s cookies (a při startu aplikace). */
export const syncAnalyticsConsent = (): void => {
  const id = measurementId();
  if (!id) return;

  if (hasAnalyticsConsent()) {
    window[`ga-disable-${id}`] = false;
    loadGa(id);
  } else {
    // souhlas odvolán – zastavit měření
    window[`ga-disable-${id}`] = true;
  }
};

/** Odeslat zobrazení stránky (jen pokud je souhlas a ID nastaveno). */
export const trackPageView = (path: string): void => {
  const id = measurementId();
  if (!id || !hasAnalyticsConsent()) return;
  loadGa(id);
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
};
