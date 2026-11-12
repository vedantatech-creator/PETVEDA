import { useEffect } from 'react';

/**
 * Enterprise SEO & OpenGraph / Structured Data Manager
 * Updates page title, meta description, keywords, canonical URLs,
 * OpenGraph tags, Twitter cards, and Schema.org JSON-LD structured data.
 */
export default function MetaSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://vedantatechnologies.in/images/products/automatic_pet_blowing_machine.jpeg',
  ogType = 'website',
  schemaData,
  breadcrumbs
}) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = `${title} | Vedanta Technologies`;
    }

    // Helper to get or create a meta tag
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Canonical URL
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 4. OpenGraph Tags
    if (title) {
      setMetaTag('property', 'og:title', `${title} | Vedanta Technologies`);
    }
    if (description) {
      setMetaTag('property', 'og:description', description);
    }
    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
    }
    setMetaTag('property', 'og:type', ogType);
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    if (title) {
      setMetaTag('name', 'twitter:title', `${title} | Vedanta Technologies`);
    }
    if (description) {
      setMetaTag('name', 'twitter:description', description);
    }
    if (ogImage) {
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 6. Structured Data (JSON-LD)
    const activeSchemas = [];

    // Add breadcrumb schema if breadcrumbs array is passed
    if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.path.startsWith('http') ? crumb.path : `https://vedantatechnologies.in${crumb.path}`
        }))
      };
      activeSchemas.push(breadcrumbListSchema);
    }

    // Add custom schema(s) if passed
    if (schemaData) {
      if (Array.isArray(schemaData)) {
        activeSchemas.push(...schemaData);
      } else {
        activeSchemas.push(schemaData);
      }
    }

    // Inject into head
    let scriptSchema = document.getElementById('page-schema-jsonld');
    if (activeSchemas.length > 0) {
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'page-schema-jsonld';
        scriptSchema.type = 'application/ld+json';
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(
        activeSchemas.length === 1 ? activeSchemas[0] : { '@context': 'https://schema.org', '@graph': activeSchemas }
      );
    } else if (scriptSchema) {
      scriptSchema.remove();
    }

    return () => {
      // Optional cleanup on route change
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData, breadcrumbs]);

  return null;
}
