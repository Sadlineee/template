import styled from 'styled-components'
import { FaStar } from 'react-icons/fa6'

export const ReviewBox = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  width: 100%;
`

export const ReviewTitle = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

export const StarsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Star = styled(FaStar)`
  font-size: 2rem;
  color: #FCA903;

  @media ${({ theme }) => theme.media.small} {
    font-size: 1.25rem;
  }
`

export const ReviewSum = styled.u`
  font-size: 1.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
`