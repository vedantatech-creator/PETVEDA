import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top on actual route/page changes, never on query parameter / filter changes
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      const elem = document.getElementById(hash.replace('#', ''));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}
