import React from 'react'

type FooterColumnProps = {
    title: string,
    children: React.ReactNode
}

const FooterColumn = ({
    title,
    children
}: FooterColumnProps) => {
  return (
    <div className=''>
        <h4 className='font-bold py-4 lg:py-10 text-lg lg:text-xl'>{title}</h4>
        {children}
    </div>
  )
}

export default FooterColumn