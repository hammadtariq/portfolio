const Email = window.Email ? window.Email : {};

export const receiveEmail = (userData: any) => {
  const { name, email, message, subject } = userData;
  const contactTemplate = `<h1>Contact Us Form</h1>
       <p>Here is a copy of client's message:</p>
       <p style = "text-transform: capitalize;" ><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <p>Please get back to ${name} as soon as possible.</p>
       <p>Regards</p>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hammad@treesols.com",
    Password: "E3B9B68BB53347DC3A0A1E960EC829196608",
    To: "hammadtariq65@gmail.com",
    From: "info@trsols.com",
    Subject: subject || "New Message",
    Body: contactTemplate,
  }).catch(() => {
    console.error("Failed to send email");
  });
};
export const sendEmail = (userData: any) => {
  const { name, email, message, subject } = userData;

  const clientEmailTemplate = `
      <p style = "text-transform: capitalize;">Hi ${name},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Here is a copy of your message:</p>
      <p style = "text-transform: capitalize;"><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br/>
      <p>Thank you for your interest and we will be in touch soon.</p>
      <p>Best regards,</p>
      <p>Hammad Tariq</p>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hammad@treesols.com",
    Password: "E3B9B68BB53347DC3A0A1E960EC829196608",
    To: email,
    From: "hammad@trsols.com",
    Subject: subject || "Potential Job Opportunity",
    Body: clientEmailTemplate,
  }).catch(() => {
    console.error("Failed to send email");
  });
};
