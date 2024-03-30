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
          <TableRow className="grid grid-flow-row grid-cols-4 text-center py-2">
            <TableHead className="text-center font-extrabold py-2" >check</TableHead>
            <TableHead className="text-center font-extrabold py-2" >dias</TableHead>
            <TableHead className="text-center font-extrabold py-2">
              <span className="font-normal">%</span> diário</TableHead>
            <TableHead className="text-center font-extrabold py-2 mr-5" >
              <span className="font-normal">%</span> final</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="grid grid-flow-row grid-col-4">
          {results.map((result: { daily: number, final: number }, index: number) => (
            <TableRow key={index} className="grid grid-flow-row grid-cols-4">
              <TableCell className="text-center h-10" >
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