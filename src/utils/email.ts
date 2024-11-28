const Email = Window.Email ? Window.Email : {};

export const receiveEmail = (userData: any) => {
  const { userName, userEmail, message, subject } = userData;
  const contactTemplate = `<h1>Contact Us Form</h1>
       <p>Here is a copy of client's message:</p>
       <p style = "text-transform: capitalize;" ><strong>Name:</strong> ${userName}</p>
       <p><strong>Email:</strong> ${userEmail}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <p>Please get back to ${userName} as soon as possible.</p>
       <p>Regards</p>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hammad@treesols.com",
    Password: "E3B9B68BB53347DC3A0A1E960EC829196608",
    To: "hammadtariq65@gmail.com",
    From: "info@trsols.com",
    Subject: subject,
    Body: contactTemplate,
  }).catch(() => {
    console.error("Failed to send email");
  });
};
export const sendEmail = (userData: any) => {
  const { userName, userEmail, message, subject } = userData;

  const clientEmailTemplate = `
      <p style = "text-transform: capitalize;">Hi ${userName},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Here is a copy of your message:</p>
      <p style = "text-transform: capitalize;"><strong>Name:</strong> ${userName}</p>
      <p><strong>Email:</strong> ${userEmail}</p>
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
    To: userEmail,
    From: "hammad@trsols.com",
    Subject: subject,
    Body: clientEmailTemplate,
  }).catch(() => {
    console.error("Failed to send email");
  });
};
