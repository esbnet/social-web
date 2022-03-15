import { Container } from './styles';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

export function Share() {
  return (
    <Container>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProgileImgage' src="/assets/person/1.jpeg" alt="" />
          <input placeholder='What is in your mind?' className="shareInput" />
        </div>
        <hr className="shareSeparator" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Foto or Vídeo</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Localização</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Emotions</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </Container>
  );
};

