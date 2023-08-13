
import React, { useEffect, useRef } from 'react';
import '../Styles/Trade.css'
let tvScriptLoadingPromise;

export default function Trade() {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_c0f83') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "CRYPTO:ETHUSD",
                        interval: "D",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "1",
                        locale: "in",
                        enable_publishing: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_c0f83"
                    });
                }
            }
        },
        []
    );

    return (
        <div>
            <div id='tradingview_c0f83' />
           
        </div>

    );
}
