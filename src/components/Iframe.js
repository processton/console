import * as React from 'react'
import { useRef, useState } from "react"
import { getPageTitle, getRequiredIcons } from '../utils/layour_helper';
import LoadingScreen from './LoadingScreen';

const Iframe = ({ url, setUrl }) => {
  
  const [iframeHeight, setIframeHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const IFrameRef = useRef();

  const handleIfrmeLoad = (e) => {
    console.log(e);
    setIsLoading(false);
  };

  const handlePayload = (payload) => {
    switch (payload.type) {
      case "height":
        setIframeHeight(payload.value);
        break;
      case "url-update":
        setUrl(payload.value);
        break;
      default:
        console.log("undeined payload to process");
        console.dir(payload);
        break;
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("message", function (event) {
      const data = event.data;

      if (data.source === "console-event") {
        console.log("Message received from the child: ", data.payload); // Message received from child
        handlePayload(data.payload);
      }
    });
  }

  return (
    <>
      {!isLoading ? (
        <iframe
          src={url}
          ref={IFrameRef}
          onLoad={handleIfrmeLoad}
          className="w-full min-h-contentare"
          style={{
            height: `${iframeHeight}px`,
          }}
        />
      ) : (
        <LoadingScreen moduleName="Application" pageName="Application" />
      )}
    </>
  );
};

export default Iframe;