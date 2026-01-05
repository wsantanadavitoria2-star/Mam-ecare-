"use client";

import { useState } from "react";
import { Baby, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cryReasons } from "@/lib/pregnancy-data";

export function IdentificadorChoro() {
  const [selectedReason, setSelectedReason] = useState<typeof cryReasons[0] | null>(null);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Baby className="w-5 h-5 text-orange-500" />
          <CardTitle>Por que o Bebê Está Chorando?</CardTitle>
        </div>
        <CardDescription>
          Identifique possíveis motivos e saiba como ajudar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cryReasons.map((reason) => (
            <Button
              key={reason.id}
              variant={selectedReason?.id === reason.id ? "default" : "outline"}
              className={`h-auto py-4 flex flex-col items-center gap-2 ${
                selectedReason?.id === reason.id
                  ? "bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                  : ""
              }`}
              onClick={() => setSelectedReason(reason)}
            >
              <span className="text-2xl">{reason.icon}</span>
              <span className="text-xs text-center">{reason.title}</span>
            </Button>
          ))}
        </div>

        {selectedReason && (
          <div className="mt-6 p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">{selectedReason.icon}</span>
              <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400">
                {selectedReason.title}
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Como Identificar:
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedReason.description}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  O que Fazer:
                </p>
                <ul className="space-y-1">
                  {selectedReason.solutions.map((solution, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!selectedReason && (
          <div className="text-center py-8 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Selecione um motivo acima para ver detalhes</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
