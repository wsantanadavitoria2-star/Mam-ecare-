"use client";

import { useState, useEffect } from "react";
import { Bell, Plus, Trash2, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
}

export function LembretesConsultas() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
  });

  // Carrega lembretes do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("appointments");
    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, []);

  // Salva lembretes no localStorage
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = () => {
    if (!newAppointment.title || !newAppointment.date || !newAppointment.time) {
      alert("Preencha título, data e horário");
      return;
    }

    const appointment: Appointment = {
      id: Date.now().toString(),
      ...newAppointment,
    };

    setAppointments([...appointments, appointment]);
    setNewAppointment({ title: "", date: "", time: "", notes: "" });
    setIsOpen(false);
  };

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter((apt) => apt.id !== id));
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-500" />
            <CardTitle>Lembretes de Consultas</CardTitle>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Consulta</DialogTitle>
                <DialogDescription>
                  Adicione um lembrete para não esquecer suas consultas
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium">Título</label>
                  <Input
                    placeholder="Ex: Consulta Pré-natal"
                    value={newAppointment.title}
                    onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Data</label>
                    <Input
                      type="date"
                      value={newAppointment.date}
                      onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Horário</label>
                    <Input
                      type="time"
                      value={newAppointment.time}
                      onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Observações (opcional)</label>
                  <Input
                    placeholder="Ex: Levar exames anteriores"
                    value={newAppointment.notes}
                    onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                  />
                </div>
                <Button onClick={addAppointment} className="w-full bg-gradient-to-r from-blue-500 to-cyan-600">
                  Salvar Lembrete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>
          Organize suas consultas e exames
        </CardDescription>
      </CardHeader>
      <CardContent>
        {sortedAppointments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Nenhuma consulta agendada</p>
            <p className="text-xs mt-1">Clique em "Adicionar" para criar um lembrete</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedAppointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-100 dark:border-blue-900"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">
                      {apt.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      📅 {new Date(apt.date).toLocaleDateString("pt-BR")} às {apt.time}
                    </p>
                    {apt.notes && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        💡 {apt.notes}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteAppointment(apt.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
