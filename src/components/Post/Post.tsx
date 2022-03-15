import { Container } from './styles';
import { MoreVert } from '@material-ui/icons';

import { Users } from '../../dummyData';

interface PostProps {
  id: number;
  desc?: string;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
}

export function Post(post: PostProps) {
  
  const user = Users.find(u => u.id === post.userId);

  return (
    <Container>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src={user?.profilePicture} alt="Imagem do post" />
            <span className="postUserName">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className='postMore' />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImage' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottonLeft">
            <img className='postLikeIcon' src="/assets/like.png" alt="" />
            <img className='postLikeIcon' src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{post.like} pessoa(s) gosta(ram)</span>
          </div>
          <div className="postBottonRight">
            <span className="postCommentCounter">{post.comment} comentário(s)</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
