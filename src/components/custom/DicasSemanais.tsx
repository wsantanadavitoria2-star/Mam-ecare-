"use client";

import { useState } from "react";
import { BookOpen, Baby, Heart, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { pregnancyTips } from "@/lib/pregnancy-data";

export function DicasSemanais() {
  const [week, setWeek] = useState("");
  const [tip, setTip] = useState<typeof pregnancyTips[0] | null>(null);

  const findTip = () => {
    const weekNum = parseInt(week);
    if (weekNum < 1 || weekNum > 42) {
      alert("Digite uma semana entre 1 e 42");
      return;
    }

    // Encontra a dica mais próxima
    const closestTip = pregnancyTips.reduce((prev, curr) => {
      return Math.abs(curr.week - weekNum) < Math.abs(prev.week - weekNum) ? curr : prev;
    });

    setTip(closestTip);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-500" />
          <CardTitle>Dicas por Semana</CardTitle>
        </div>
        <CardDescription>
          Veja o desenvolvimento do bebê e dicas para cada fase
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Digite a semana (1-42)"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            min="1"
            max="42"
            className="flex-1"
          />
          <Button 
            onClick={findTip}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          >
            Buscar
          </Button>
        </div>

        {tip && (
          <div className="space-y-4 mt-6">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
              <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">
                {tip.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Baby className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                      Desenvolvimento do Bebê
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {tip.babyDevelopment}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Heart className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                      Dica para Você
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {tip.motherTip}
                    </p>
                  </div>
                </div>

                {tip.warning && (
                  <div className="flex gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-md border border-orange-200 dark:border-orange-800">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-orange-700 dark:text-orange-400">
                        Atenção
                      </p>
                      <p className="text-sm text-orange-600 dark:text-orange-500 mt-1">
                        {tip.warning}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
