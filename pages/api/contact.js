// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ status: 'error', message: 'Name, email, and message are required.' });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ status: 'error', message: 'Invalid email format.' });
    }
    if (phone && !/^\+?[0-9\s\-]{7,15}$/.test(phone)) {
      return res.status(400).json({ status: 'error', message: 'Invalid phone number format.' });
    }

    // Send to Google Apps Script
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone: phone || '', message })
});


    if (response.ok) {
      return res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
    } else {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      return res.status(500).json({ status: 'error', message: 'Failed to send message. Please try again.' });
    }
  } catch (error) {
    console.error('API route error:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error.' });
  }
}
