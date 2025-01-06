import { reviewsData } from '@/data/reviewsData'
import { ReviewBox, ReviewCard, ReviewSum, ReviewTitle, Star, StarsBox } from './Review.styled'

export default function Review() {
  return (
    <ReviewBox>
      {reviewsData.map((el) => (
        <ReviewCard key={el.id}>
          <ReviewTitle>{el.title}</ReviewTitle>
          <StarsBox>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </StarsBox>
          <ReviewSum>{el.sum}</ReviewSum>
        </ReviewCard>
      ))}
    </ReviewBox>
  )
}