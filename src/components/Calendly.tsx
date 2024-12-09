import { Phone } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function ScheduleCall() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition duration-300"
        onClick={() => setShowModal(true)}
      >
        <Phone className="mr-1" size={16} />
        Schedule Call
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
