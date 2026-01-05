"use client";

import { useState } from "react";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { firstTimeTips } from "@/lib/pregnancy-data";

export function DicasMaes() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          <CardTitle>Dicas para Mães de Primeira Viagem</CardTitle>
        </div>
        <CardDescription>
          Conselhos essenciais para você se sentir mais confiante
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {firstTimeTips.map((tipCategory) => (
          <div
            key={tipCategory.category}
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(tipCategory.category)}
              className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 hover:from-red-100 hover:to-pink-100 dark:hover:from-red-950/30 dark:hover:to-pink-950/30 transition-colors"
            >
              <span className="font-semibold text-red-700 dark:text-red-400">
                {tipCategory.category}
              </span>
              {expandedCategory === tipCategory.category ? (
                <ChevronUp className="w-5 h-5 text-red-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-red-500" />
              )}
            </button>

            {expandedCategory === tipCategory.category && (
              <div className="p-4 bg-white dark:bg-gray-950 space-y-3">
                {tipCategory.tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-red-500 font-bold flex-shrink-0">•</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mt-6 p-4 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 rounded-lg border-2 border-pink-300 dark:border-pink-800">
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 font-medium">
            💝 Lembre-se: Você está fazendo um ótimo trabalho! Cada mãe e cada bebê são únicos. 
            Confie no seu instinto e não hesite em pedir ajuda quando precisar.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
