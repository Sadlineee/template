import styled from 'styled-components'

export const TopSectionBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4rem 0;
  width: 100%;

  @media ${({ theme }) => theme.media.small} {
    margin: 5rem 0;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  hr {
    width: 40%;
    border: 3px solid ${({ theme }) => theme.colors.white};
    border-radius: 50px;
  }
`

export const PrimaryText = styled.span`
  width: 60%;
  font-size: 7rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  animation: textRotate 0.75s ease-out;

  @media ${({ theme }) => theme.media.small} {
    width: 90%;
    font-size: 4rem;
  }

  @keyframes textRotate {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`

export const SecondaryText = styled.span`
  width: 60%;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    width: 100%;
  }
`

export const Shape = styled.div`
  z-index: -1;
  aspect-ratio: 1.25 / 1;
  margin-left: -65%;
  width: 65%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  animation: shadow 6s linear infinite;

  @keyframes shadow {
    0%, 100% { 
      box-shadow: 0 0 100px ${({ theme }) => theme.colors.white} 
    }
    50% { 
      box-shadow: 0 0 500px ${({ theme }) => theme.colors.white} 
    }
  }

  @media ${({ theme }) => theme.media.small} {
    aspect-ratio: 1;
    margin-left: -80%;
    width: 80%;
  }
`