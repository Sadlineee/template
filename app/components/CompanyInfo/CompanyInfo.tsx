import { companyInfoData } from '@/data/companyInfoData'
import { CompanyInfoBox, InfoCard, InfoText, InfoTitle } from './CompanyInfo.styled'

export default function Information() {
  return (
    <CompanyInfoBox>
      {companyInfoData.map((el) => (
        <InfoCard key={el.id}>
          <InfoTitle>{el.title}</InfoTitle>
          <hr />
          <InfoText>{el.text}</InfoText>
        </InfoCard>
      ))}
    </CompanyInfoBox>
  )
}