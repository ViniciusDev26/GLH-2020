import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../database/client"

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const providers = await prisma.provider.findMany({
    select: {
      id: true,
      name: true,
      cnpj: true,
      addressId: false
    }
  });

  res.status(200).json(providers)
}