import LeadForm from "../../../../../component/leads/LeadForm";

export default function CreateLead() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow border">
        <h1 className="text-2xl font-bold">Add New Lead</h1>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow border">
        <LeadForm />
      </div>

    </div>
  )
}