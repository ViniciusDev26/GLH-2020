import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { provider, address } = req.body;
 
  const { name, cnpj } = provider;
  const { street, number, complement, postalCode } = address;

  const providers = await prisma.provider.update({
    data: {
      name,
      cnpj,
      address: {
        create: {
          street,
          number,
          complement,
          postal_code: postalCode
        }
      }
    },
    where: {
      id: id as string
    }
  });

  res.status(200).json(providers)
}