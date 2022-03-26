import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider, address } = req.body;
  
  const { name, cnpj, email, phone } = provider;
  const { street, number, complement, postalCode } = address;

  const providers = await prisma.provider.create({
    data: {
      name,
      cnpj,
      email,
      phone,
      address: {
        create: {
          street,
          number,
          complement,
          postal_code: postalCode,
        }
      }
    }
  });

  res.status(200).json(providers)
}