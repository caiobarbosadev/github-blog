import styled from 'styled-components'

export const WrapperContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto 8rem;
`

export const DetailsContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5rem;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.125rem 1.75rem rgba(0, 0, 0, 0.2);

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    .button {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  .infos {
    display: flex;
    align-items: center;
    gap: 2rem;

    .info-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};

      span {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
      }
    }
  }
`

export const MarkdownContainer = styled.div`
  padding: 2.5rem 2rem;
  color: white;
`
