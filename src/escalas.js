import { writable } from 'svelte/store';

function createStoreEscalas() {
    const {subscribe, set} = writable(undefined)

    let escalas = {
        "Dó Maior": "Nenhum",
        "Sol Maior": "Fá#",
        "Ré Maior": "Fá# e Dó#", 
        "Lá Maior": "Fá#, Dó# e Sol#", 
        "Fá Maior": "SiB", 
        "Sib Maior": "Sib e Mib",
        "Lá Menor": "Nenhum",
        "Mi Menor": "Fá#",
        "Si Menor": "Fá# e Dó#",
        "Fá# Menor": "Fá#, Dó# e Sol#",
        "Ré Menor": "SiB",
        "Sol Menor": "SiB e MiB"
    }

    return {
        subscribe,
        createNew : async() => {
            let keys = Object.keys(escalas)
            let randomKey = keys[ keys.length * Math.random() << 0]
            let randomObject = [
                randomKey, 
                escalas[randomKey]
            ]
            set(randomObject)
        }
    }
}

export const escala = createStoreEscalas()