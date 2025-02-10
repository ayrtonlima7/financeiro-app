import { createContext } from "react"

export interface TransactionProps {
    value: number
    date: string
    category: string
    origin: string
    created_at: string
    deleted_at?: string
    updated_at?: string
    user_id: number
}

export const TransactionInitialState: TransactionProps = {
    value: 0,
    date: '',
    category: '',
    origin: '',
    created_at: '09/02/2025',
    updated_at: '09/02/2025',
    user_id: 1

}

export const TransactionContext = createContext({
    transaction: TransactionInitialState,
    setTransaction: () => {}

})
