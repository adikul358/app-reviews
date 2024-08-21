import DashboardContainer from "../DashboardContainer";
import ReviewCard from "./ReviewCard";
import { format } from "date-fns";

const data = [
  {
    rating: 4,
    thumbs: 150,
    content: "Netflix is just awesome. I mean who wouldn't think that, it has great content, streaming quality and more. But I give it 4 stars because while watching a movie the controls sometimes automatically get locked.",
    platform: "Play Store",
    sentiment: "Positive",
    date: "2023-08-01"
  },
  {
    rating: 5,
    thumbs: 140,
    content: "Netflix is the first app I bought. Movies, series, TV shows, yes, still more to choose from. I love Netflix. You can always find something to watch.",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-07-15"
  },
  {
    rating: 1,
    thumbs: 135,
    content: "For the past 2 years, Netflix has not worked properly on my 4-year-old Smart TV. It freezes up while loading movies. With all the price increases, they need to get it together.",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2023-06-25"
  },
  {
    rating: 3,
    thumbs: 120,
    content: "Netflix keep getting worse and worse. Literally unusable for travel and offline downloads. It's much more affordable to buy/rent the digital shows you want from elsewhere.",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2023-05-20"
  },
  {
    rating: 4,
    thumbs: 110,
    content: "I've been a member of Netflix for a few years now and never had a problem. I did recently cancel my subscription due to price change but returned after a month as other services weren't as good as Netflix.",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-04-10"
  },
  {
    rating: 2,
    thumbs: 105,
    content: "2/14/24 update - still awful. It still freezes every time I go out of what I'm watching to respond to a text. Honestly, it isn't worth the price anymore with all the other options available.",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2024-02-14"
  },
  {
    rating: 1,
    thumbs: 100,
    content: "Consistently getting worse!! Algorithm does a poor job of guessing what I want. The new household policy doesn't account for people who split time between two houses. I plan on canceling my subscription.",
    platform: "App Store",
    sentiment: "Negative",
    date: "2024-03-30"
  },
  {
    rating: 2,
    thumbs: 90,
    content: "First, Netflix crashes often when I'm watching it. Also, add a recently watched category. When I fall asleep during a movie, I can't find it the next day. Continue to watch is only helpful if the movie didn't get completed!",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2023-11-10"
  },
  {
    rating: 3,
    thumbs: 85,
    content: "This app needs some serious work. On my Roku TV and my phone, the audio is low. If I exit the app for even 5 seconds, it will reset my show. The closed captioning keeps turning itself on no matter how many times I turn it off.",
    platform: "App Store",
    sentiment: "Negative",
    date: "2023-12-15"
  },
  {
    rating: 5,
    thumbs: 75,
    content: "One of the best things about Netflix is it consumes very less data and can play any video in low internet speed. However, recent updates have made Netflix unable to watch any video when the phone is on voice call.",
    platform: "Play Store",
    sentiment: "Neutral",
    date: "2023-07-05"
  },
]

const sortData = (a, b) => (b.thumbs - a.thumbs)


export default function MostRated() {
  return (
    <DashboardContainer title="Most Rated" padding={0}>
      <div className="flex flex-col space-y-6 p-4">
        {data.sort(sortData).map((v,i) => (
          <ReviewCard
            rating={v.rating}
            date={format(new Date(v.date), "d MMM y")}
            platform={v.platform}
            sentiment={v.sentiment}
            thumbs={v.thumbs}
            text={v.content}
          />
        ))}
      </div>
    </DashboardContainer>
  )
}