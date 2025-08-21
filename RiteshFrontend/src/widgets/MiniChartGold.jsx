// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function Gold() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    // Cleanup first to avoid multiple widgets
    container.current.innerHTML = "";

    // Create container for the widget
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";

    // Create script element
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "OANDA:XAUUSD",
      "chartOnly": false,
      "dateRange": "12M",
      "noTimeScale": false,
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en",
      "width": "100%",
      "autosize": true,
      "height": "300"
    });

    // Append elements
    try {
      container.current.appendChild(widgetContainer);
      container.current.appendChild(script);
    } catch (error) {
      console.warn('Failed to append TradingView widget:', error);
    }

    // Add error handling for script loading
    script.onerror = () => {
      console.warn('TradingView MiniChartGold widget failed to load');
    };

    return () => {
      if (container.current) {
        container.current.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '300px' }}>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/OANDA-XAUUSD/?exchange=OANDA" rel="noopener nofollow" target="_blank">
          <span className="blue-text">XAUUSD chart by TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(Gold);