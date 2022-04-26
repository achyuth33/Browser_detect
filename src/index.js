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
  console.log(browser)

  let browser_name = ""
  if(browser.parsedResult.browser.name === "Chrome"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957428/crome_bfyobr.webp" className="top-browser-icon" />
  }else if(browser.parsedResult.browser.name === "Firefox"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957370/Mozilla_Firefox_ajzdom.png" className="top-browser-icon" />
  }else if(browser.parsedResult.browser.name === "Microsoft Edge"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650960073/microsoft_eijcgv.png" className="top-browser-icon" />
  }else if(browser.parsedResult.browser.name === "Opera"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957370/Mozilla_Firefox_ajzdom.png" className="top-browser-icon" />
  }else if(browser.parsedResult.browser.name === "Safari"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957405/safari_ly9z3w.png" className="top-browser-icon" />
  }else if(browser.parsedResult.browser.name === "Explorer"){
    browser_name = <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957497/Vector_fbnw1v.png" className="top-browser-icon" />
  }

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
                : "I don't know!"}  
                */}
            <span style={{marginRight:"10px"}}>You seem to be using</span>  
              {browser_name}
            <span style={{marginLeft:"10px"}}>browser</span>
            </div> 
            <div>
              <p className="para" style={{marginBottom: "50px"}}>You are using a older version which may not give you optimal experience.</p>
            </div>
            <div>
              <p className="para">Please use one of these options to have the best experience and optimal performance.</p>
              <div className="icons-container">
                <div className="icon-container">
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957428/crome_bfyobr.webp" className="browser-icon" />
                  <label className="icon-name">Google chrome</label>
                  <span className="icon-version">Version 10.2+</span>
                </div>

                <div className="icon-container">
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957405/safari_ly9z3w.png" className="browser-icon" />
                  <label className="icon-name">Safari</label>
                  <span className="icon-version">Version 15.2+</span>
                </div>

                <div className="icon-container">
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957497/Vector_fbnw1v.png" className="browser-icon" />
                  <label className="icon-name">Explorer</label>
                  <span className="icon-version">Version 11</span>
                </div>

                <div className="icon-container">
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650960073/microsoft_eijcgv.png" className="browser-icon" />
                  <label className="icon-name">Microsoft Edge</label>
                  <span className="icon-version">Version 97.0.1072.62</span>
                </div>

                <div className="icon-container">
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650957370/Mozilla_Firefox_ajzdom.png" className="browser-icon" />
                  <label className="icon-name">Mozilla firefox</label>
                  <span className="icon-version">Version 72.0.2</span>
                </div>

                <div className="icon-container" >
                  <img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1650959987/opera_qems1q.png" className="browser-icon" />
                  <label className="icon-name">Opera</label>
                  <span className="icon-version">Version 60.X</span>
                </div>
              </div>
            </div>       
      </div>
    </div>
  );
};

render(<DetectBrowsers />, document.querySelector("#root"));