import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Container } from '@/components/Container'
import { HeaderComponent } from '@/components/HeaderComponent'
import { PersonalInformation } from '@/components/About/PersonalInformation'
import { Education } from '@/components/About/Education'
import { TechnicalSkill } from '@/components/About/TechnicalSkill'
import { Experience } from '@/components/About/Experience'
import { Hobbies } from '@/components/About/Hobbies'

export default function About() {
  return (
    <Container>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      overScrollMode='never'
      >
        <HeaderComponent currentPage='About'/>
        <PersonalInformation/>
        <Education/>
        <TechnicalSkill/>
        <Experience/>
         <Hobbies/>
      </ScrollView>
       
    </Container>
  )
}
