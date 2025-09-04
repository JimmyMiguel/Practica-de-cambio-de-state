import { state } from "./state";

export function name(conteiner: Element) {
    const lastState = state.getState()


    // esta funcion trae de la data el ultimo estado
    // luego creo una funcion para renderizar  lo que me pase por parametro
    // tambien lo agrego el componente a el conteiner 
    function render(nombre) {
        const h1 = document.createElement('h1')
        h1.textContent = nombre
        h1.style.border = "1px solid black"
        h1.addEventListener('click', () => {

            state.setState({
                ...lastState,
                nombre: 'Jose'

            })
        })
        if (conteiner.firstChild) {
            conteiner.firstChild.remove()
        }
        conteiner.appendChild(h1)

    }
    state.subscribe(() => {
        const newState = state.getState();
        render(newState.nombre)

        
    })

    render(lastState.nombre)
    
}