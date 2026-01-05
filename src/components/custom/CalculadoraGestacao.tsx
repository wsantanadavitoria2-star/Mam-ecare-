"use client";

import { useState } from "react";
import { Calendar, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CalculadoraGestacao() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState<{
    weeks: number;
    days: number;
    dueDate: string;
    trimester: number;
  } | null>(null);

  const calculatePregnancy = () => {
    if (!lastPeriod) return;

    const lastPeriodDate = new Date(lastPeriod);
    const today = new Date();
    
    // Calcula diferença em dias
    const diffTime = today.getTime() - lastPeriodDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Calcula semanas e dias
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    
    // Calcula data prevista do parto (280 dias após DUM)
    const dueDate = new Date(lastPeriodDate);
    dueDate.setDate(dueDate.getDate() + 280);
    
    // Determina trimestre
    let trimester = 1;
    if (weeks >= 27) trimester = 3;
    else if (weeks >= 13) trimester = 2;

    setResult({
      weeks,
      days,
      dueDate: dueDate.toLocaleDateString("pt-BR"),
      trimester,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-pink-500" />
          <CardTitle>Calculadora de Gestação</CardTitle>
        </div>
        <CardDescription>
          Descubra quantas semanas você está e a data prevista do parto
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Data da Última Menstruação (DUM)
          </label>
          <Input
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Button 
          onClick={calculatePregnancy} 
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
        >
          Calcular
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
              <Baby className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Resultado</h3>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Você está com:</span>
                <span className="font-bold text-pink-600 dark:text-pink-400">
                  {result.weeks} semanas e {result.days} dias
                </span>
              </p>
              
              <p className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Trimestre:</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  {result.trimester}º Trimestre
                </span>
              </p>
              
              <p className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Data Prevista do Parto:</span>
                <span className="font-bold text-pink-600 dark:text-pink-400">
                  {result.dueDate}
                </span>
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
