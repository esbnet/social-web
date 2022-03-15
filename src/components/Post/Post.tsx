import { Container } from './styles';
import { MoreVert } from '@material-ui/icons';

export function Post() {
  return (
    <Container>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src="/assets/person/1.jpeg" alt="Imagem do post" />
            <span className="postUserName">Edmilson Soares</span>
            <span className="postDate">5 minutos atrás</span>
          </div>
          <div className="postTopRight">
            <MoreVert className='postMore' />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Olá! Este é meu primeiro post. :)</span>
          <img className='postImage' src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottonLeft">
            <img className='postLikeIcon' src="/assets/like.png" alt="" />
            <img className='postLikeIcon' src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">25 pessoas gostam disso</span>
          </div>
          <div className="postBottonRight">
            <span className="postCommentCounter">9 comentaram</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
