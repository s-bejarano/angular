import { Action, State, StateContext } from "@ngxs/store";
import { InscripcionesStateModel } from "./inscripciones.model";
import { AgregarInscripcion, EliminarInscripcion } from "./inscripciones.actions";
import { inscripciones } from "src/app/interfaces/inscripciones";
import { filter } from "rxjs";

@State<InscripcionesStateModel>({


    name: 'inscricpiones',
    defaults: {

        listInscripciones: []
    }
})

export class InscricpionesState {

    @Action(AgregarInscripcion) agregar({ getState, patchState }: StateContext<InscripcionesStateModel>, { payload }: AgregarInscripcion) {

      /* const state = ctx.getState();

       ctx.setState({

        ...state,
            listInscripciones: [
                ...state.listInscripciones,
                action.payload
            ]
       })

*/  patchState({

        listInscripciones: [
            ...getState().listInscripciones,
            payload
        ]

    })


    }


    @Action(EliminarInscripcion) eliminarInscripcion({getState, patchState}: StateContext<InscripcionesStateModel>, {id}: EliminarInscripcion ) {
        patchState({


            listInscripciones: [

                ...getState().listInscripciones.filter( inscripcion => inscripcion.id !== id)
            ]
        })
        
    }
}
