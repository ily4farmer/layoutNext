import { observer } from 'mobx-react-lite'
import React, { useCallback } from 'react'
import  useAppState  from '../../store/StoreMobX';

const index:React.FC = observer(() => {
  const { connectStore: state } = useAppState();
  const metamask = useCallback(async() => await state.addTodo(), [])
  return (
    <div>
      <h1>MobX Store</h1>
      <button onClick={metamask}>Connect Metamsk</button>
      <div>{state.getWalletAddress}</div>
    </div>
  )
})

export default index