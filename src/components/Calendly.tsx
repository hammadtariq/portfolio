import { Phone } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";

type ScheduleCallProps = {
  label?: string;
  className?: string;
};

export default function ScheduleCall({
  label = "Schedule A Call",
  className = "",
}: ScheduleCallProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-gray-950 ${className}`}
        onClick={() => setShowModal(true)}
      >
        {label}
        <Phone size={18} />
      </button>
      {showModal && (
        <PopupModal
          url="https://calendly.com/hammadtariq65"
          rootElement={document.getElementById("root") as HTMLElement}
          onModalClose={() => setShowModal(false)}
          open={showModal}
        />
      )}
    </div>
  );
}
