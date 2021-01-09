import { Injectable } from '@nestjs/common';
import { PostDTO } from './post.dto';

import * as Sentiment from 'sentiment';
import * as Pusher from 'pusher';

@Injectable()
export class MessageService {
  addMessage(post: PostDTO) {
    const sentiment = new Sentiment();
    const pusher = new Pusher({
      appId: '1135365',
      key: '6a71269757e5f7aea970',
      secret: 'a22bc08d48699d3827ea',
      cluster: 'eu',
      useTLS: true,
    });

    const sentimentScore = sentiment.analyze(post.message).score;

    const data = {
      user: post.user,
      message: post.message,
      score: sentimentScore,
    };

    pusher.trigger('chats', 'new-chat', data);
  }
}
