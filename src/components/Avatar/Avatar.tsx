import React from 'react'
import "./Avatar.css"

type AvatarProps = {
    avatar_url: string
}
export const Avatar:React.FC<AvatarProps> = ({avatar_url}) => {
  return (
    <img className='avatar' src={avatar_url} alt="user" />
  )
}
