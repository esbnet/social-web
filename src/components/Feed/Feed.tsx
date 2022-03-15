import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Container } from './styles';

export function Feed() {
  return (
    <Container className='feed'>
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </Container>
  );
};
