import DashboardContainer from "../DashboardContainer";
import ReviewCard from "./ReviewCard";
import { format } from "date-fns";

const data = [
  {
    rating: 5,
    thumbs: 200,
    content: "Netflix is my go-to babysitter. I just turn it on, and boom! The kids are silent for hours. It's like magic, but without the rabbit.",
    platform: "Play Store",
    sentiment: "Positive",
    date: "2023-08-01"
  },
  {
    rating: 4,
    thumbs: 180,
    content: "I watched so many shows on Netflix that it asked me if I’m still alive. Thanks, Netflix, but I prefer to stay in denial!",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-07-25"
  },
  {
    rating: 3,
    thumbs: 160,
    content: "My relationship with Netflix is like my gym membership. I keep paying but never use it. At least Netflix doesn’t judge me.",
    platform: "Play Store",
    sentiment: "Neutral",
    date: "2023-06-20"
  },
  {
    rating: 5,
    thumbs: 140,
    content: "I stayed up all night watching Netflix. Now I’m tired, but at least I can tell everyone about that obscure documentary on the history of knitting.",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-05-30"
  },
  {
    rating: 2,
    thumbs: 130,
    content: "Netflix, why do you always freeze when something exciting is about to happen? It's like you're trying to create suspense... You're not that good at it.",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2023-04-15"
  },
  {
    rating: 4,
    thumbs: 120,
    content: "Netflix, thanks for the 15-minute warning before I become a complete couch potato. Unfortunately, it never stops me from continuing the binge.",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-03-10"
  },
  {
    rating: 3,
    thumbs: 110,
    content: "Netflix should come with a warning: \"May cause extreme procrastination and severe lack of productivity.\" Thanks for making me miss deadlines, Netflix!",
    platform: "Play Store",
    sentiment: "Neutral",
    date: "2023-02-14"
  },
  {
    rating: 5,
    thumbs: 100,
    content: "I can’t decide what to watch on Netflix, so I just stare at the options for hours, then end up watching reruns of The Office. Decision-making at its finest.",
    platform: "App Store",
    sentiment: "Positive",
    date: "2023-01-25"
  },
  {
    rating: 2,
    thumbs: 90,
    content: "Netflix is like that friend who promises to hang out but keeps buffering their way out of it. I'm not mad, just disappointed.",
    platform: "Play Store",
    sentiment: "Negative",
    date: "2023-01-10"
  },
  {
    rating: 4,
    thumbs: 85,
    content: "I binge-watched so many series on Netflix that my TV started asking, \"Are you okay?\" I need to stop, but there's just one more episode...",
    platform: "App Store",
    sentiment: "Positive",
    date: "2022-12-20"
  },
]

const sortData = (a, b) => (new Date(b.date) - new Date(a.date))

export default function FunnyReview() {
  return (
    <DashboardContainer title="Funny Review" padding={0}>
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