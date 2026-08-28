"use client";

import { useEffect } from "react";

export const BOT_URL = "https://motorsbot.akaayis.com";
// export const BOT_URL = "http://localhost:3002";

export default function BotScript() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (document.getElementById("arena-chat-container")) return;

        // ── Container ────────────────────────────────────────────────────────────
        const container = document.createElement("div");
        container.id = "arena-chat-container";

        let isOpen = false;
        let isHint = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        const updateContainerStyle = () => {
            if (isOpen) {
                Object.assign(container.style, {
                    width: "420px",
                    maxWidth: "calc(100vw - 16px)",
                    height: "720px",
                    maxHeight: "calc(100vh - 16px)",
                    bottom: "0px",
                    right: "0px",
                    pointerEvents: "auto",
                });
            } else if (isHint) {
                Object.assign(container.style, {
                    width: "360px",
                    maxWidth: "calc(100vw - 16px)",
                    height: "185px",
                    maxHeight: "185px",
                    bottom: "0px",
                    right: "0px",
                    pointerEvents: "auto",
                });
            } else {
                Object.assign(container.style, {
                    width: "100px",
                    maxWidth: "100px",
                    height: "100px",
                    maxHeight: "100px",
                    bottom: "0px",
                    right: "0px",
                    pointerEvents: "auto",
                });
            }
        };

       Object.assign(container.style, {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    width: "100px",
    maxWidth: "100px",
    height: "100px",
    maxHeight: "100px",
    zIndex: "999999",

    border: "none",
    outline: "none",
    boxShadow: "none",

    overflow: "visible",

    transition:
        "width 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.25s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1)",

    background: "transparent",
    backgroundColor: "transparent",
});

        // ── Iframe ───────────────────────────────────────────────────────────────
        const iframe = document.createElement("iframe");
        iframe.id = "arena-chat-iframe";
        iframe.src = BOT_URL + "/";

        Object.assign(iframe.style, {
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            backgroundColor: "transparent",
        });
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("frameBorder", "0");
        
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("allow", "accelerometer; autoplay; camera; gyroscope; microphone;");

        container.appendChild(iframe);
        document.body.appendChild(container);

        // ── Mouse & Pointer tracking ─────────────────────────────────────────────
        const handleMouseMove = (e: MouseEvent) => {
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        };

        const handlePointerDown = (e: PointerEvent) => {
            if (isOpen) return;

            const distFromBottom = window.innerHeight - e.clientY;
            const distFromRight = window.innerWidth - e.clientX;

            // Check if user clicked the "x" dismiss button on hint tooltip
            const isDismissBtn = isHint && distFromBottom >= 115 && distFromBottom <= 165 && distFromRight >= 25 && distFromRight <= 65;

            if (!isDismissBtn) {
                // User clicked on the bot button or hint bubble -> open chat
                isOpen = true;
                isHint = false;
                updateContainerStyle();
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        container.addEventListener("pointerdown", handlePointerDown);

        // ── Focus / Blur detection fallback for iframe clicks ────────────────────
        const handleWindowBlur = () => {
            if (isOpen) return;
            setTimeout(() => {
                if (document.activeElement === iframe) {
                    const distFromBottom = window.innerHeight - lastMouseY;
                    const distFromRight = window.innerWidth - lastMouseX;
                    const isDismissBtn = isHint && distFromBottom >= 115 && distFromBottom <= 165 && distFromRight >= 25 && distFromRight <= 65;

                    if (!isDismissBtn) {
                        isOpen = true;
                        isHint = false;
                        updateContainerStyle();
                    }
                }
            }, 50);
        };

        window.addEventListener("blur", handleWindowBlur);

        // ── postMessage listener ──────────────────────────────────────────────────
        function handleMessage(event: MessageEvent) {
            const data = event.data;
            if (!data || typeof data !== "object") return;

            if (data.action === "open") {
                isOpen = true;
                isHint = false;
                updateContainerStyle();
            } else if (data.action === "minimize" || data.action === "close") {
                isOpen = false;
                updateContainerStyle();
                try {
                    iframe.blur();
                    window.focus();
                } catch { }
            } else if (data.action === "hint") {
                if (!isOpen) {
                    isHint = true;
                    updateContainerStyle();
                }
            } else if (data.action === "unhint") {
                isHint = false;
                if (!isOpen) {
                    updateContainerStyle();
                }
            }
        }

        window.addEventListener("message", handleMessage);

        // ── Cleanup on unmount ───────────────────────────────────────────────────
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("blur", handleWindowBlur);
            window.removeEventListener("message", handleMessage);
            document.getElementById("arena-chat-container")?.remove();
        };
    }, []);

    return null;
}
