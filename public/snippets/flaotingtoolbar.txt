"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Popper,
  Paper,
  Toolbar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TitleIcon from "@mui/icons-material/Title";
import Draggable from "react-draggable";

export default function FloatingToolbarEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openHeading, setOpenHeading] = useState<null | HTMLElement>(null);

  const [toolbarPosition, setToolbarPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const applyCommand = (cmd: string, value: string | null = null) => {
    document.execCommand(cmd, false, value);
  };

  const handleSelection = () => {
    if (dragging) return; 
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) {
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setToolbarPosition({ x: rect.left, y: rect.top - 50 }); // toolbar 50px above selection
      const virtualEl = {
        getBoundingClientRect: () => rect,
      } as any;
      setAnchorEl(virtualEl);
    } else {
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
    };
  }, [dragging]);

  return (
    <div className="p-4">
      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="border rounded-lg p-4 min-h-[200px] focus:outline-none prose dark:prose-invert"
        suppressContentEditableWarning
      >
        Select text to see floating toolbar...
      </div>

      {/* Draggable Floating Toolbar */}
      {anchorEl && (
        <Draggable
          handle=".draggable-handle"
          defaultPosition={toolbarPosition}
          onStart={() => setDragging(true)}
          onStop={() => setDragging(false)}
        >
          <Paper
            elevation={6}
            className="rounded-xl absolute draggable-handle"
            style={{ zIndex: 1000 }}
          >
            <Toolbar className="flex gap-1">
              <Tooltip title="Bold">
                <IconButton onClick={() => applyCommand("bold")}>
                  <FormatBoldIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Italic">
                <IconButton onClick={() => applyCommand("italic")}>
                  <FormatItalicIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Text Color">
                <IconButton
                  onClick={() =>
                    applyCommand(
                      "foreColor",
                      prompt("Enter color (e.g., red or #ff0000)") || ""
                    )
                  }
                >
                  <FormatColorTextIcon />
                </IconButton>
              </Tooltip>

              {/* Heading Dropdown */}
              <Tooltip title="Heading">
                <IconButton onClick={(e) => setOpenHeading(e.currentTarget)}>
                  <TitleIcon />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={openHeading}
                open={!!openHeading}
                onClose={() => setOpenHeading(null)}
              >
                {[1, 2, 3, 4, 5, 6].map((h) => (
                  <MenuItem
                    key={h}
                    onClick={() => {
                      applyCommand("formatBlock", `H${h}`);
                      setOpenHeading(null);
                    }}
                  >
                    {`Heading H${h}`}
                  </MenuItem>
                ))}
              </Menu>

              <Tooltip title="Bullet List">
                <IconButton onClick={() => applyCommand("insertUnorderedList")}>
                  <FormatListBulletedIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Paper>
        </Draggable>
      )}
    </div>
  );
}
