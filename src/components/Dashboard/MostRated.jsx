import DashboardContainer from "../DashboardContainer";
import ReviewCard from "./ReviewCard";

export default function MostRated() {
  return (
    <DashboardContainer title="Most Rated" padding={0}>
      <div className="flex flex-col space-y-6 p-4">
        <ReviewCard
          rating={5}
          date="27 Jul 2024"
          platform="App Store"
          sentiment="Positive"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus, officiis dolorem optio consequuntur enim praesentium quidem sed exercitationem, voluptate saepe facere provident dignissimos pariatur culpa excepturi repudiandae unde asperiores! Consequatur magnam autem sit velit?"
        />
        <ReviewCard
          rating={4.6}
          date="14 Jul 2024"
          platform="Play Store"
          sentiment="Neutral"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus, officiis dolorem optio consequuntur enim praesentium quidem sed exercitationem, voluptate saepe facere provident dignissimos pariatur culpa excepturi repudiandae unde asperiores! Consequatur magnam autem sit velit?"
        />
        <ReviewCard
          rating={3.8}
          date="8 Aug 2024"
          platform="App Store"
          sentiment="Negative"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus, officiis dolorem optio consequuntur enim praesentium quidem sed exercitationem, voluptate saepe facere provident dignissimos pariatur culpa excepturi repudiandae unde asperiores! Consequatur magnam autem sit velit?"
        />
      </div>
    </DashboardContainer>
  )
}