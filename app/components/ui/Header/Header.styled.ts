import styled from 'styled-components'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa6'

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
  height: 5rem;

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const AppTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1.75rem;

  @media ${({ theme }) => theme.media.small} {
    font-size: 2rem;
  }
`

export const PhoneNumber = styled.span`
  margin-right: 2rem;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`

export const TelegramLink = styled(FaTelegram)`
  color: #47A6FF;
`

export const InstagramLink = styled(FaInstagram)`
  color: #FF3985;
`

export const WhatsappLink = styled(FaWhatsapp)`
  color: #25D366;
`