"use client";

import { useState } from "react";
import { CalculadoraGestacao } from "@/components/custom/CalculadoraGestacao";
import { DicasSemanais } from "@/components/custom/DicasSemanais";
import { LembretesConsultas } from "@/components/custom/LembretesConsultas";
import { IdentificadorChoro } from "@/components/custom/IdentificadorChoro";
import { DicasMaes } from "@/components/custom/DicasMaes";
import { Baby, Calendar, BookOpen, Heart, Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-pink-200 dark:border-pink-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  MamãeCare
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Sua companheira na maternidade
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Cuidando de você e seu bebê</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Bem-vinda ao MamãeCare! 💝
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ferramentas essenciais para gestantes e mães de primeira viagem. 
            Acompanhe sua gestação, organize consultas e aprenda a cuidar do seu bebê.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="calculadora" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-2 h-auto p-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mb-8">
            <TabsTrigger 
              value="calculadora" 
              className="flex flex-col sm:flex-row items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Calculadora</span>
            </TabsTrigger>
            <TabsTrigger 
              value="dicas" 
              className="flex flex-col sm:flex-row items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Dicas Semanais</span>
            </TabsTrigger>
            <TabsTrigger 
              value="consultas" 
              className="flex flex-col sm:flex-row items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
            >
              <Bell className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Consultas</span>
            </TabsTrigger>
            <TabsTrigger 
              value="choro" 
              className="flex flex-col sm:flex-row items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white"
            >
              <Baby className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Choro do Bebê</span>
            </TabsTrigger>
            <TabsTrigger 
              value="maes" 
              className="flex flex-col sm:flex-row items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <Heart className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Dicas Mães</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <div className="max-w-4xl mx-auto">
            <TabsContent value="calculadora" className="mt-0">
              <CalculadoraGestacao />
            </TabsContent>

            <TabsContent value="dicas" className="mt-0">
              <DicasSemanais />
            </TabsContent>

            <TabsContent value="consultas" className="mt-0">
              <LembretesConsultas />
            </TabsContent>

            <TabsContent value="choro" className="mt-0">
              <IdentificadorChoro />
            </TabsContent>

            <TabsContent value="maes" className="mt-0">
              <DicasMaes />
            </TabsContent>
          </div>
        </Tabs>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-6xl mx-auto">
          <div className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-pink-200 dark:border-pink-900">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
              Acompanhamento Completo
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Calcule semanas de gestação e veja o desenvolvimento do bebê semana a semana
            </p>
          </div>

          <div className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-blue-200 dark:border-blue-900">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
              Organização Total
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nunca mais esqueça consultas e exames importantes com nossos lembretes
            </p>
          </div>

          <div className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-orange-200 dark:border-orange-900">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
              Entenda seu Bebê
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Identifique motivos do choro e saiba como acalmar seu pequeno
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-pink-200 dark:border-pink-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500" />
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Feito com amor para todas as mamães
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            MamãeCare © 2024 - Sua companheira na maternidade
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
            ⚠️ Este app é informativo. Sempre consulte seu médico para orientações específicas.
          </p>
        </div>
      </footer>
    </div>
  );
}
