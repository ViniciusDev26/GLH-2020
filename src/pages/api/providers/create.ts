import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider, address, representative, representativeAddress } = req.body;
  
  const { name, cnpj, email, phone } = provider;
  const { street, number, complement, postalCode } = address;
  const { 
    cpf, 
    email: representativeEmail, 
    name: representativeName, 
    phone: representativePhone, 
    rg: representativeRg,
  } = representative;
  const {
    street: representativeStreet,
    number: representativeNumber,
    complement: representativeComplement,
    postal_code: representativePostalCode,
  } = representativeAddress

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
      },
      representative: {
        create: {
          cpf,
          name: representativeName,
          phone: representativePhone,
          email: representativeEmail,
          rg: representativeRg,
          address: {
            create: {
              street: representativeStreet,
              complement: representativeComplement,
              number: representativeNumber,
              postal_code: representativePostalCode,
            }
          }
        }
      }
    }
  });

  res.status(200).json(providers)
}