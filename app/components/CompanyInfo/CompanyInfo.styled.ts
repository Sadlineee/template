import styled from 'styled-components'

export const CompanyInfoBox = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  width: 100%;
  text-align: center;

  hr {
    width: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
  }
`

export const InfoTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

export const InfoText = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
`