import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      height="100%"
      width="100%"
      viewBox="0 0 400 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="50" y="6" width="100%" height="20" />
      <rect x="8" y="6" width="100%" height="20" />
      <rect x="50" y="30" width="100%" height="20" />
      <rect x="8" y="30" width="100%" height="20" />
      <rect x="50" y="55" width="100%" height="20" />
      <rect x="8" y="55" width="100%" height="20" />
    </ContentLoader>
  );
};
