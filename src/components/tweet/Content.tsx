import React from 'react';
import TweetConfig from '../../types/TweetConfig';
import useText from '../../hooks/useText';
import ImagesContainer from './ImagesContainer';

function Content({ config }: { config: TweetConfig }) {
  const text = useText(config.text);

  return (
    <div className="tweet-content">
      {config.replies.length > 0 ?
      <div className='user-nickname text-sm py-2'>
            Replying to {config.replies.map((reply) => (
                   <span className="fake-link mention"><a href={'https://twitter.com/' + reply}> {reply}</a></span>

            ))}

        </div>
        : null
        }
      {text && <div className="txt">{text}</div>}
      <ImagesContainer config={config} />
    </div>
  );
}

export default Content;
