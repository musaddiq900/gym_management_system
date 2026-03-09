import ClassTabs from "../../../../component/gym-admin/class/ClassTabs";
import CreateClassForm from "../../../../component/gym-admin/class/CreateClassForm";

export default function CreatePage() {
  return (
    <div className="space-y-6">
      <ClassTabs active="Create Class" />
      <CreateClassForm />
    </div>
  );
}