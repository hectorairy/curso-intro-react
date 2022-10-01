import React from "react";

export const TodoHeader = ({ children, loading }) => {
  const elements = React.Children.toArray(children);
  return (
    <>{elements.map((element) => React.cloneElement(element, { loading }))}</>
  );
};
