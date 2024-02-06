import React from 'react'

const SvgComponent = ({
  fill = '#007ab9',
  ...props
}) => (
  <svg height={67} width={67} viewBox="0 0 67 67" {...props}>
    <path
      d="M49.837 48.137V36.425c0-6.274-3.35-9.194-7.816-9.194-3.604 0-5.219 1.982-6.119 3.373V27.71h-6.79c.09 1.917 0 20.428 0 20.428h6.79V36.729c0-.61.044-1.22.224-1.657.49-1.219 1.607-2.482 3.482-2.482 2.458 0 3.44 1.873 3.44 4.618v10.929h6.789zM21.959 24.922c2.367 0 3.842-1.569 3.842-3.531-.044-2.003-1.475-3.528-3.797-3.528s-3.841 1.525-3.841 3.528c0 1.962 1.474 3.531 3.753 3.531h.043zm3.395 23.215V27.71h-6.789v20.427h6.789zM3 4h60v60H3V4z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={fill}
    />
  </svg>
)

export default SvgComponent