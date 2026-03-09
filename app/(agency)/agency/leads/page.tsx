"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type LeadType = {
  id: number
  name: string
  gym: string
  source: string
  time: string
  owner: string
  stage: "Cold" | "Warm" | "Hot"
  paidStatus: "Paid Ads" | "Organic" | "Referral"
}

const allLeads: LeadType[] = [
  {
    id: 1,
    name: "Elena Rodriguez",
    gym: "Zen Yoga Studio",
    source: "Referral",
    time: "3 days ago",
    owner: "Sarah",
    stage: "Cold",
    paidStatus: "Referral",
  },
  {
    id: 2,
    name: "Robert Paulson",
    gym: "Fight Club MMA",
    source: "Organic",
    time: "1 week ago",
    owner: "James",
    stage: "Cold",
    paidStatus: "Organic",
  },
  {
    id: 3,
    name: "Michael Chen",
    gym: "Iron Temple Gym",
    source: "Organic",
    time: "1 day ago",
    owner: "David",
    stage: "Warm",
    paidStatus: "Organic",
  },
  {
    id: 4,
    name: "Sarah Connor",
    gym: "Future Fitness",
    source: "Paid Ads",
    time: "5 hours ago",
    owner: "David",
    stage: "Warm",
    paidStatus: "Paid Ads",
  },
  {
    id: 5,
    name: "Alex Johnson",
    gym: "FitZone Downtown",
    source: "Paid Ads",
    time: "2 hours ago",
    owner: "Sarah",
    stage: "Hot",
    paidStatus: "Paid Ads",
  },
  {
    id: 6,
    name: "Marcus Smith",
    gym: "Elite Performance",
    source: "Paid Ads",
    time: "1 hour ago",
    owner: "James",
    stage: "Hot",
    paidStatus: "Paid Ads",
  },
]

export default function CRMPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Organic" | "Paid Ads" | "Referral"
  >("All")
  const [activeTab, setActiveTab] = useState("Sales Pipeline")

  const filteredLeads = useMemo(() => {
    if (selectedFilter === "All") return allLeads
    return allLeads.filter((lead) => lead.paidStatus === selectedFilter)
  }, [selectedFilter])

  const coldLeads = filteredLeads.filter((lead) => lead.stage === "Cold")
  const warmLeads = filteredLeads.filter((lead) => lead.stage === "Warm")
  const hotLeads = filteredLeads.filter((lead) => lead.stage === "Hot")

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
        {/* top bar */}
        
          
           
                 
                

        {/* heading */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 18,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              Operations & CRM
            </div>
            <div style={{ color: "#4b5563", fontSize: 16 }}>
              Manage leads, track conversions, and drive gym growth.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, position: "relative" }}>
            <button
              onClick={() => setFilterOpen((p) => !p)}
              style={{
                height: 44,
                padding: "0 18px",
                borderRadius: 12,
                border: "1px solid #d1d5db",
                background: "#fff",
                cursor: "pointer",
                fontSize: 15,
                color: "#374151",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ⌁ Filter
            </button>

            <Link
              href="/agency/leads/lead-entry"
              style={{
                height: 44,
                padding: "0 18px",
                borderRadius: 12,
                background: "#2563eb",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
                boxShadow: "0 2px 8px rgba(37,99,235,0.18)",
              }}
            >
              + Lead Entry
            </Link>

            {filterOpen && (
              <div
                style={{
                  position: "absolute",
                  top: 54,
                  left: 0,
                  width: 180,
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  padding: 8,
                  zIndex: 20,
                }}
              >
                {["All", "Organic", "Paid Ads", "Referral"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedFilter(
                        item as "All" | "Organic" | "Paid Ads" | "Referral"
                      )
                      setFilterOpen(false)
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 12px",
                      border: "none",
                      background:
                        selectedFilter === item ? "#eff6ff" : "transparent",
                      color:
                        selectedFilter === item ? "#2563eb" : "#374151",
                      borderRadius: 10,
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 18,
            marginBottom: 18,
          }}
        >
          <MetricCard
            icon="👥"
            title="Total Leads"
            value="1,284"
            change="+12.5%"
          />
          <MetricCard
            icon=""
            title="Conversion Rate"
            value="24.2%"
            change="+3.1%"
          />
          <MetricCard
            icon=""
            title="Paid vs Unpaid"
            value="62% / 38%"
            change=""
          />
          <MetricCard
            icon=""
            title="Avg. Response"
            value="14m"
            change="-2m"
          />
        </div>

        {/* tabs */}
        <div
          style={{
            display: "inline-flex",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 4,
            marginBottom: 18,
            gap: 4,
          }}
        >
          {["Sales Pipeline", "All Leads", "Performance"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                height: 34,
                padding: "0 14px",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                background: activeTab === tab ? "#f3f4f6" : "transparent",
                color: "#374151",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* main section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 18,
          }}
        >
          <div>
            {activeTab === "Sales Pipeline" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                  gap: 18,
                }}
              >
                <PipelineColumn title="COLD" count={coldLeads.length}>
                  {coldLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </PipelineColumn>

                <PipelineColumn title="WARM" count={warmLeads.length}>
                  {warmLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </PipelineColumn>

                <PipelineColumn title="HOT" count={hotLeads.length}>
                  {hotLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} convert />
                  ))}
                </PipelineColumn>
              </div>
            )}

            {activeTab === "All Leads" && (
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 18,
                  padding: 18,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 14,
                    color: "#111827",
                  }}
                >
                  All Leads
                </div>

                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
                      padding: "14px 10px",
                      borderTop: "1px solid #eceef2",
                      fontSize: 14,
                      color: "#374151",
                    }}
                  >
                    <div>{lead.name}</div>
                    <div>{lead.gym}</div>
                    <div>{lead.stage}</div>
                    <div>{lead.paidStatus}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Performance" && (
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 18,
                  padding: 18,
                  minHeight: 300,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: 16,
                  }}
                >
                  Performance
                </div>
                <div style={{ color: "#6b7280", fontSize: 15 }}>
                  Filter selected: <b>{selectedFilter}</b>
                </div>
                <div style={{ marginTop: 12, color: "#6b7280", fontSize: 15 }}>
                  Cold Leads: {coldLeads.length}
                </div>
                <div style={{ marginTop: 8, color: "#6b7280", fontSize: 15 }}>
                  Warm Leads: {warmLeads.length}
                </div>
                <div style={{ marginTop: 8, color: "#6b7280", fontSize: 15 }}>
                  Hot Leads: {hotLeads.length}
                </div>
              </div>
            )}
          </div>

          {/* right side */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 18,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  ACTIVITY FEED
                </div>

                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "#f3f4f6",
                    color: "#6b7280",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  Real-time
                </div>
              </div>

              <ActivityItem
                icon="📞"
                name="Sarah Miller"
                text="Followed up with Alex Johnson"
                quote='"Discussed Enterprise Plan features."'
                time="10:30 AM"
              />
              <ActivityItem
                icon="✉"
                name="David Wilson"
                text="Followed up with Sarah Connor"
                quote='"Sent pricing brochure."'
                time="09:15 AM"
              />
              <ActivityItem
                icon="💬"
                name="James Brown"
                text="Followed up with Marcus Smith"
                quote='"Demo scheduled for Friday."'
                time="Yesterday"
                noBorder
              />

              <div
                style={{
                  textAlign: "center",
                  marginTop: 14,
                  color: "#2563eb",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                View Full History
              </div>
            </div>

            <div
              style={{
                background: "#eef3ff",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#2563eb",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🗓
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#111827",
                      marginBottom: 6,
                    }}
                  >
                    Upcoming Task
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#4b5563",
                      marginBottom: 14,
                    }}
                  >
                    Review "Iron Temple" proposal with David.
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button
                      style={{
                        height: 34,
                        padding: "0 16px",
                        borderRadius: 10,
                        border: "none",
                        background: "#2563eb",
                        color: "#fff",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Start Now
                    </button>
                    <span style={{ fontSize: 13, color: "#6b7280" }}>
                      In 15 mins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            marginTop: 28,
            borderTop: "1px solid #e5e7eb",
            paddingTop: 14,
            display: "flex",
            justifyContent: "space-between",
            color: "#6b7280",
            fontSize: 13,
          }}
        >
          <div>© 2024 Agency Admin Panel. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({
  icon,
  title,
  value,
  change,
}: {
  icon: string
  title: string
  value: string
  change: string
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 18,
        padding: 22,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        minHeight: 120,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: icon ? "#2563eb" : "transparent",
            color: "#fff",
            display: icon ? "flex" : "block",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          {icon}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#374151",
            fontWeight: 600,
          }}
        >
          {change ? `↗ ${change}` : ""}
        </div>
      </div>

      <div style={{ color: "#4b5563", fontSize: 16, marginBottom: 8 }}>
        {title}
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>
        {value}
      </div>
    </div>
  )
}

function PipelineColumn({
  title,
  count,
  children,
}: {
  title: string
  count: number
  children: React.ReactNode
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          padding: "0 4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#374151",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: 14,
          }}
        >
          {title}
          <span
            style={{
              color: "#6b7280",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "normal",
            }}
          >
            {count}
          </span>
        </div>
        <div style={{ fontSize: 24, color: "#4b5563" }}>+</div>
      </div>

      <div
        style={{
          background: "#f7f8fa",
          border: "1px solid #dbe3ef",
          borderRadius: 18,
          minHeight: 610,
          padding: 10,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function LeadCard({
  lead,
  convert,
}: {
  lead: LeadType
  convert?: boolean
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        borderLeft: "3px solid #9ec5ff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 4,
            }}
          >
            {lead.name}
          </div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>{lead.gym}</div>
        </div>
        <div style={{ color: "#374151", fontSize: 18 }}>···</div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          fontSize: 12,
          color: "#4b5563",
          marginTop: 12,
          marginBottom: 14,
        }}
      >
        <span>{lead.source}</span>
        <span>◷ {lead.time}</span>
      </div>

      <div
        style={{
          borderTop: "1px solid #eceef2",
          paddingTop: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "999px",
              background: "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
            }}
          >
            👤
          </div>
          <div style={{ fontSize: 13, color: "#4b5563" }}>{lead.owner}</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            fontSize: 12,
            color: "#374151",
          }}
        >
          <span>📞</span>
          {convert ? <span>Convert</span> : null}
        </div>
      </div>
    </div>
  )
}

function ActivityItem({
  icon,
  name,
  text,
  quote,
  time,
  noBorder,
}: {
  icon: string
  name: string
  text: string
  quote: string
  time: string
  noBorder?: boolean
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "18px 1fr auto",
        gap: 12,
        padding: "12px 0",
        borderBottom: noBorder ? "none" : "1px solid #eceef2",
      }}
    >
      <div style={{ fontSize: 14 }}>{icon}</div>
      <div>
        <div
          style={{
            fontWeight: 700,
            color: "#374151",
            fontSize: 14,
            marginBottom: 4,
          }}
        >
          {name}
        </div>
        <div
          style={{
            color: "#4b5563",
            fontSize: 13,
            marginBottom: 8,
          }}
        >
          {text}
        </div>
        <div
          style={{
            background: "#f9fafb",
            padding: "8px 10px",
            borderRadius: 10,
            color: "#6b7280",
            fontStyle: "italic",
            fontSize: 12,
          }}
        >
          {quote}
        </div>
      </div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{time}</div>
    </div>
  )
}