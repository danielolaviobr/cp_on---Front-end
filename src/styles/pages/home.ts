import styled from 'styled-components'

export const ContentWrapper = styled.main`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;

  display: flex;
  justify-content: space-between;
`

export const TextInputArea = styled.textarea`
  background: #ffffff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  width: 1023px;
  height: 637px;

  resize: none;

  padding: 10px;
  margin-right: 50px;

  outline: none;
  border: none;
`

export const ActionButton = styled.button`
  width: 250px;
  height: 67px;

  background: #27cbff;

  color: #ffffff;
  font-size: 48px;
  line-height: 64px;

  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  border: none;
  outline: none;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #4cccf5;
    width: 260px;
    height: 75px;
    font-size: 50px;
    box-shadow: 0px 0px 20px 7px rgba(0, 0, 0, 0.1);
  }
`
export const RandomID = styled.textarea`
  width: 400px;
  height: 40px;

  padding: 5px;

  border-radius: 10px;

  outline: none;
  border: none;
  resize: none;

  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;
  text-align: center;
  font-size: 16px;

  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);

  &::placeholder {
    padding-top: -5px;
    text-align: center;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`
export const SideBar = styled.div`
  margin-right: 200px;
  margin-top: 100px;
  margin-bottom: 350px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const ClickLabel = styled.label`
  font-size: 24px;
  font-weight: 600;

  margin-bottom: -10px;
`
