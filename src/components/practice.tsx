import { ReactNode } from "react";

//children
const Child = ({
  children,
  user,
}: {
  children: ReactNode;
  user: {
    name: string;
    age?: number;
    isChild: boolean;
    profile?: {
      weight: number;
      height: number;
    };
  };
}) => {
  return (
    <div>
      <h2>Child</h2>
      {children}
      <p>{user.name}</p>
      <p>{user.age && `10年後${user.age + 10}歳`}</p>
      <p>{user.isChild ? "子供です" : "大人です"}</p>
      <p>
        {user.profile?.weight}
      </p>
      <p>
        {user.profile?.height}
      </p>
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
