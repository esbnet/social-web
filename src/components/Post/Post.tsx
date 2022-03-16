import { Container } from './styles';
import { MoreVert } from '@material-ui/icons';

import { Users } from '../../dummyData';
import { useState } from 'react';

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

  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  function likeHandler() {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }

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
            <img className='postLikeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
            <img className='postLikeIcon' src="/assets/heart.png" alt="" onClick={likeHandler} />
            <span className="postLikeCounter">{likes} pessoa(s) gosta(ram)</span>
          </div>
          <div className="postBottonRight">
            <span className="postCommentCounter">{post.comment} comentário(s)</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
