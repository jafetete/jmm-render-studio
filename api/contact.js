export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ success: false, error: 'Missing server configuration' });
  }

  const origin = req.headers.origin || '';
  if (origin) {
    try {
      const hostname = new URL(origin).hostname;
      const isAllowed =
        hostname === 'jmm-arquitectura.art' ||
        hostname === 'www.jmm-arquitectura.art' ||
        hostname.endsWith('.vercel.app');

      if (!isAllowed) {
        return res.status(403).json({ success: false, error: 'Origin not allowed' });
      }
    } catch {
      return res.status(403).json({ success: false, error: 'Invalid origin header' });
    }
  }

  const {
    name = '',
    email = '',
    phone = '',
    country_code = '',
    project_type = '',
    message = '',
    botcheck = '',
  } = req.body || {};

  if (botcheck) {
    return res.status(400).json({ success: false, error: 'Spam detected' });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const payload = {
    access_key: accessKey,
    subject: 'Nueva Cotizacion desde la Web JMM',
    from_name: name.trim(),
    name: name.trim(),
    email: email.trim(),
    phone: `${country_code} ${phone}`.trim(),
    project_type: project_type.trim(),
    message: message.trim(),
    botcheck: '',
  };

  try {
    const body = new URLSearchParams(payload);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = { success: response.ok, message: text };
    }

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(502).json({
      success: false,
      error: 'Upstream request failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
