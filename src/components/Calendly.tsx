// import { Calendly } from "module";

export default function ScheduleCall() {
  const openCalendlyPopup = (): void => {
    // Calendly.showPopupWidget("https://calendly.com/hammadtariq65");
  };

  return (
    <button
      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition duration-300"
      onClick={openCalendlyPopup}
    >
      <svg
        height="1rem"
        width="1rem"
        className="inline-block mr-1 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 202.592 202.592"
      >
        <path
          fill="black"
          d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761
            c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874
            c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769
            c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816
            c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055
            c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747
            C204.079,176.661,204.265,166.343,198.048,160.105z"
        />
      </svg>
      Schedule Call
    </button>
  );
}
