import SubscriptionForm from "../../../../../component/subscriptions/SubscriptionForm"

export default function CreateSubscription() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Create Subscription Plan
      </h1>

      <SubscriptionForm />
    </div>
  )
}