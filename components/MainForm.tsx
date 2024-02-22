'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TrashIcon, ReaderIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import TableList from "./TableList"
import { ModeToggle } from "./ModeToggle"

interface IResult {
  daily: number;
  final: number;
}

export default function MainForm() {

  const [valueInitial, setValueInitial] = useState<number>(0)
  const [percentageInicial, setPercentageInitial] = useState<number>(0)
  const [days, setDays] = useState<number>(0)
  const [results, setResults] = useState<IResult[]>([]);

  const handleClear = () => {
    setValueInitial(0)
    setPercentageInitial(0)
    setDays(0)
    setResults([])
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let value = valueInitial;
    let newResults = [];

    for (let i = 0; i < days; i++) {
      let dailyIncrease = value * (percentageInicial / 100);
      value += dailyIncrease;
      newResults.push({ daily: dailyIncrease, final: value });
    }
    setResults(newResults);
  }

  return (
    <div className="flex flex-row gap-20">
      <form onSubmit={handleSubmit} >

        <div className="grid 2-full gap-1.5">
          <Label className="text-sm font-light block leading-6" htmlFor="value">Valor Inicial:</Label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <Input className="py-1.5 pl-7" placeholder="0.00" type="number" id="value" value={valueInitial === 0 ? '' : valueInitial}
              onChange={(e) => setValueInitial(e.target.value ? Number(e.target.value) : 0)} />
          </div>
        </div>


        <div className="grid w-full gap-1 mt-4">
          <Label className="text-sm font-light block leading-6" htmlFor="percentage">Porcentagem Diária %:</Label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-6 left-0 flex items-center pl-3" >
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
          </div>
          <Input className="py-1.5 pl-7" placeholder="0.00" type="number" id="percentage" value={percentageInicial === 0 ? '' : percentageInicial}
            onChange={(e) => setPercentageInitial(e.target.value ? Number(e.target.value) : 0)} />
        </div>


        <div className="grid w-full gap-1.5 mt-4">
          <Label className="text-sm font-light" htmlFor="days">Dias:</Label>
          <Input type="number" id="dias" placeholder="0" value={days === 0 ? '' : days}
            onChange={(e) => setDays(e.target.value ? Number(e.target.value) : 0)} />
        </div>
        <div className="flex mt-4 w-full gap-4">
          <ModeToggle />
          <Button type="submit" className="flex flex-1">
            <ReaderIcon className="mr-2" /> Calcular
          </Button>
          <Button onClick={handleClear} variant='outline' className="flex flex-1">
            <TrashIcon className="mr-2" /> Limpar
          </Button>
        </div>
      </form>
      <div>
        <TableList results={results} />
      </div>
    </div>
  )
}
