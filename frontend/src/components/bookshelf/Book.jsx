import React from 'react';
import tw, { styled } from 'twin.macro';
import StarRatings from 'react-star-ratings';
import Pregress from './Progress';

const StyledBook = styled.li`
  width: 100%;
  height: 100px;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  box-shadow: 0px 0px 6px rgba(1, 1, 1, 0.2);
  ${tw`
  bg-light-gray
  `}
  img {
    width: 60px;
    height: 90px;
    margin-left: 10px;
  }
  .description {
    margin: 0 12px;
    overflow: hidden;
    width: 100%;
  }
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    margin: 5px auto;
  }
  .author {
    margin: 5px auto;
  }
  .date {
    font-size: 10px;
  }
  span {
    font-weight: bold;
    margin-right: 2px;
  }
  .progress-rate {
    margin: 5px auto;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
function Book({ book, handleClick, startedReading, finishedReading }) {
  return (
    <StyledBook onClick={() => handleClick(book.book)}>
      <img src={book.imgUrl} alt={book.title} />
      <div className="description">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        {finishedReading && (
          <StarRatings
            rating={book.rating / 2}
            starRatedColor="orange"
            starEmptyColor="gray"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="0px"
          />
        )}
        {startedReading && (
          <Pregress
            startDate={book.startDate}
            endDate={book.endDate}
            currPage={book.currPage}
            totalPage={book.page}
            isReading={book.bookStatus === 1}
          />
        )}
      </div>
    </StyledBook>
  );
}
export default Book;
