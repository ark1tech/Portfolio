"use client";

import { Tabs, rem, MantineProvider } from "@mantine/core";

import {
  IconIcons,
  IconBrowser,
  IconPhoto,
  IconRobot,
  IconMovie,
} from "@tabler/icons-react";

export default function Projects() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <MantineProvider defaultColorScheme="dark">
      <Tabs color="orange" defaultValue="brand">
        <Tabs.List grow justify="space-between">
          <Tabs.Tab value="brand" leftSection={<IconIcons style={iconStyle} />}>
            Brand
          </Tabs.Tab>
          <Tabs.Tab
            value="websites"
            leftSection={<IconBrowser style={iconStyle} />}>
            Websites
          </Tabs.Tab>
          <Tabs.Tab
            value="prototypes"
            leftSection={<IconRobot style={iconStyle} />}>
            Prototypes
          </Tabs.Tab>
          <Tabs.Tab
            value="pubmats"
            leftSection={<IconPhoto style={iconStyle} />}>
            Promotionals
          </Tabs.Tab>
          <Tabs.Tab
            value="video"
            leftSection={<IconMovie style={iconStyle} />}>
            Video Editing
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}
