import { useContext } from 'react'
import { AppContext } from '../context/usercontext'

export default function useAppContext() {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('Não está dentro do contexto')
  }

  return context
}