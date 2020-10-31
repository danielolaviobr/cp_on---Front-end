import React, { useState } from 'react'
import Head from 'next/head'

import api from '../services/api'

import {
  ActionButton,
  ClickLabel,
  ContentWrapper,
  RandomID,
  SideBar,
  TextInputArea
} from '../styles/pages/home'

const Home: React.FC = () => {
  const [text, setText] = useState('')
  const [randomID, setRandomID] = useState('')
  const [textAreaElement, setTextAreaElement] = useState<HTMLTextAreaElement>()
  const [copyText, setCopyText] = useState('Click to copy code')

  function handleSendText(text: string) {
    api.post('/create', { text: text }).then(response => {
      setRandomID(`${response.data.uid}`)
    })
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <ContentWrapper>
        <TextInputArea
          autoFocus={true}
          className="text-input"
          placeholder="Insert text to be pasted"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <SideBar>
          <ClickLabel>{copyText}</ClickLabel>
          <RandomID
            readOnly
            value={randomID}
            placeholder="Click on paste to generate your code"
            ref={textarea => setTextAreaElement(textarea)}
            onClick={() => {
              textAreaElement.select()
              document.execCommand('copy')
              setCopyText('Copied')
            }}
          />
          <ActionButton
            className="send-text"
            onClick={() => {
              handleSendText(text)
              setCopyText('Click to copy link')
            }}
          >
            Paste
          </ActionButton>
        </SideBar>
      </ContentWrapper>
    </div>
  )
}

export default Home
