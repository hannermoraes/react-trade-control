'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Checkbox } from "@/components/ui/checkbox"

interface IResult {
  daily: number;
  final: number;
}

interface TableListProps {
  results: IResult[];
}


export default function TableList({ results }: TableListProps) {

  return (
    <div className="w-full border rounded-md pb-1">
      <Table>
        <TableHeader>
          <TableRow className="grid grid-flow-row grid-cols-4 justify-center text-center py-2">
            <TableHead className="text-center py-2" >Check</TableHead>
            <TableHead className="text-center py-2" >Dias</TableHead>
            <TableHead className="text-center py-2" >Objetivo Diário</TableHead>
            <TableHead className="text-center py-2 mr-5" >Resultado Final</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="grid grid-flow-row grid-col-4">
          {results.map((result: { daily: number, final: number }, index: number) => (
            <TableRow key={index} className="grid grid-flow-row grid-cols-4">
              <TableCell className="text-center" >
                <Checkbox />
              </TableCell>
              <TableCell className="text-center" >{index + 1}</TableCell>
              <TableCell className="text-center" >{result.daily.toFixed(2)}</TableCell>
              <TableCell className="text-center" >{result.final.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}