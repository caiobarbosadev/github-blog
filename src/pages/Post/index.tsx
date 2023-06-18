import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DetailsContainer, MarkdownContainer, WrapperContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import Swal from 'sweetalert2'

interface UserProps {
  login: string
}

interface PostProps {
  html_url: string
  title: string
  user: UserProps
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      axios
        .get(
          `https://api.github.com/repos/caiobarbosadev/github-blog/issues/${id}`,
        )
        .then((response) => {
          setPost(response.data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setIsLoading(false)
        })
    }, 1500)
  }, [id])

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
        <DetailsContainer>
          <div className="buttons">
            <Link to="/" className="button">
              <div>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              VOLTAR
            </Link>

            <Link to={post.html_url} target="_blank" className="button">
              VER NO GITHUB
              <div>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </Link>
          </div>

          <h1>{post.title}</h1>

          <div className="infos">
            <div className="info-item">
              <FontAwesomeIcon icon={faGithub} />
              <span>{post.user?.login}</span>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faCalendar} />
              <span>{post.created_at}</span>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faComment} />
              <span>
                {post.comments === 0 || post.comments === 1
                  ? `${post.comments} comentário`
                  : `${post.comments} comentários`}
              </span>
            </div>
          </div>
        </DetailsContainer>

        <MarkdownContainer>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </MarkdownContainer>
      </WrapperContainer>
    </>
  )
}
