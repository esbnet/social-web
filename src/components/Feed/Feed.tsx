import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Container } from './styles';

import { Posts } from '../../dummyData';

export function Feed() {
  return (
    <Container className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} {...p} />
        ))}
      </div>
    </Container>
  );
};
