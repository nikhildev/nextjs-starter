import type { NextApiRequest, NextApiResponse } from "next";
import { HttpStatuses } from "@/src/models/statuses";
import { DefaultResponse } from "@/src/models/responses";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponse<string>>
) {
  res.status(HttpStatuses.OK).json({ message: "PONG" });
}
