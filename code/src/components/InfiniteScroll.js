import InfiniteScroll from 'react-infinite-scroller';
import { HappyThoughts } from './components/HappyThoughts';

export const InfiniteScroll = () => {
  <InfiniteScroller
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
  >
    {HappyThoughts}
  </InfiniteScroller>
}
