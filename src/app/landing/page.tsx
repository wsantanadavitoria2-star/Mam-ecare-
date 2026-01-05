"use client";

import { useState } from "react";
import { Baby, Calendar, BookOpen, Heart, Bell, Check, Star, ArrowRight, Shield, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
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
                <p className="text-xs text-gray-600">
                  Sua companheira na maternidade
                </p>
              </div>
            </div>
            <Link href="/app">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Acessar App
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Lançamento Especial - 50% OFF</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sua Jornada na Maternidade
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Mais Tranquila e Segura
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O aplicativo completo que acompanha você desde a gestação até os primeiros meses do bebê. 
            Ferramentas essenciais, dicas práticas e suporte em cada etapa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/checkout">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/app">
              <Button size="lg" variant="outline" className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 text-lg px-8 py-6 w-full sm:w-auto">
                Ver Demonstração
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Atualizações gratuitas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-12 border-y border-pink-200 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-1">10.000+</div>
              <div className="text-sm text-gray-600">Mamães Felizes</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-pink-200"></div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">4.9/5 Avaliação</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-pink-200"></div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ferramentas desenvolvidas especialmente para gestantes e mães de primeira viagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Calculadora de Gestação
              </h3>
              <p className="text-gray-600 mb-4">
                Acompanhe semana a semana o desenvolvimento do seu bebê com informações precisas e detalhadas
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Cálculo preciso de semanas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Data prevista do parto
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Marcos de desenvolvimento
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dicas Semanais
              </h3>
              <p className="text-gray-600 mb-4">
                Receba orientações personalizadas para cada semana da sua gestação
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Conteúdo especializado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Dicas práticas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Informações confiáveis
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lembretes de Consultas
              </h3>
              <p className="text-gray-600 mb-4">
                Organize e nunca mais esqueça consultas e exames importantes
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Agenda completa
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Notificações inteligentes
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Histórico de consultas
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Identificador de Choro
              </h3>
              <p className="text-gray-600 mb-4">
                Entenda o que seu bebê está tentando comunicar e saiba como ajudar
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Tipos de choro
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Soluções práticas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Técnicas de acalmar
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-red-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Guia para Mães
              </h3>
              <p className="text-gray-600 mb-4">
                Dicas essenciais organizadas por categorias para facilitar sua vida
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Amamentação
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Cuidados com bebê
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Saúde e bem-estar
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Suporte Completo
              </h3>
              <p className="text-gray-600 mb-4">
                Conte com nossa equipe para tirar dúvidas e receber orientações
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Atendimento rápido
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Conteúdo atualizado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Comunidade ativa
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16 sm:py-24 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Invista na sua tranquilidade e no bem-estar do seu bebê
          </p>

          <Card className="p-8 sm:p-12 bg-white border-2 border-pink-300 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>50% de Desconto - Apenas Hoje</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-gray-400 line-through">R$ 197,00</span>
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  R$ 97,00
                </span>
              </div>
              <p className="text-gray-600">Pagamento único - Acesso vitalício</p>
            </div>

            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Acesso completo a todas as ferramentas</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Atualizações gratuitas para sempre</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Suporte prioritário via WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Garantia de 7 dias - 100% do dinheiro de volta</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Bônus: E-book "Primeiros 100 Dias"</span>
              </div>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl py-6">
                Garantir Minha Vaga Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              🔒 Pagamento 100% seguro via Stripe
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossas Mamães
            </h2>
            <p className="text-lg text-gray-600">
              Milhares de mães já confiam no MamãeCare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O MamãeCare me salvou! Como mãe de primeira viagem, estava perdida. 
                Agora me sinto segura e preparada para cuidar do meu bebê."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Silva</div>
                  <div className="text-sm text-gray-600">Mãe de primeira viagem</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "A calculadora de gestação é perfeita! Acompanho cada semana e sei 
                exatamente o que esperar. Recomendo para todas as gestantes!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Costa</div>
                  <div className="text-sm text-gray-600">Gestante - 28 semanas</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O identificador de choro é incrível! Agora consigo entender o que 
                meu bebê precisa e acalmá-lo rapidamente. Vale cada centavo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Juliana Santos</div>
                  <div className="text-sm text-gray-600">Mãe de 2 meses</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronta para Transformar sua Maternidade?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Junte-se a milhares de mães que já estão vivendo uma maternidade mais tranquila e segura
          </p>
          <Link href="/checkout">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-xl px-8 py-6">
              Começar Agora - R$ 97,00
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-75">
            ⏰ Oferta válida apenas hoje - Não perca!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-pink-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500" />
            <p className="text-gray-600 font-medium">
              Feito com amor para todas as mamães
            </p>
          </div>
          <p className="text-sm text-gray-500">
            MamãeCare © 2024 - Sua companheira na maternidade
          </p>
          <p className="text-xs text-gray-400 mt-2">
            ⚠️ Este app é informativo. Sempre consulte seu médico para orientações específicas.
          </p>
        </div>
      </footer>
    </div>
  );
}
