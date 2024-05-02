export async function getTweets(ids: string[]) {
  if (ids.length === 0) {
    return []
  }
  
  const queryParams = new URLSearchParams({
    ids: ids.join(','),
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields':
      'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
  })

  const response = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
      },
    },
  )

  const tweets = await response.json()
  console.log("tweets", tweets)

  const getAuthorInfo = (author_id: string) => {
    return tweets.includes.users.find((user: any) => user.id === author_id)
  }

  const getReferencedTweets = (mainTweet: any) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet: any) => {
        const fullReferencedTweet = tweets.includes.tweets.find(
          (tweet: any) => tweet.id === referencedTweet.id,
        )

        return {
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
          ...fullReferencedTweet,
        }
      }) || []
    )
  }

  return (
    tweets.data.reduce((allTweets: any, tweet: any) => {
      const tweetWithAuthor = {
        ...tweet,
        media:
          tweet?.attachments?.media_keys.map((key: string) =>
            tweets.includes.media.find((media: any) => media.media_key === key),
          ) || [],
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id),
      }

      return [tweetWithAuthor, ...allTweets]
    }, []) || [] // If the Twitter API key isn't set, don't break the build
  )
}
