'use client'

import { useContext, createContext, useState, Dispatch, SetStateAction } from "react"

type DataType = {
    name: string
}

interface ContextProps {
    name: DataType[]
    setName: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps> ({
    name: [],
    setName: (): DataType[] => []
})


export const GlobalContextProvider = ({ children })=> {
    const [name, setName] = useState<[{name: ''}] | DataType[]>([{name: ''}]);

    return(
        <GlobalContext.Provider value={{ name, setName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
