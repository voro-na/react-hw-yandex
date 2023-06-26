"use client";

import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
    children: ReactNode;
  };
export const StoreProvider = ({ children }: Props) => {

    return <Provider store={store}>{children}</Provider>;
};
