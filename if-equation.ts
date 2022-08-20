type If<T> = (cond?: boolean) => {then: Then<T>}
type Then<T> = (func: () => T, data?: T, cond?: boolean) => {
    data: T|undefined,
    else?: If<T>,
}

const ifeq = <T>(cond?: boolean): { then: Then<T> } => {
    const ifMethod: Then<T> = ifFunc => {
        const data = cond ? ifFunc() : undefined
        const elseMethod: Then<T> = elseFunc => {
            return { data: data ?? elseFunc() }
        }
        const elseifMethod: Then<T> = (elseifFunc, prev, cond) => {
            const data = prev ?? (cond ? elseifFunc() : undefined)
            return {
                data,
                else (cond = undefined) {
                    if ( cond === undefined ) return { then: elseMethod }
                    return { then: (func => elseifMethod(func, data, cond)) }
                },
            }
        }
        return {
            data,
            else (cond = undefined) {
                if ( cond === undefined ) return { then: elseMethod }
                return { then: (func => elseifMethod(func, data, cond)) }
            },
        }
    }
    return { then: ifMethod }
}
