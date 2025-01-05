
export enum EnumStatus {
    A_FAIRE = "A faire",
    EN_COURS = "En cours",
    TERMINE = "Terminé"
  }

export interface Task{
    id: string;
    title: string;
    description?: string;
    status: EnumStatus,
    created_at: Date
}