import React, {useState, useEffect} from 'react'
import {Text} from 'react-native'
import { Container } from '@/components/Container'
import { HeaderComponent } from '@/components/HeaderComponent'
import { getFonts} from '@/functions/getfonts'
import { Loader } from '@/components/loader'
import { Contents } from '@/components/Home/Contents'


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

  if(status === 'loading') return (
    <Container>
      <Loader/>
    </Container>
  )

  return (
    <Container>
        <HeaderComponent currentPage='Home'/>
        <Contents/>
    </Container>
  )
}
