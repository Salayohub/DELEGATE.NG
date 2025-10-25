import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // This just sends a success response.
  // You can clear localStorage/sessionStorage on the frontend.
  return res.status(200).json({ success: true, message: "Logged out successfully" });
}
