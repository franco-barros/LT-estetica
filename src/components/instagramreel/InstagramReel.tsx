"use client";
import React, { useEffect } from "react";
import styles from "../../styles/InstagramReel.module.css";

interface InstagramReelProps {
  url: string;
  width?: number | string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

const InstagramReel: React.FC<InstagramReelProps> = ({
  url,
  width = "100%",
}) => {
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      } else {
        console.warn("Instagram embed script not loaded yet.");
      }
    };

    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        setTimeout(processEmbeds, 1500);
      };
      document.body.appendChild(script);
    } else {
      setTimeout(processEmbeds, 1500);
    }
  }, [url]);

  return (
    <div className={styles.instagramReel}>
      <h2>Instagram Reel</h2>
      <div className={styles.embedContainer}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            margin: "1px auto",
            maxWidth: width,
            width: "calc(100% - 2px)",
            padding: 0,
          }}
        ></blockquote>
      </div>
      <p>¡Mira nuestro último Reel!</p>
    </div>
  );
};

export default InstagramReel;
