import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'
import {Link} from 'expo-router'
import { Container } from '@/components/Container'
import { HeaderComponent } from '@/components/HeaderComponent'
import { getFonts } from '@/functions/getfonts'
import { Loader } from '@/components/loader'

export default function Home() {

  const [status, setStatus] = useState<statusTypes>('idle')
  const loadFonts = async () => {
    try {
      setStatus('loading')
      await getFonts()
    } catch (error) {
      console.log("error: ", error)
    } finally {
      setStatus('idle')
    }
  }

  useEffect(() => {
    loadFonts()
  },[])

  if(true) return (
    <Container>
      <Loader/>
    </Container>
  )

  return (
    <Container>
        <HeaderComponent currentPage='Home'/>
        <Text className='text-white'>Home</Text>
    </Container>
  )
}
