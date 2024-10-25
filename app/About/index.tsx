import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Container } from '@/components/Container'
import { HeaderComponent } from '@/components/HeaderComponent'

export default function About() {
  return (
    <Container>
         <HeaderComponent currentPage='About'/>
         <Text className='text-white'>About</Text>
    </Container>
  )
}
