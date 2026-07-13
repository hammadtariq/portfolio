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
        className={`gradient-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_14px_34px_rgba(182,0,168,0.24)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-px motion-reduce:transition-none ${className}`}
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
