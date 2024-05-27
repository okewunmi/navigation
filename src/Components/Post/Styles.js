import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1.7rem;
  flex-direction: column;
  border-radius: 1.5rem;

  .heading {
    font-size: 1.5rem;
    font-weight: bolder;
    border-bottom: 4px solid #283618;
    color: #283618;
    width: 8rem;
  }
  .container {
    height: 80%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);

    /* place-items: center; */
    grid-column-gap: 15px;
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
      background: #90a955;
      width: 100%;
      height: 12rem;
      border-radius: 0.6rem;
      /* border: 1px solid #283618; */

      color: #000;

      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */

      .head {
        display: flex;
        gap: 0.5rem;
        padding: 0.9rem;

        h2 {
          font-weight: bolder;
          font-size: 0.9rem;
        }
      }
      .time {
        background: #132a13;
        display: flex;
        color: #fff;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        border-bottom-left-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
      }
    }
  }
`;
