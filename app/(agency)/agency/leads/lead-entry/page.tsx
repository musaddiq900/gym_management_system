"use client"

import Link from "next/link"
import { useState } from "react"

export default function LeadEntryPage() {
  const [form, setForm] = useState({
    name: "",
    gym: "",
    source: "Organic",
    stage: "Cold",
    owner: "Sarah",
    notes: "",
  })

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Lead submitted successfully")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: "24px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: 24,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 6,
              }}
            >
              Lead Entry
            </div>
            <div style={{ color: "#6b7280", fontSize: 14 }}>
              Add a new CRM lead for follow-up and conversion tracking.
            </div>
          </div>

          <Link
            href="/agency/crm"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            ← Back to CRM
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}
          >
            <Field
              label="Lead Name"
              value={form.name}
              onChange={(v) => updateField("name", v)}
              placeholder="Enter full name"
            />
            <Field
              label="Gym Name"
              value={form.gym}
              onChange={(v) => updateField("gym", v)}
              placeholder="Enter gym name"
            />
            <SelectField
              label="Source"
              value={form.source}
              onChange={(v) => updateField("source", v)}
              options={["Organic", "Paid Ads", "Referral"]}
            />
            <SelectField
              label="Stage"
              value={form.stage}
              onChange={(v) => updateField("stage", v)}
              options={["Cold", "Warm", "Hot"]}
            />
            <SelectField
              label="Assign To"
              value={form.owner}
              onChange={(v) => updateField("owner", v)}
              options={["Sarah", "David", "James"]}
            />
          </div>

          <div style={{ marginTop: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 700,
                fontSize: 14,
                color: "#374151",
              }}
            >
              Notes
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Write notes..."
              rows={6}
              style={{
                width: "100%",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 14,
                fontSize: 14,
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "flex-end",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/agency/leads/undefined/assign"
              style={{
                height: 44,
                padding: "0 18px",
                borderRadius: 12,
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#374151",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 700,
              }}
            >
              Assign
            </Link>

            <Link
              href="/agency/leads/view"
              style={{
                height: 44,
                padding: "0 18px",
                borderRadius: 12,
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#2563eb",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 700,
              }}
            >
              View Leads
            </Link>

            <button
              type="submit"
              style={{
                height: 44,
                padding: "0 20px",
                borderRadius: 12,
                border: "none",
                background: "#2563eb",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Save Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontWeight: 700,
          fontSize: 14,
          color: "#374151",
        }}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: 46,
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "0 14px",
          fontSize: 14,
          outline: "none",
        }}
      />
    </div>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontWeight: 700,
          fontSize: 14,
          color: "#374151",
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          height: 46,
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "0 14px",
          fontSize: 14,
          outline: "none",
          background: "#fff",
        }}
      >
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}