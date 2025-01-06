import styled from 'styled-components'

export const EmployeesTitle = styled.span`
  margin-bottom: 5rem;
  font-size: 3.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

export const EmployeesBox = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const EmployeeCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 20rem;
`

export const EmployeePhoto = styled.div`
  position: relative;
  width: 16rem;
`

export const EmployeeDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  hr {
    width: 3rem;
    margin: 1rem 0;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
  }
`

export const EmployeeName = styled.span`
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const EmployeeOtherInfo = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`