export default function WhatsappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-4 md:p-6 bg-gray-50 min-h-screen">{children}</div>;
}