// Extend the Window interface to include the Email property
interface EmailJS {
  send(params: {
    Host: string;
    Username: string;
    Password: string;
    To: string;
    From: string;
    Subject: string;
    Body: string;
  }): Promise<void>;
}

interface Window {
  Email: EmailJS;
}
