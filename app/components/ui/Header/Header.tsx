import { oxanium } from '@/fonts/fonts'
import { HeaderBox, AppTitle, SocialMedia, PhoneNumber, TelegramLink, InstagramLink, WhatsappLink } from './Header.styled'

export default function Header() {
  return (
    <HeaderBox>
      <AppTitle className={oxanium.className}>
        temp
        <span style={{ color: '#FFFFFF' }}>late</span>
      </AppTitle>
      <SocialMedia>
        <PhoneNumber>+7 999 000 000</PhoneNumber>
        <TelegramLink />
        <InstagramLink />
        <WhatsappLink />
      </SocialMedia>
    </HeaderBox>
  )
}