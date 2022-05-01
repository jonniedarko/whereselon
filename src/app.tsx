import * as React from "react";
import { createRoot } from "react-dom/client";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./app.css";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
  return (
    <section>
      <div className="header">
        <img src="img/elon.png" alt="logo" />
        <h1 className="xtop-heading">Where is Elon?</h1>
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ElonJet"
        noHeader
        theme={isDarkMode ? "dark" : "light"}
      />
    </section>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
