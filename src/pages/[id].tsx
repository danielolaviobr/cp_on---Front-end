import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import api from '../services/api'

import { TextInputArea, ContentWrapper, ClickLabel } from '../styles/pages/id'

const Home: React.FC = () => {
  const [text, setText] = useState('')
  const [textAreaElement, setTextAreaElement] = useState<HTMLTextAreaElement>()
  const [copyText, setCopyText] = useState('Click to copy')
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    id &&
      api.get(`/${id}`).then(response => {
        setText(response.data.text)
      })
  }, [id])

  return (
    <div>
      <Head>
        <title>Page: {id}</title>
      </Head>

      <ContentWrapper>
        <ClickLabel>{copyText}</ClickLabel>
        <TextInputArea
          readOnly
          value={text}
          ref={textarea => setTextAreaElement(textarea)}
          onClick={() => {
            textAreaElement.select()
            document.execCommand('copy')
            setCopyText('Copied')
          }}
        />
      </ContentWrapper>
    </div>
  )
}

export default Home
