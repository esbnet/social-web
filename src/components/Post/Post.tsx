import { MoreVert } from '@material-ui/icons';
import { useState } from 'react';

import { Container } from './styles';

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

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

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
            <img className='postProfileImage' src={publicFolder + post.photo} alt="Imagem do post" />
            <span className="postUserName">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className='postMore' />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImage' src={publicFolder + post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottonLeft">
            <img className='postLikeIcon' src={publicFolder + 'like.png'} alt="" onClick={likeHandler} />
            <img className='postLikeIcon' src={publicFolder + 'heart.png'} alt="" onClick={likeHandler} />
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
