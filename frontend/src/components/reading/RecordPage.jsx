import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import Time from './Time';
import useStore from '../../stores/bottomSheet';
import PageInput from './PageInput';
import GiveUpReading from './GiveupReading';
import Header from '../common/Header';
import { recordProgress, commit } from '../../api/bookshelf';
import useUserStore from '../../stores/user';
import useBookStore from '../../stores/book';

const StyledRecordPage = styled.div`
  width: 100%;
  padding: 10rem 1rem;

  .content {
    margin: 0px auto;
    position: relative;
  }

  .record-box {
    display: flex;
    align-items: center;
    height: 6rem;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 2px 5px 1px gray;
    width: 100%;
    margin: 30px auto;
  }

  .record {
    margin: 10px;
    text-align: left;
  }

  .title {
    font-size: 12px;
    margin-bottom: 5px;
    ${tw`text-black`}
  }

  .page {
    ${tw`text-black`}
  }

  .curr-page {
    font-size: 20px;
  }

  .save-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    height: 3rem;
    bottom: 15px;
    border-radius: 10px;
    ${tw`bg-main-green text-black`}
  }

  .stop-title {
    color: black;
  }
`;

function RecordPage({ time, book, setCurrentPage, startDateTime }) {
  const navigate = useNavigate();
  const openBottomSheet = useStore(state => state.openSheet);
  const hideBottomSheet = useStore(state => state.onDismiss);
  const totalPage = book.bookInfo.page;
  const [currPage, setCurrPage] = useState(book.currPage);
  const [stopReading, setStopReading] = useState(false);
  const { userId, isKkubook, kkubookDays, level } = useUserStore(
    state => state.userInfo,
  );
  const currentIsKkubook = isKkubook;
  const currentLevel = level;
  const currentKkubookDays = kkubookDays;
  const { updateUserInfo, increaseComplete } = useUserStore();
  const setCategory = useBookStore(state => state.setCategory);
  const submitPage = submittedPage => {
    if (submittedPage === 'stop') {
      setStopReading(true);
      hideBottomSheet();
      return;
    }

    setStopReading(false);

    if (submittedPage === 'done') {
      setCurrPage(totalPage);
      return;
    }

    const value = Number(submittedPage);
    if (value >= 0 && value <= totalPage) {
      setCurrPage(value);
      hideBottomSheet();
    } else {
      // eslint-disable-next-line no-alert
      alert('???????????? ?????? ????????????.');
    }
  };

  useEffect(() => {
    openBottomSheet(PageInput, '????????? ????????????', submitPage);
  }, []);

  return (
    <>
      <Header
        title="????????? ????????????"
        backClickHandler={() => setCurrentPage('reading')}
      />
      <StyledRecordPage>
        <div className="content">
          <button type="button" className="record-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              strokeWidth={2}
              width="55px"
              height="55px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="record">
              <p className="title">?????? ??????</p>
              <Time time={time} />
            </div>
          </button>

          <button
            type="button"
            className="record-box"
            onClick={() =>
              openBottomSheet(PageInput, '????????? ????????????', submitPage)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              strokeWidth={2}
              width="55px"
              height="55px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <div className="record">
              <p className="title">?????? ?????????</p>
              <p className="page">
                <span className="curr-page">P. {currPage}</span> / {totalPage}
              </p>
              {stopReading && <p className="stop-title">?????? ????????????</p>}
            </div>
          </button>
        </div>
        <button
          type="button"
          className="save-button"
          onClick={async () => {
            await commit(book.bookId, startDateTime);

            const updatedProgress = await recordProgress(
              book.id,
              book.bookId,
              userId,
              currPage,
              totalPage === currPage,
              stopReading,
            );

            if (stopReading) {
              openBottomSheet(GiveUpReading, '?????? ?????? ????????????????');
            }

            setCategory(updatedProgress.bookStatus);

            if (currentIsKkubook) {
              if (currentLevel * 10 + currentKkubookDays === 99) {
                increaseComplete();
                updateUserInfo({
                  isKkubook: false,
                  level: -1,
                  kkubookDays: -1,
                });
                navigate(`/congratulations/${updatedProgress.bookStatus}`);
                return;
              }
              const { kkubookmode } = updatedProgress;
              const { level, kkubook_days } = kkubookmode;
              updateUserInfo({ level, kkubookDays: kkubook_days });
            }
            if (updatedProgress.bookStatus === 0) {
              navigate('/review');
            } else {
              navigate('/bookshelf');
            }
          }}
        >
          ????????????
        </button>
      </StyledRecordPage>
    </>
  );
}

export default RecordPage;
