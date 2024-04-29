"use client";

import { Tabs, rem, MantineProvider } from "@mantine/core";
import {
  IconIcons,
  IconBrowser,
  IconPhoto,
  IconRobot,
  IconMovie,
} from "@tabler/icons-react";

import BrandMasonry from "./(brand)/_masonry.jsx";
import ProtoMasonry from "./(prototype)/_masonry.jsx";
import WebMasonry from "./(websites)/_masonry.jsx";
import PubMasonry from "./(pubmats)/masonry.jsx";
import VidMasonry from "./(video)/masonry.jsx";

export default function Projects() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <MantineProvider defaultColorScheme="dark">
      <Tabs color="orange" defaultValue="websites">
        <Tabs.List grow justify="space-between">
          <Tabs.Tab
            value="websites"
            leftSection={<IconBrowser style={iconStyle} />}>
            Websites
          </Tabs.Tab>
          <Tabs.Tab value="brand" leftSection={<IconIcons style={iconStyle} />}>
            Brand
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
          <Tabs.Tab value="video" leftSection={<IconMovie style={iconStyle} />}>
            Video Editing
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="websites">
          <WebMasonry />
        </Tabs.Panel>
        <Tabs.Panel value="brand">
          <BrandMasonry />
        </Tabs.Panel>
        <Tabs.Panel value="prototypes">
          <ProtoMasonry />
        </Tabs.Panel>
        <Tabs.Panel value="pubmats">
          <PubMasonry />
        </Tabs.Panel>
        <Tabs.Panel value="video">
          <VidMasonry />
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}
