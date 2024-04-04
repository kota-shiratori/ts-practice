import { ReactNode } from "react";

//children
const Child = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Child</h2>
      {children}
    </div>
  );
};

export const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <Child>親から渡った値</Child>
    </div>
  );
};
