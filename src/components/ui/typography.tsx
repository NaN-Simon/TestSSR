import React, { useEffect, useState, type FC } from 'react'
import { TypographyStyle } from '../enum/typography'

interface Itypography {
  children: React.ReactNode
  variant: TypographyStyle
  hasShadow?: boolean
  style?: React.CSSProperties
  customClass?: string
  hasLine?: boolean
  color?: string
}

const typographyStyleMap = {
  [TypographyStyle.H1]: "font-kanit scroll-m-20 font-extrabold text-4xl  lg:text-6xl", /* 60px */
  [TypographyStyle.H2]: "font-kanit scroll-m-20 text-2xl md:text-[55px] leading-[3rem]", /* 55px */
  [TypographyStyle.H3]: "font-kanit scroll-m-20 text-2xl md:text-4xl", /* 36px */
  [TypographyStyle.H4]: "font-kanit scroll-m-20 text-xl tracking-tight", /* 20px */
  [TypographyStyle.H5]: "font-kanit text-base", /* 16px */
  [TypographyStyle.H6]: "font-kanit scroll-m-20 text-sm tracking-tight", /* 14px */
};

const typography: FC<Itypography> = ({ children, variant, hasShadow = false, style = {}, customClass = '', hasLine = false }) => {
  const buttonClass = typographyStyleMap[variant]
  const [shadowStyle, setShadowStyle] = useState(hasShadow? '2px 6px 6px #00000033' : 'none')

  useEffect(() => {
    setShadowStyle(hasShadow? '2px 6px 6px #00000033' : 'none');
  },[hasShadow])
  
  const afterLine = hasLine ? "after:block after:content-[''] after:border-solid after:border-[#ffffff] after:w-16 after:border-t-8 after:m-t-2 after:mx-auto after:mt-5 font-bold text-[#fffcdb]" : ''
  return (
    <div
      // aria-label='Typography'
      className={`${buttonClass} ${customClass} ${afterLine}`}
      style={{ textShadow: shadowStyle, ...style }}
    >{children}</div>
  )
}

export default typography