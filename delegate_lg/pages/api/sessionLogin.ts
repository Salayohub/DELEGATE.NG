// pages/api/sessionLogin.ts
/*import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // handle login
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
