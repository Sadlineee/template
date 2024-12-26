import styled from 'styled-components'

export const HomeBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15rem;

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const DashedLine = styled.hr`
  margin: 5rem 0;
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.colors.white};
`