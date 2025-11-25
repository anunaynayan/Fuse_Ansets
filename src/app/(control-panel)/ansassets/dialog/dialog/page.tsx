"use client";

import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Dialog } from "./dialog";

export default function App() {
  // --- Dialog Controls ---
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  // --- Form State for Add/Edit ---
  const [form, setForm] = useState({ name: "", email: "" });
  const [addForm, setAddForm] = useState({ name: "", description: "" });

  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Dialog Component</h1>

      {/* ------------------- BUTTONS ------------------- */}
      <div className="flex gap-4 flex-wrap">
        <Button variant="contained" color="primary" onClick={() => setOpenEdit(true)}>
          Edit Item
        </Button>

        <Button variant="contained" color="error" onClick={() => setOpenDelete(true)}>
          Delete Item
        </Button>

        <Button variant="contained" color="info" onClick={() => setOpenView(true)}>
          View Details
        </Button>

        <Button variant="contained" color="success" onClick={() => setOpenAdd(true)}>
          Add New Item
        </Button>

        <Button variant="contained" color="warning" onClick={() => setOpenConfirm(true)}>
          Confirmation Action
        </Button>
      </div>

      {/* ===================== 1️⃣ EDIT DIALOG ===================== */}
      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit Item"
        maxWidth={450}
        content={
          <div className="flex flex-col gap-4">
            <TextField
              fullWidth
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}            
            />
            <TextField
              fullWidth
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        }
        actions={
          <>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                alert(`Saved!\nName: ${form.name}\nEmail: ${form.email}`);
                setOpenEdit(false);
              }}
            >
              Save Changes
            </Button>
          </>
        }
      />

      {/* ===================== 2️⃣ DELETE DIALOG ===================== */}
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        title="Delete Item"
        maxWidth={400}
        content={
          <p className="text-red-600 font-medium">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        }
        actions={
          <>
            <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                alert("Item Deleted!");
                setOpenDelete(false);
              }}
            >
              Delete
            </Button>
          </>
        }
      />

      {/* ===================== 3️⃣ VIEW DETAILS DIALOG ===================== */}
      <Dialog
        open={openView}
        onClose={() => setOpenView(false)}
        title="Item Details"
        maxWidth={500}
        content={
          <div className="flex flex-col gap-3">
            <p><strong>Name:</strong> Sample Item</p>
            <p><strong>Description:</strong> This is a detailed description of the item.</p>
            <p><strong>Status:</strong> Active</p>
          </div>
        }
        actions={
          <Button variant="contained" onClick={() => setOpenView(false)}>
            Close
          </Button>
        }
      />

      {/* ===================== 4️⃣ ADD NEW ITEM DIALOG ===================== */}
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        title="Add New Item"
        maxWidth={450}
        content={
          <div className="flex flex-col gap-4">
            <TextField
              label="Name"
              fullWidth
              value={addForm.name}
              onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={addForm.description}
              onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
            />
          </div>
        }
        actions={
          <>
            <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                alert(`Added!\nName: ${addForm.name}\nDescription: ${addForm.description}`);
                setOpenAdd(false);
                setAddForm({ name: "", description: "" });
              }}
            >
              Add Item
            </Button>
          </>
        }
      />

      {/* ===================== 5️⃣ CONFIRMATION ACTION DIALOG ===================== */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        title="Confirm Action"
        maxWidth={400}
        content={
          <p className="text-orange-600 font-medium">
            Are you sure you want to perform this action? This cannot be undone.
          </p>
        }
        actions={
          <>
            <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                alert("Action Confirmed!");
                setOpenConfirm(false);
              }}
            >
              Confirm
            </Button>
          </>
        }
      />
    </div>
  );
}
