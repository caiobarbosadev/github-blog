import styled from 'styled-components'

export const ProfileCard = styled.section`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5rem;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.125rem 1.75rem rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 2rem;

  .profile-image {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }

  .profile-card-right {
    .profile-card-right-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        color: ${(props) => props.theme.blue};
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 1px solid transparent;

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }
      }
    }

    .bio {
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
      margin-bottom: 1.5rem;
    }
  }
`

export const ProfileCardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CustomFontAwesomeIcon = styled.div`
  color: ${(props) => props.theme['base-label']};
`
