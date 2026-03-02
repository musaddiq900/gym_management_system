import RoleCard from "../../../../../component/subscriptions/RoleCard";
import ApiKeyCard from "../../../../../component/subscriptions/ApiKeyCard";
import IpWhitelistCard from "../../../../../component/subscriptions/IpWhitelistCard";

export default function AccessControlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#0f172a] p-8 text-gray-100">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-purple-400">
          Access Control
        </h1>
        <p className="text-gray-400 mt-2">
          Cross-tenant monitoring and operational controls.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RoleCard />
        <ApiKeyCard />
        <IpWhitelistCard />
      </div>
    </div>
  );
}