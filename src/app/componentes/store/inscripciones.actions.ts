import { inscripciones } from "src/app/interfaces/inscripciones";

export class AgregarInscripcion {

    static readonly type = '[Inscripcion page] AgregarInscripcion';
    constructor(public payload: inscripciones){


    }

}

export class EliminarInscripcion {

    static readonly type = '[Inscripcion page] EliminarInscripcion';

    constructor (public id: string) {}

}