"use client";

import { useEffect } from "react";

interface ChatbaseConfig {
  buttonText: string;
  buttonBackground: string;
  buttonIconColor: string;
  buttonBottom: string;
  buttonRight: string;
  roundedCorners: boolean;
  greeting: string;
  awaysAvailable: boolean;
  chatHeight: string;
  chatWidth: string;
  fontSize: string;
  chatBackground: string;
  chatTextColor: string;
  inputBackground: string;
  primaryColor: string;
  allowClose: boolean;
}

interface ChatbaseWidgetProps {
  chatbaseId?: string;
  buttonText?: string;
  greeting?: string;
  chatHeight?: string;
  chatWidth?: string;
  buttonBottom?: string;
  buttonRight?: string;
}

declare global {
  interface Window {
    chatbaseConfig: ChatbaseConfig;
    chatbase: ((action: string, config: ChatbaseConfig) => void) | undefined;
  }
}

const ChatbaseWidget: React.FC<ChatbaseWidgetProps> = ({
  chatbaseId = "_xhD_xOFMum-m1AFgfenP",
  buttonText = "Tanya CS",
  greeting = "Hi! What can I help you with?",
  chatHeight = "500px",
  chatWidth = "350px",
  buttonBottom = "20px",
  buttonRight = "20px",
}) => {
  useEffect(() => {
    const existingScript = document.getElementById(chatbaseId);
    if (existingScript) {
      existingScript.remove();
    }

    if (window.chatbase && typeof window.chatbase === "function") {
      window.chatbase = undefined;
    }

    window.chatbaseConfig = {
      buttonText,
      buttonBackground: "hsl(var(--primary))",
      buttonIconColor: "hsl(var(--primary-foreground))",
      buttonBottom,
      buttonRight,
      roundedCorners: true,
      greeting,
      awaysAvailable: true,
      chatHeight,
      chatWidth,
      fontSize: "16px",
      chatBackground: "hsl(var(--card))",
      chatTextColor: "hsl(var(--card-foreground))",
      inputBackground: "hsl(var(--muted))",
      primaryColor: "hsl(var(--primary))",
      allowClose: true,
    };

    const initChatbase = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = chatbaseId;
      script.setAttribute("data-domain", "www.chatbase.co");
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        setTimeout(() => {
          if (window.chatbase && typeof window.chatbase === "function") {
            window.chatbase("updateConfig", window.chatbaseConfig);
          }
        }, 1000);
      };

      script.onerror = () => {
        console.error("Failed to load Chatbase script");
      };
    };

    if (document.readyState === "complete") {
      initChatbase();
    } else {
      const handleLoad = () => {
        initChatbase();
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }

    return () => {
      const scriptToRemove = document.getElementById(chatbaseId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [chatbaseId, buttonText, greeting, chatHeight, chatWidth, buttonBottom, buttonRight]);

  return null;
};

export default ChatbaseWidget;
