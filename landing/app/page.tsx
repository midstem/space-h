import Image from 'next/image'
import {
  HomeWrapper,
  LeftColumn,
  MainHeader,
  Description,
  RightColumn,
  Quote,
} from 'app/styles'

const Home = (): JSX.Element => (
  <HomeWrapper>
    <LeftColumn>
      <MainHeader>Hi there, this is SpaceH!</MainHeader>
      <Description>
        We are coming soon! The tool to keep all information about your team, in
        one single place
      </Description>
    </LeftColumn>
    <RightColumn>
      <Quote>
        <Image
          src="/static/icons/quotes.svg"
          alt="quote"
          width={40}
          height={40}
        />
        <p>Go anywhere you want in a Galaxy full of wonders</p>
      </Quote>
    </RightColumn>
  </HomeWrapper>
)

export default Home
