import type { Presenca } from "./Presenca";

export interface Chamada {

    id: number;
    turmaId: number;
    data: string;
    presencas: Presenca[];

}