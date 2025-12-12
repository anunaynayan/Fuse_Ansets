// import React, { useMemo, useRef, useState, useEffect } from "react";
// import TurndownService from "turndown";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";



// export default function RichTextEditor({
//   initialHtml = "",
//   mode = "html",
//   onChange,
//   themeMode = "light",
//   className = "",
// }) {
//   const quillRef = useRef(null);
//   const editorRef = useRef(null);
//   const [html, setHtml] = useState(initialHtml || "");
//   const [markdown, setMarkdown] = useState("");
//   const [outputMode, setOutputMode] = useState(mode); 
//   const turndownService = useMemo(() => new TurndownService({ headingStyle: "atx" }), []);

  
//   const modules = useMemo(() => ({
//     toolbar: {
//       container: [
//         [{ header: [1, 2, 3, false] }],
//         ["bold", "italic", "underline", "strike"],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["blockquote", "code-block"],
//         [{ align: [] }],
//         ["link", "clean"],
//       ],
//     },
//   }), []);

//   const formats = [
//     "header",
//     "bold", "italic", "underline", "strike",
//     "list", "bullet", "blockquote", "code-block",
//     "align",
//     "link",
//   ];

  
//   useEffect(() => {
//     try {
//       const md = turndownService.turndown(html || "");
//       setMarkdown(md);
//     } catch (err) {
//       setMarkdown("");
      
//       console.error("Turndown conversion failed:", err);
//     }
   
//     if (onChange) {
//       onChange({ html, markdown: turndownService.turndown(html || "") });
//     }
  
//   }, [html]);


//   const getContents = () => ({ html, markdown });


//   const sanitizeHtml = (rawHtml) => {
    
//     return rawHtml;
//   };

  
//   const wrapperBaseClasses = `rte-wrapper relative ${className}`;
//   const themeClasses = themeMode === "dark"
//     ? "bg-gray-900 text-gray-100 border border-gray-700"
//     : "bg-white text-gray-900 border border-gray-200";

  
//   const copyToClipboard = async (text) => {
//     try {
//       await navigator.clipboard.writeText(text);
     
//     } catch (err) {
      
//       console.error("Copy failed", err);
//     }
//   };

//   return (
//     <div className={`${wrapperBaseClasses} ${themeClasses} rounded-md shadow-sm p-3 sm:p-4`}>
//       {/* header / controls */}
//       <div className="rte-header flex items-center justify-between gap-2 mb-3">
//         <div className="flex items-center gap-3">
//           <div className="font-medium">Rich Text Editor</div>
//           <div className="text-xs opacity-70">({outputMode === "html" ? "HTML output" : "Markdown output"})</div>
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="text-xs">Output:</label>
//           <select
//             value={outputMode}
//             onChange={(e) => setOutputMode(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//             aria-label="Select output mode"
//           >
//             <option value="html">HTML</option>
//             <option value="markdown">Markdown</option>
//           </select>

//           <button
//             type="button"
//             onClick={() => {
//               const text = outputMode === "html" ? sanitizeHtml(html) : markdown;
//               copyToClipboard(text);
//             }}
//             className="ml-2 px-2 py-1 border rounded text-sm"
//             aria-label="Copy output"
//           >
//             Copy
//           </button>
//         </div>
//       </div>

//       {/* editor area */}
//       <div className="rte-editor min-h-[180px] sm:min-h-[260px]">
//         <ReactQuill
//   ref={editorRef}
//   value={html}
//   onChange={(value) => setHtml(value)}
//   modules={modules}
//   formats={formats}
//   theme="snow"
//   placeholder="Enter your content here..."
// />
//       </div>

//       {/* output preview */}
//       <div className="rte-output mt-3">
//         <div className="mb-1 text-xs opacity-70">Preview</div>

//         {outputMode === "html" ? (
//           <div
//             className="rte-preview p-3 border rounded text-sm overflow-auto max-h-40"
            
//             dangerouslySetInnerHTML={{ __html: sanitizeHtml(html || "<p><em>Empty</em></p>") }}
//           />
//         ) : (
//           <pre className="rte-preview p-3 border rounded text-sm overflow-auto max-h-40 whitespace-pre-wrap break-words">
//             {markdown || "(empty)"}
//           </pre>
//         )}
//       </div>
//     </div>
//   );
// }
