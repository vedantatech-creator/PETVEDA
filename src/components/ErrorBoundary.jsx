import React from 'react';
import { AlertTriangle, RefreshCw, MessageSquare } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Vedanta Application ErrorBoundary caught an unhandled exception:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5 shadow-2xs">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-3">
            Temporary Display Notice
          </span>

          <h2 className="text-2xl font-bold text-slate-950 tracking-tight mb-2">
            Something Interrupted This View
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            A temporary component error occurred while rendering this section. Our factory engineers have been notified. You can reload the page or connect directly with our engineering desk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-5 rounded-full transition-all shadow-2xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Page</span>
            </button>

            <a
              href="https://wa.me/918850848971?text=Hello%20Vedanta%20Technologies,%20I%20encountered%20an%20application%20error%20while%20viewing%20the%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs py-2.5 px-5 rounded-full border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
