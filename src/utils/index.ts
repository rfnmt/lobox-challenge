const MOBILE_SIZE = "(max-width: 767px)";

export const isMobileSize = () => window.matchMedia(MOBILE_SIZE).matches;
