import { TableContainer, Table as TableMui, TableHead, TableRow, TableCell, TableBody, Dialog } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { FaEye, FaWhatsapp } from "react-icons/fa"
import { MdCloseFullscreen } from "react-icons/md"
import { StyledDialog } from "./styles"

type TTableProps = {
  columns: string[]
  rows: any
}

export const Table = ({columns, rows}: TTableProps) => {
  const [opened, setOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState({} as any);

  const statusHelper: any = {
    "SUCCESS": 'border-l-8 border-l-emerald-300',
    "WARNING": 'border-l-8 border-l-yellow-300',
    "DANGER": 'border-l-8 border-l-red-300',
  }

  const handleSelectRow = (row: any) => {
    setSelectedRow(row);
    setOpened(state => !state)
  }

  return (
    <TableContainer>
      <TableMui>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => <TableCell key={index}>{column !== 'status' ? column : ''}</TableCell>)}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow className={statusHelper[row.status]} key={index}>
              {Object.keys(row).map((column, index) => (
                <TableCell 
                  key={index}
                >
                  {column !== "status" ? row[column] : ''}
                </TableCell>
              ))}
              <TableCell key={index} onClick={() => handleSelectRow(row)}>
                <FaEye />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMui>

      <StyledDialog open={opened}>
        <>
          <header>
            <h1>ID: 0001 - Contrato de fornecimento de XY</h1>
            <MdCloseFullscreen onClick={() => setOpened(state => !state)} />
          </header>
          <main className="container">
            <section>
              <div>
                <label>Nome: </label>
                <span>{selectedRow.Fornecedor}</span>
              </div>

              <div>
                <label>Serviço: </label>
                <span></span>
              </div>

              <div>
                <label>Inicio do prazo de fornecimento: </label>
                <span></span>
              </div>

              <div>
                <label>Termino do prazo de fornecimento: </label>
                <span></span>
              </div>

              <div>
                <label>Recorrencia: </label>
                <span></span>
              </div>

              <div>
                <label>Formas de reajuste: </label>
                <span></span>
              </div>

              <div>
                <label>Foro: </label>
                <span></span>
              </div>

              <div>
                <label>Data de assinatura: </label>
                <span></span>
              </div>
            </section>

            <section>
              <div>
                <label>CPF / CNPJ: </label>
                <span>76.150.437/0001-73</span>
              </div>

              <div>
                <label>Endereço: </label>
                <span>Rua testes, Fortaleza - CE</span>
              </div>

              <div>
                <label>Representante: </label>
                <span>Islane</span>
              </div>

              <div>
                <label>Telefone: </label>
                <span></span>
              </div>


              <div>
                <label>Periodicidade do pagamento: </label>
                <span></span>
              </div>


              <div>
                <label>Valor do pagamento: </label>
                <span></span>
              </div>


              <div>
                <label>Modelo de pagamento: </label>
                <span></span>
              </div>

              <div>
                <label>Vigência: </label>
                <span></span>
              </div>
            </section>
          </main>
          <footer>
            <button onClick={() => setOpened(state => !state)}>Recusar</button>
            <button onClick={() => setOpened(state => !state)}>Aceitar</button>
          </footer>
        </>
      </StyledDialog>
    </TableContainer>
  )
}