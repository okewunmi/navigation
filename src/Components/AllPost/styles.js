import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 1rem;

  .container {
    height: 90%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);

    /* place-items: center; */
    grid-column-gap: 35px;
    grid-row-gap: 35px;

    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    padding: 0.5rem;

    &::-webkit-scrollbar {
      width: 7px; /* for vertical scrollbar */
      height: 7px; /* for horizontal scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: #606c38;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #283618;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-button {
      width: 20px;
    }

    .box {
      /* background: #fbfada; */
      width: 100%;
      border-radius: 0.6rem;
      padding: 0.8rem;
      border: 1px solid #283618;
      color: #000;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .heading {
        display: flex;
        gap: 0.8rem;
        color: #000;
        border-bottom: 1px solid black;
        padding-bottom: 0.5rem;

        h2 {
          font-weight: bold;
          font-size: 0.9rem;
        }
        p {
          font-size: 0.9rem;
          line-height: 1.8;
          font-weight: 500;
          text-align: justify;
        }
      }
      .time {
        display: flex;
        color: #000;
        justify-content: space-between;

        h2 {
          font-weight: bold;
          font-size: 0.9rem;
        }
        &-time,
        &-date {
          display: flex;
          gap: 0.7rem;
          align-items: center;
        }
      }

      .btn {
        background: red;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        margin-top: 0.5rem;
        font-weight: bold;
      }
    }
  }
`;
