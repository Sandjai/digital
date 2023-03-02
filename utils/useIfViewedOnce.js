import React, { useEffect, useState } from "react";

const useIfViewedOnce = ({ inView, setVisible }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted && inView) {
      setVisible(inView);
      setIsMounted(true);
    }
  }, [inView]);
};

export default useIfViewedOnce;
