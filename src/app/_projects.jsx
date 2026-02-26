"use client";

import { Tabs, rem, MantineProvider } from "@mantine/core";
import { motion } from "framer-motion";
import { IconBrowser, IconPackage, IconPalette } from "@tabler/icons-react";

import DesignMasonry from "./(design)/_masonry.jsx";
import ProductMasonry from "./(product)/_masonry.jsx";
import WebMasonry from "./(websites)/_masonry.jsx";

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
            <span className="hidden min-[345px]:inline">Websites</span>
          </Tabs.Tab>
          <Tabs.Tab
            value="design"
            leftSection={<IconPalette style={iconStyle} />}>
            <span className="hidden min-[345px]:inline">Design</span>
          </Tabs.Tab>
          <Tabs.Tab
            value="product"
            leftSection={<IconPackage style={iconStyle} />}>
            <span className="hidden min-[345px]:inline">Product</span>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="product">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <ProductMasonry />
          </motion.div>
        </Tabs.Panel>
        <Tabs.Panel value="websites">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <WebMasonry />
          </motion.div>
        </Tabs.Panel>
        <Tabs.Panel value="design">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <DesignMasonry />
          </motion.div>
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}
