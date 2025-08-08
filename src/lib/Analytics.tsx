import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!MEASUREMENT_ID) {
    console.warn("Missing GA measurement ID");
    return;
  }
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageview = (url: string) => {
  if (!MEASUREMENT_ID) return;
  ReactGA.send({ hitType: "pageview", page: url });
};
