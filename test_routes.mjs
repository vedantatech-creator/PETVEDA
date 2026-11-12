import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom'
});

const routesToTest = [
  '/',
  '/machines',
  '/machine/vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity',
  '/machine/VT-BLOW-A4',
  '/machine/vedanta-v-blow-a2-fully-automatic-pet-blow-moulding-machine-2-cavity',
  '/machine/vedanta-v-turnkey-60bpm-complete-mineral-water-bottling-plant-60-bpm',
  '/turnkey',
  '/plant-layout',
  '/calculator',
  '/roi',
  '/compliance',
  '/factory',
  '/guides',
  '/contact'
];

async function runTests() {
  console.log('--- Testing Route Rendering via Vite SSR & React DOM ---');
  
  const { default: Home } = await vite.ssrLoadModule('/src/pages/Home.jsx');
  const { default: MachinesPage } = await vite.ssrLoadModule('/src/pages/MachinesPage.jsx');
  const { default: ProductDetailPage } = await vite.ssrLoadModule('/src/pages/ProductDetailPage.jsx');
  const { default: TurnkeyPage } = await vite.ssrLoadModule('/src/pages/TurnkeyPage.jsx');
  const { default: PlantLayoutPage } = await vite.ssrLoadModule('/src/pages/PlantLayoutPage.jsx');
  const { default: CalculatorPage } = await vite.ssrLoadModule('/src/pages/CalculatorPage.jsx');
  const { default: RoiPage } = await vite.ssrLoadModule('/src/pages/RoiPage.jsx');
  const { default: CompliancePage } = await vite.ssrLoadModule('/src/pages/CompliancePage.jsx');
  const { default: FactoryPage } = await vite.ssrLoadModule('/src/pages/FactoryPage.jsx');
  const { default: BuyerGuidesPage } = await vite.ssrLoadModule('/src/pages/BuyerGuidesPage.jsx');
  const { default: ContactPage } = await vite.ssrLoadModule('/src/pages/ContactPage.jsx');
  const { default: Navbar } = await vite.ssrLoadModule('/src/components/Navbar.jsx');
  const { default: Footer } = await vite.ssrLoadModule('/src/components/Footer.jsx');
  const { default: LoadingScreen } = await vite.ssrLoadModule('/src/components/LoadingScreen.jsx');
  const { default: QuoteModal } = await vite.ssrLoadModule('/src/components/QuoteModal.jsx');

  let passed = 0;
  let failed = 0;

  for (const route of routesToTest) {
    try {
      const appJsx = React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(
          'div',
          null,
          React.createElement(Navbar, { onOpenQuote: () => {} }),
          React.createElement(
            Routes,
            null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/machines', element: React.createElement(MachinesPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/machine/:modelCode', element: React.createElement(ProductDetailPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/turnkey', element: React.createElement(TurnkeyPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/plant-layout', element: React.createElement(PlantLayoutPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/calculator', element: React.createElement(CalculatorPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/roi', element: React.createElement(RoiPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/compliance', element: React.createElement(CompliancePage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/factory', element: React.createElement(FactoryPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/guides', element: React.createElement(BuyerGuidesPage, { onOpenQuote: () => {} }) }),
            React.createElement(Route, { path: '/contact', element: React.createElement(ContactPage, null) })
          ),
          React.createElement(Footer, { onOpenQuote: () => {} })
        )
      );

      const html = renderToString(appJsx);
      if (!html || html.length < 100) {
        throw new Error(`Output too short: ${html?.length || 0} bytes`);
      }
      console.log(`PASS [${route}] rendered ${html.length} bytes`);
      passed++;
    } catch (err) {
      console.error(`FAIL [${route}]:`, err.message);
      failed++;
    }
  }

  // Also test LoadingScreen
  try {
    const loadingHtml = renderToString(React.createElement(LoadingScreen, { onComplete: () => {} }));
    console.log(`PASS [LoadingScreen] rendered ${loadingHtml.length} bytes`);
    passed++;
  } catch (err) {
    console.error(`FAIL [LoadingScreen]:`, err.message);
    failed++;
  }

  // Also test QuoteModal
  try {
    const quoteHtml = renderToString(React.createElement(QuoteModal, { isOpen: true, onClose: () => {}, defaultModel: 'VT-BLOW-A4' }));
    console.log(`PASS [QuoteModal (open)] rendered ${quoteHtml.length} bytes`);
    passed++;
  } catch (err) {
    console.error(`FAIL [QuoteModal]:`, err.message);
    failed++;
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed.`);
  await vite.close();
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
