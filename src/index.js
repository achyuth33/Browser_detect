import React from "react";
import { render } from "react-dom";
import Bowser from "bowser";

import './index.css';

const DetectBrowsers = () => {
  const isChrome =!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  const isFirefox = typeof InstallTrigger !== "undefined";

  const isIE = false || !!document.documentMode;

  // this is no longer working
  // var isEdge = !isIE && !!window.StyleMedia;

  const browser = Bowser.getParser(window.navigator.userAgent);

  return (
    <div className="container1">
        <div className="card">
            <div className="header">
       {/* {isChrome
        ? "Yes, it is Chrome!"
        : isFirefox
        ? "Firefox!"
        : isIE
        ? "IE"
        : "I don't know!"} */}

      {"You seem to be using  " + 
        browser.parsedResult.browser.name +" "+ "browser"}
      
               
        <div>
            <p className="para">You are using a older version which may not give you optimal experience.</p>
        </div>
        
        </div> 
        </div>
    </div>
  );
};

render(<DetectBrowsers />, document.querySelector("#root"));
