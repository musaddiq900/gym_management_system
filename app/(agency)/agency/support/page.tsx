"use client"

import Link from "next/link"

export default function SupportPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {/* Top Search Bar */}
        
        {/* Heading + Button */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              Support Center
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Manage inquiries and support tickets
            </div>
          </div>

          <Link
            href="/agency/support/create"
            style={{
              textDecoration: "none",
              background: "#2563eb",
              color: "#ffffff",
              padding: "14px 24px",
              borderRadius: "16px",
              fontSize: "15px",
              fontWeight: 700,
              boxShadow: "0 2px 8px rgba(37,99,235,0.18)",
            }}
          >
            + Create Ticket
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "18px",
          }}
        >
          <StatCard
            title="AVG. FIRST RESPONSE"
            value="14m 22s"
            sub="-2m"
            icon="🕘"
          />
          <StatCard
            title="RESOLUTION RATE"
            value="94.2%"
            sub="+1.4%"
            icon="✔"
          />
          <StatCard
            title="ACTIVE TICKETS"
            value="28"
            sub="+4"
            icon="💬"
          />
          <StatCard
            title="PENDING ASSISTANCE"
            value="06"
            sub="-2"
            icon="👥"
          />
        </div>

        {/* Main 3 Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr 320px",
            gap: "18px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              minHeight: "860px",
            }}
          >
            <div
              style={{
                padding: "18px 18px 10px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Ticket Queue
              </div>
              <div style={{ color: "#6b7280", fontSize: "18px" }}>⌕</div>
            </div>

            <div style={{ padding: "0 18px 14px 18px" }}>
              <div
                style={{
                  height: "42px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                  color: "#9ca3af",
                  background: "#fafafa",
                  fontSize: "14px",
                }}
              >
                Filter by subject or ID...
              </div>
            </div>

            <TicketItem
              active
              id="T-1082"
              time="10 mins ago"
              title="Bio-attendance sync failing in Branch #2"
              gym="Iron Empire HQ"
              status="In Progress"
              priority="High"
              priorityColor="#f97316"
            />

            <TicketItem
              id="T-1085"
              time="45 mins ago"
              title="Bulk member import timeout"
              gym="Zenith Yoga Studio"
              status="Open"
              priority="Medium"
              priorityColor="#3b82f6"
            />

            <TicketItem
              id="T-1079"
              time="2 hours ago"
              title="Refund request for subscription overcharge"
              gym="The Powerhouse"
              status="Resolved"
              priority="Low"
              priorityColor="#94a3b8"
            />

            <TicketItem
              id="T-1088"
              time="5 mins ago"
              title="WhatsApp marketing module not sending"
              gym="Elite Fitness Center"
              status="Open"
              priority="Urgent"
              priorityColor="#e11d48"
            />

            <TicketItem
              id="T-1081"
              time="1 hour ago"
              title="Staff payroll calculation discrepancy"
              gym="City Crossfit"
              status="In Progress"
              priority="High"
              priorityColor="#f97316"
            />
          </div>

          {/* CENTER */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              minHeight: "860px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid #eceef2",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#111827",
                      lineHeight: 1.3,
                    }}
                  >
                    failing in Branch #2
                  </div>

                  <div
                    style={{
                      background: "#f3f4f6",
                      color: "#4b5563",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    In Progress
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                  }}
                >
                  Ticket ID: T-1082 • Assigned to:
                  <br />
                  Sarah J.
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    height: "38px",
                    border: "1px solid #e5e7eb",
                    background: "#ffffff",
                    borderRadius: "10px",
                    padding: "0 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#374151",
                    cursor: "pointer",
                  }}
                >
                  Assign Assistant
                </button>

                <button
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "none",
                    background: "transparent",
                    fontSize: "18px",
                    cursor: "pointer",
                    color: "#6b7280",
                  }}
                >
                  ⋮
                </button>
              </div>
            </div>

            <div
              style={{
                padding: "12px 18px",
                borderBottom: "1px solid #eceef2",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#f3f4f6",
                  color: "#6b7280",
                  padding: "7px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Ticket Created on 14th Oct, 2024
              </div>
            </div>

            <div
              style={{
                padding: "18px",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#6b7280",
                  marginBottom: "8px",
                }}
              >
                ALEX RIVERA (GYM OWNER) &nbsp;&nbsp; 09:15 AM
              </div>

              <div
                style={{
                  maxWidth: "360px",
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "14px",
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                Hi support, we are having trouble
                <br />
                with the bio-attendance device at
                <br />
                our downtown branch. It keeps
                <br />
                disconnecting every 30 minutes.
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "10px 0 20px 0",
                }}
              >
                <div style={{ flex: 1, height: "1px", background: "#eceef2" }} />
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  SYSTEM EVENT: SARAH J. JOINED THE CHAT
                </div>
                <div style={{ flex: 1, height: "1px", background: "#eceef2" }} />
              </div>

              <div style={{ textAlign: "right", marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#9ca3af",
                    marginBottom: "8px",
                  }}
                >
                  09:42 AM &nbsp; YOU
                </div>

                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "360px",
                    textAlign: "left",
                    background: "#2563eb",
                    color: "#ffffff",
                    borderRadius: "14px",
                    borderTopRightRadius: "8px",
                    padding: "14px",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    boxShadow: "0 2px 8px rgba(37,99,235,0.14)",
                  }}
                >
                  Hello Alex! I&apos;m looking into this
                  <br />
                  right now. Could you please
                  <br />
                  provide the firmware version
                  <br />
                  currently running on the device?
                </div>
              </div>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#6b7280",
                  marginBottom: "8px",
                }}
              >
                ALEX RIVERA &nbsp;&nbsp; 10:05 AM
              </div>

              <div
                style={{
                  maxWidth: "360px",
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "14px",
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  marginBottom: "18px",
                }}
              >
                It&apos;s v2.4.1. We updated it last week
                <br />
                thinking it would fix the issue, but it
                <br />
                actually got worse.
              </div>

              <div
                style={{
                  maxWidth: "430px",
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                  borderRadius: "14px",
                  padding: "14px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#4b5563",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  ⓘ INTERNAL NOTE (PRIVATE)
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  Hardware team confirmed a known bug in
                  <br />
                  v2.4.1 for certain routers. Need to schedule a
                  <br />
                  rollback for the Iron Empire devices.
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#9ca3af",
                    marginBottom: "8px",
                  }}
                >
                  10:15 AM &nbsp; YOU
                </div>

                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "300px",
                    textAlign: "left",
                    background: "#2563eb",
                    color: "#ffffff",
                    borderRadius: "14px",
                    borderTopRightRadius: "8px",
                    padding: "14px",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    boxShadow: "0 2px 8px rgba(37,99,235,0.14)",
                  }}
                >
                  Checking the API logs for the
                  <br />
                  hardware gateway...
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid #eceef2",
                padding: "16px",
              }}
            >
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "14px",
                  background: "#ffffff",
                }}
              >
                <div
                  style={{
                    minHeight: "56px",
                    color: "#9ca3af",
                    fontSize: "14px",
                    marginBottom: "12px",
                  }}
                >
                  Type your response here...
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    <span>📎</span>
                    <span>💬</span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#6b7280",
                        textTransform: "uppercase",
                        lineHeight: 1.4,
                      }}
                    >
                      PRESS ⌘ +
                      <br />
                      ENTER TO
                      <br />
                      SEND
                    </span>
                  </div>

                  <button
                    style={{
                      background: "#2563eb",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "12px",
                      height: "42px",
                      padding: "0 18px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(37,99,235,0.18)",
                    }}
                  >
                    Send Response &nbsp; ✈
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  padding: "26px 18px",
                  textAlign: "center",
                  borderBottom: "1px solid #eceef2",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "999px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    fontSize: "28px",
                  }}
                >
                  🏢
                </div>

                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  Iron Empire HQ
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Premium Plus Plan • Active
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    color: "#2563eb",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  View Gym Dashboard ↗
                </div>
              </div>

              <div style={{ padding: "18px" }}>
                <InfoRow label="Owner" value="Alex Rivera" />
                <InfoRow label="Contact" value="+1 (555) 902-3482" />
                <InfoRow label="Member Count" value="1,284" />
                <InfoRow label="Active Branches" value="04" />
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  padding: "16px 18px",
                  borderBottom: "1px solid #eceef2",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Recent Inquiries
              </div>

              <div style={{ padding: "16px 18px", borderBottom: "1px solid #eceef2" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "8px",
                  }}
                >
                  T-0941: Billing Discrepancy
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  Resolved on Sept 28th. Discrepancy caused by
                  <br />
                  prorated upgrade. Credit of $45 issued.
                </div>
              </div>

              <div
                style={{
                  padding: "16px 18px",
                  borderBottom: "1px solid #eceef2",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#374151",
                }}
              >
                T-0812: App Login Issues
              </div>

              <div
                style={{
                  padding: "16px 18px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#374151",
                }}
              >
                T-0750: New Integration
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "14px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "46px",
                  background: "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                Resolve Ticket
              </button>

              <button
                style={{
                  width: "100%",
                  height: "46px",
                  background: "#ffffff",
                  color: "#374151",
                  border: "1px solid #d1d5db",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Escalate to Tech Lead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  sub,
  icon,
}: {
  title: string
  value: string
  sub: string
  icon: string
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "18px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              color: "#6b7280",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "flex-end",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "2px",
              }}
            >
              {sub}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "999px",
            border: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4b5563",
            fontSize: "14px",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

function TicketItem({
  active,
  id,
  time,
  title,
  gym,
  status,
  priority,
  priorityColor,
}: {
  active?: boolean
  id: string
  time: string
  title: string
  gym: string
  status: string
  priority: string
  priorityColor: string
}) {
  return (
    <div
      style={{
        padding: "14px 18px",
        borderTop: "1px solid #eceef2",
        background: active ? "#fafcff" : "#ffffff",
        borderRight: active ? "2px solid #2563eb" : "2px solid transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#4b5563",
          }}
        >
          {id}
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          {time}
        </div>
      </div>

      <div
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#111827",
          lineHeight: 1.4,
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#4b5563",
          marginBottom: "10px",
        }}
      >
        {gym}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: status === "Open" ? "#eff6ff" : "#f3f4f6",
            color: status === "Open" ? "#2563eb" : "#4b5563",
            borderRadius: "999px",
            padding: "6px 12px",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {status}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "#4b5563",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: priorityColor,
              display: "inline-block",
            }}
          />
          {priority}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "10px",
        padding: "10px 0",
        fontSize: "14px",
      }}
    >
      <div style={{ color: "#6b7280" }}>{label}</div>
      <div style={{ color: "#111827", fontWeight: 700, textAlign: "right" }}>
        {value}
      </div>
    </div>
  )
}