import LazyLoadImg from "./LazyLoadImg";

export default function WhatsApp() {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-container">
        <a
          href="https://wa.me/923312627056?text=Hello%20*TRS*%20team%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20schedule%20a%20meeting."
          target="_blank"
        >
          <LazyLoadImg classNames="whatsapp-icon" src="/wp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}
