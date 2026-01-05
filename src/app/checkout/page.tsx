"use client";

import { useState } from "react";
import { Baby, Check, CreditCard, Lock, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de processamento de pagamento
    setTimeout(() => {
      alert("🎉 Pagamento processado com sucesso! Você receberá um email com as instruções de acesso.");
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200">
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
              </div>
            </div>
            <Link href="/landing">
              <Button variant="ghost" className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Finalize sua Compra
            </h1>
            <p className="text-gray-600">
              Você está a um passo de transformar sua maternidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário de Checkout */}
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                        1
                      </div>
                      Informações Pessoais
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Maria Silva"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="maria@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informações de Pagamento */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                        2
                      </div>
                      Pagamento Seguro
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <div className="relative mt-1">
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            maxLength={19}
                          />
                          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Validade</Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            type="text"
                            placeholder="MM/AA"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                            maxLength={5}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc">CVV</Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            type="text"
                            placeholder="123"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Pagamento */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg py-6"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Finalizar Compra - R$ 97,00
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Lock className="w-4 h-4" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                    <span>•</span>
                    <span>Criptografia SSL</span>
                  </div>
                </form>
              </Card>
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Resumo do Pedido
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Baby className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        MamãeCare - Acesso Vitalício
                      </h3>
                      <p className="text-sm text-gray-600">
                        Todas as ferramentas + atualizações
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Calculadora de Gestação</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Dicas Semanais Personalizadas</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Lembretes de Consultas</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Identificador de Choro</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Guia Completo para Mães</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Suporte Prioritário</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>R$ 197,00</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Desconto (50%)</span>
                    <span>- R$ 100,00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      R$ 97,00
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-800">
                      <p className="font-semibold mb-1">Garantia de 7 dias</p>
                      <p className="text-green-700">
                        Se não gostar, devolvemos 100% do seu dinheiro
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-purple-800">
                      <p className="font-semibold mb-1">Bônus Exclusivo</p>
                      <p className="text-purple-700">
                        E-book "Primeiros 100 Dias" (valor R$ 47)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Garantias e Segurança */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Garantia de 7 Dias
              </h3>
              <p className="text-sm text-gray-600">
                Satisfação garantida ou seu dinheiro de volta
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Pagamento Seguro
              </h3>
              <p className="text-sm text-gray-600">
                Criptografia SSL e proteção de dados
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Acesso Imediato
              </h3>
              <p className="text-sm text-gray-600">
                Comece a usar agora mesmo após o pagamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
