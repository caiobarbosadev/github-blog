import styled from 'styled-components'

export const WrapperContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`

export const SearchContainer = styled.form`
  margin: 4.5rem 0 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const ContentSearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 0.375rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.blue};
  }
`

export const ListCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  .card {
    width: 26rem;
    height: 16.25rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 0.625rem;
    padding: 2rem;
    text-decoration: none;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }

    header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.25rem;

      h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-title']};
      }

      span {
        white-space: nowrap;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-span']};
      }
    }

    .card-content-wrapper {
      overflow: hidden;
      height: calc(100% - 3.25rem);
    }

    .card-content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
