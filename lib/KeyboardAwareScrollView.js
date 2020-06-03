import React from 'react'
import { ScrollView } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents((props) => <ScrollView {...props} />)
