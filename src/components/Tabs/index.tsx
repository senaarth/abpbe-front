import React from "react";
import { Tab, Tabs as TabGroup, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Content } from "./styles";

type TabType = {
  label: string;
  key: string;
  disabled: boolean;
};

interface TabsProps {
  tabs: TabType[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value) => void;
}

export const Tabs = ({ tabs, onChange }: TabsProps) => {
  return (
    <Content>
      <TabGroup onSelect={(value) => onChange(value)}>
        <TabList>
          {tabs.map((tab) => {
            return (
              <Tab key={tab.key} disabled={tab.disabled}>
                {tab.label?.toUpperCase()}
              </Tab>
            );
          })}
        </TabList>
      </TabGroup>
    </Content>
  );
};
