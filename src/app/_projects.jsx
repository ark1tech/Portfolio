"use client";

import { Tabs, rem, MantineProvider } from "@mantine/core";
import { motion } from "framer-motion";
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
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        fontFamily: "Inter, sans-serif",
      }}>
      <Tabs color="orange" defaultValue="websites">
        <Tabs.List
          grow
          justify="space-between"
          color="gray"
          className="text-[#9f9f9e] ">
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
          {/* <Tabs.Tab value="video" leftSection={<IconMovie style={iconStyle} />}>
            Video Editing
          </Tabs.Tab> */}
        </Tabs.List>

        <Tabs.Panel value="websites">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <WebMasonry />
          </motion.div>
        </Tabs.Panel>
        <Tabs.Panel value="brand">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <BrandMasonry />
          </motion.div>
        </Tabs.Panel>
        <Tabs.Panel value="prototypes">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <ProtoMasonry />
          </motion.div>
        </Tabs.Panel>
        <Tabs.Panel value="pubmats">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <PubMasonry />
          </motion.div>
        </Tabs.Panel>
        {/* <Tabs.Panel value="video">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <VidMasonry />
          </motion.div>
        </Tabs.Panel> */}
      </Tabs>
    </MantineProvider>
  );
}
