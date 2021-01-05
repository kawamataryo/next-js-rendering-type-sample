import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const user = { name: "太郎" };
  res.status(200).json(user);
};
