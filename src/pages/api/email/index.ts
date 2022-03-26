import type { NextApiRequest, NextApiResponse } from "next";

import { transporter } from "../../../lib/nodemailerTransporter";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { fromEmail, toEmail, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      text
    });

    return res.status(200).json({
      success: true
    });
  }catch(error) {
    return res.json(error);
  }

}