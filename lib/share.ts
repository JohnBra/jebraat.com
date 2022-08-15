import siteMetadata from '@/data/siteMetadata'

export function shareToLinkedIn(url: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${
    encodeURIComponent(url)
  }`
}

export function shareToTwitter(url: string, title: string, author?: string) {
  const text =
    encodeURIComponent(
      `"${title}" by ${author ?? siteMetadata.twitterHandle}`,
    ) +
    '%0A%0A' +
    encodeURIComponent(url)
  return `https://twitter.com/intent/tweet?text=${text}`
}

export function shareToReddit(url: string, title: string) {
  return `https://www.reddit.com/submit?url=${encodeURIComponent(
    url,
  )}&title=${encodeURIComponent(title)}`
}

export function shareToHackerNews(url: string, title: string) {
  return `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
    url,
  )}&t=${encodeURIComponent(title)}`
}

export function shareToFacebook(url: string) {
  return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`
}

const share = {
  toLinkedIn: shareToLinkedIn,
  toTwitter: shareToTwitter,
  toReddit: shareToReddit,
  toHackerNews: shareToHackerNews,
  toFacebook: shareToFacebook,
}

export default share
