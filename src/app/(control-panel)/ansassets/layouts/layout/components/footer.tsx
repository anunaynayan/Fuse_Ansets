"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, IconButton, Divider, Link as MuiLink } from "@mui/material";

// MUI Icons
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const iconMap = {
  X: XIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
};

const iconColors = {
  X: "#1DA1F2",
  Instagram: "#E1306C",
  LinkedIn: "#0077B5",
  GitHub: "#333333",
};

export function Footer({ data }) {
  if (!data) return null;

  return (
    <Box
      component="footer"
      className="
        w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-10 md:pt-16 pb-6 md:pb-10
        bg-gradient-to-br from-blue-50 to-sky-100 
        dark:from-[#0a2540] dark:to-[#111827]
        text-gray-800 dark:text-gray-200 transition-all duration-500
      "
    >
      {/* Top Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-2 sm:col-span-1 lg:col-span-2"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            className="text-blue-900 dark:text-white mb-2"
          >
            {data.brand?.name}
          </Typography>

          <Typography
            variant="body2"
            className="text-slate-600 dark:text-gray-400 mb-3 leading-relaxed"
          >
            {data.brand?.description}
          </Typography>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 pt-1">
            {data.socialLinks?.map((social, i) => {
              const Icon = iconMap[social.icon];
              const color = iconColors[social.icon];

              if (!Icon) return null;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <IconButton
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ "&:hover": { color } }}
                    className="text-gray-700 dark:text-gray-200"
                  >
                    <Icon fontSize="medium" />
                  </IconButton>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Sections */}
        {data.sections?.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="space-y-2"
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              className="text-gray-800 dark:text-white mb-2"
            >
              {section.title}
            </Typography>

            <div className="flex flex-col space-y-2">
              {section.links?.map((link, j) => (
                <MuiLink
                  key={j}
                  href={link.url}
                  underline="none"
                  className="
                    text-md font-semibold text-slate-600 dark:text-gray-400 
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-all duration-300
                  "
                >
                  {link.label}
                </MuiLink>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <Divider className="my-10 h-[2px] rounded-md w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <Typography variant="body2" className="text-md font-bold">
          © {data.brand?.year} {data.brand?.name}. All rights reserved.
        </Typography>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {data.policies?.map((policy, i) => (
            <MuiLink
              key={i}
              href={policy.url}
              underline="none"
              className="
                relative text-md font-semibold text-gray-900 dark:text-gray-400
                hover:text-black dark:hover:text-white
                after:absolute after:bottom-[-3px] after:left-0 
                after:w-0 after:h-[2px]
                after:bg-red-500 dark:after:bg-red-400
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              {policy.label}
            </MuiLink>
          ))}
        </div>
      </motion.div>
    </Box>
  );
}
