import { PrimaryText, SecondaryText, Shape, TextBox, TopSectionBox } from './TopSection.styled'

export default function TopSection() {
  return (
    <TopSectionBox>
      <TextBox>
        <PrimaryText>Лучшее решение для бизнеса</PrimaryText>
        <hr />
        <SecondaryText>Мы предлагаем услуги по внедрению инновационных технологий, которые помогут автоматизировать бизнес-процессы и оптимизировать системные решения.</SecondaryText>
      </TextBox>
      <Shape />
    </TopSectionBox>
  )
}