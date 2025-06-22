"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

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
  chatbaseId = "qyKLYnzlgQercOJJRrA8j",
  buttonText = "Tanya CS",
  greeting = "Hi! What can I help you with?",
  chatHeight = "500px",
  chatWidth = "350px",
  buttonBottom = "20px",
  buttonRight = "20px",
}) => {
  const { theme, resolvedTheme } = useTheme();

  const isDarkMode = theme === "dark" || resolvedTheme === "dark";

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
      buttonBackground: isDarkMode ? "#3B82F6" : "#4CAF50",
      buttonIconColor: "#ffffff",
      buttonBottom,
      buttonRight,
      roundedCorners: true,
      greeting,
      awaysAvailable: true,
      chatHeight,
      chatWidth,
      fontSize: "16px",
      chatBackground: isDarkMode ? "#1F2937" : "#ffffff",
      chatTextColor: isDarkMode ? "#ffffff" : "#000000",
      inputBackground: isDarkMode ? "#374151" : "#f0f0f0",
      primaryColor: isDarkMode ? "#3B82F6" : "#4CAF50",
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
  }, [isDarkMode, chatbaseId, buttonText, greeting, chatHeight, chatWidth, buttonBottom, buttonRight]);

  return null;
};

export default ChatbaseWidget;
