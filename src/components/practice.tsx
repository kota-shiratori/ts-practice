import { ReactNode } from "react";

//children
const Child = ({
  children,
  user,
}: {
  children: ReactNode;
  user: {
    name: string;
    age: number;
    isChild: boolean;
  };
}) => {
  return (
    <div>
      <h2>Child</h2>
      {children}
      <p>{user.name}</p>
      <p>{user.age}歳</p>
      <p>{user.isChild ? "子供です" : "大人です"}</p>
    </div>
  );
};

export const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <Child user={{ name: "白鳥", age: 26, isChild: false }}>
        親から渡った値
      </Child>
    </div>
  );
};
