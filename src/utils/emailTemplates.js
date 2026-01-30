export const emailStyles = {
  fontFamily: 'Roboto, Arial, sans-serif',
  color: '#333',
  lineHeight: '1.6',
  container: 'max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;',
  header: 'background-color: #4285f4; color: white; padding: 20px; text-align: center;',
  body: 'padding: 20px; background-color: #ffffff;',
  footer: 'background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #888;',
  button: 'display: inline-block; background-color: #4285f4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;'
};

export const generateClientEmail = (name) => {
  return `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <h1 style="margin:0; font-size: 24px;">Message Received</h1>
      </div>
      <div style="${emailStyles.body}">
        <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>
        <p>Thanks for reaching out to Go Global. We've received your inquiry and our team will get back to you shortly.</p>
        <p>In the meantime, feel free to explore our latest FTA guides.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://go-global.vercel.app/fta-hub" style="${emailStyles.button}">Visit FTA Hub</a>
        </div>
        <p>Best regards,<br>The Go Global Team</p>
      </div>
      <div style="${emailStyles.footer}">
        &copy; ${new Date().getFullYear()} Go Global Trade Platform. All rights reserved.
      </div>
    </div>
  `;
};

export const generateAdminEmail = (data) => {
  return `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <h1 style="margin:0; font-size: 24px;">New Lead</h1>
      </div>
      <div style="${emailStyles.body}">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Topic:</strong> ${data.topic || 'General Inquiry'}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4285f4;">
          ${data.message}
        </div>
      </div>
      <div style="${emailStyles.footer}">
        Sent from Go Global Contact Form
      </div>
    </div>
  `;
};
