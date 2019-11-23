import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React, { Component } from 'react';

class Twitter extends Component {

  render () {

    return ( 
    	<div>
 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="stresboy27"
  options={{height: 400}}
/>
  <TwitterFollowButton
    screenName={'stresboy27'}
  />
    </div>
    )
  }
}

export default Twitter;