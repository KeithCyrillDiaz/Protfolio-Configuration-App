import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Container } from '@/components/Container'
import { HeaderComponent } from '@/components/HeaderComponent'

export default function Project() {
  return (
    <Container>
         <HeaderComponent currentPage='Projects'/>
         <Text className='text-white'>Project</Text>
    </Container>
  )
}
