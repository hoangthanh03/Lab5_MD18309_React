import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import List_Screen from './src/Screen/List_Screen'

const App = () => {
  return (
    <Provider>
      <List_Screen/>
    </Provider>
  )
}

export default App