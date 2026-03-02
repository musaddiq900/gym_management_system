import WhatsAppCampaignForm from "../../../../../component/subscriptions/WhatsAppCampaignForm";

export default function WhatsAppMarketingPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">WhatsApp Marketing</h1>
        <p className="text-gray-400">
          Send automated renewal reminders & campaigns.
        </p>
      </div>

      <WhatsAppCampaignForm />
    </div>
  );
}