import styled from 'styled-components'

export const ContentWrapper = styled.main`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const TextInputArea = styled.textarea`
  background: #ffffff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  width: 1400px;
  height: 637px;

  resize: none;

  padding: 10px;

  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const ClickLabel = styled.label`
  font-size: 24px;
  font-weight: 600;

  margin-bottom: 10px;
`
