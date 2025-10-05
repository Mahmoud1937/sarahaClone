export const signupHtml = (link) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Activate Your Account</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f7fb;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f7fb; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
          <!-- Header -->
          <tr>
            <td align="center" style="background:linear-gradient(90deg,#6ee7b7,#60a5fa); padding:24px;">
              <h1 style="margin:0; font-family:Arial,sans-serif; font-size:22px; line-height:28px; color:#04263b; font-weight:700;">
                Activate Your Account
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:24px; font-family:Arial,sans-serif; font-size:15px; line-height:24px; color:#111827; text-align:left;">
              <p style="margin:0 0 12px;">Hello,</p>
              <p style="margin:0 0 12px;">
                Thanks for signing up! To complete your registration and secure your account, please click the button below:
              </p>
            </td>
          </tr>
          <!-- Button -->
          <tr>
            <td align="center" style="padding:0 24px 24px;">
                 <a href="${link}" target="_blank"
                 style="display:inline-block; background:linear-gradient(90deg,#60a5fa,#6ee7b7); color:#04263b; text-decoration:none; 
                        font-family:Arial,sans-serif; font-size:16px; line-height:20px; 
                        padding:14px 28px; border-radius:8px; font-weight:bold;">
                Activate Your Account
              </a>
            </td>
          </tr>
          <!-- Fallback -->
          <tr>
            <td style="padding:0 24px 24px; font-family:Arial,sans-serif; font-size:13px; color:#6b7280; line-height:20px; text-align:left;">
              If the button above doesn’t work, copy and paste the following link into your browser:<br>
              <a href="{{ACTIVATION_LINK}}" style="color:#0d6efd; word-break:break-all;">{{ACTIVATION_LINK}}</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="background:#f9fafb; padding:16px; font-family:Arial,sans-serif; font-size:12px; color:#9ca3af;">
              © {{YEAR}} Your Company — All rights reserved
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>

`



