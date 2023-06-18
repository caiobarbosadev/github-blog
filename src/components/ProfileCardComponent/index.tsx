import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { CustomFontAwesomeIcon, ProfileCard, ProfileCardInfo } from './styles'

interface ProfileCardProps {
  name?: string
  html_url?: string
  bio?: string
  avatar_url?: string
  login?: string
  company?: string
  followers?: number
}

export function ProfileCardComponent() {
  const [userData, setUserData] = useState<ProfileCardProps>({})

  useEffect(() => {
    axios
      .get('https://api.github.com/users/caiobarbosadev')
      .then((response) => {
        setUserData(response.data)
      })
  }, [])

  return (
    <ProfileCard>
      <img className="profile-image" src={userData.avatar_url} alt="" />

      <div className="profile-card-right">
        <div className="profile-card-right-top">
          <h2>{userData.name}</h2>

          <a href={userData.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <span className="bio">{userData.bio}</span>

        <ProfileCardInfo>
          <div>
            <CustomFontAwesomeIcon>
              <FontAwesomeIcon icon={faGithub} />
            </CustomFontAwesomeIcon>
            <span>{userData.login}</span>
          </div>

          <div>
            <CustomFontAwesomeIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </CustomFontAwesomeIcon>
            <span>{userData.company}</span>
          </div>

          <div>
            <CustomFontAwesomeIcon>
              <FontAwesomeIcon icon={faUserGroup} />
            </CustomFontAwesomeIcon>
            <span>{userData.followers} seguidores</span>
          </div>
        </ProfileCardInfo>
      </div>
    </ProfileCard>
  )
}
