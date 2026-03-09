"use client";

import { useState } from "react";
import { members } from "../../../data/dummyWhatsapp";

type Tab =
  | "Bulk Messaging"
  | "Renewal Reminders"
  | "Offer Campaigns"
  | "Birthday Wishes"
  | "Attendance Alerts"
  | "Payment Reminders";

const tabs: Tab[] = [
  "Bulk Messaging",
  "Renewal Reminders",
  "Offer Campaigns",
  "Birthday Wishes",
  "Attendance Alerts",
  "Payment Reminders",
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/70 p-6 md:p-8">
      {children}
    </div>
  );
}

function PrimaryBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-400/30 hover:scale-[1.02] transition disabled:opacity-50"
    />
  );
}

export default function WhatsappMarketingPage() {
  const [active, setActive] = useState<Tab>("Bulk Messaging");
  const [message, setMessage] = useState("");

  function sendMessage(target: string) {
    alert(`Message sent to ${target}\n\n"${message}"`);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Marketing</h1>
        <p className="text-sm text-gray-500">
          Bulk messaging, reminders & campaigns 
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/60 p-2">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                active === t
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-300/40"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <Card>
        {active === "Bulk Messaging" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Send Bulk Message</h2>

            <textarea
              className="w-full bg-gray-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <PrimaryBtn onClick={() => sendMessage("All Members")}>
              Send to All Members
            </PrimaryBtn>
          </div>
        )}

        {active === "Renewal Reminders" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Renewal Reminders</h2>

            {members.map((m) => (
              <div key={m.id} className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-500">
                    Expiry: {m.membershipExpiry}
                  </div>
                </div>
                <PrimaryBtn onClick={() => sendMessage(m.name)}>
                  Send Reminder
                </PrimaryBtn>
              </div>
            ))}
          </div>
        )}

        {active === "Offer Campaigns" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Offer Campaign</h2>

            <textarea
              className="w-full bg-gray-50 px-4 py-3 rounded-xl min-h-[120px]"
              placeholder="Write offer details..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <PrimaryBtn onClick={() => sendMessage("Campaign Members")}>
              Launch Campaign
            </PrimaryBtn>
          </div>
        )}

        {active === "Birthday Wishes" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Birthday Wishes</h2>

            {members.map((m) => (
              <div key={m.id} className="bg-gray-50 rounded-2xl p-4 flex justify-between">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-500">
                    Birthday: {m.birthday}
                  </div>
                </div>
                <PrimaryBtn onClick={() => sendMessage(m.name)}>
                  Send Wish 🎉
                </PrimaryBtn>
              </div>
            ))}
          </div>
        )}

        {active === "Attendance Alerts" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Attendance Alerts</h2>

            {members.map((m) => (
              <div key={m.id} className="bg-gray-50 rounded-2xl p-4 flex justify-between">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-500">
                    Last Visit: {m.lastAttendance}
                  </div>
                </div>
                <PrimaryBtn onClick={() => sendMessage(m.name)}>
                  Send Alert
                </PrimaryBtn>
              </div>
            ))}
          </div>
        )}

        {active === "Payment Reminders" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Reminders</h2>

            {members
              .filter((m) => m.pendingPayment)
              .map((m) => (
                <div key={m.id} className="bg-gray-50 rounded-2xl p-4 flex justify-between">
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-red-500">
                      Pending Payment
                    </div>
                  </div>
                  <PrimaryBtn onClick={() => sendMessage(m.name)}>
                    Send Reminder
                  </PrimaryBtn>
                </div>
              ))}
          </div>
        )}
      </Card>
    </div>
  );
}