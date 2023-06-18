import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
  ContentSearchInput,
  ListCards,
  SearchContainer,
  WrapperContainer,
} from './styles'
import { Header } from '../../components/Header'
import { ProfileCardComponent } from '../../components/ProfileCardComponent'
import Swal from 'sweetalert2'

interface PostProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Blog() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      axios
        .get(
          'https://api.github.com/search/issues?q=%20repo:caiobarbosadev/github-blog',
        )
        .then((response) => {
          setPosts(response.data.items)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setIsLoading(false)
        })
    }, 1500)
  }, [])

  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const search = data.query

    axios
      .get(
        `https://api.github.com/search/issues?q=${search}%20repo:caiobarbosadev/github-blog`,
      )
      .then((response) => {
        setPosts(response.data.items)
      })
  }

  if (isLoading) {
    Swal.fire({
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    return null
  }

  Swal.close()

  return (
    <>
      <Header />

      <WrapperContainer>
        <ProfileCardComponent />

        <SearchContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>

          <ContentSearchInput
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </SearchContainer>

        <ListCards>
          {posts.map((post) => {
            return (
              <Link key={post.number} to={`/${post.number}`} className="card">
                <header>
                  <h3>{post.title}</h3>
                  <span>{post.created_at}</span>
                </header>

                <div className="card-content-wrapper">
                  <span className="card-content">{post.body}</span>
                </div>
              </Link>
            )
          })}
        </ListCards>
      </WrapperContainer>
    </>
  )
}
