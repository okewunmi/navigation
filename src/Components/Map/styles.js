import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  color: black;
  padding: 1rem;

  .search {
    position: absolute;
    margin-left: 12rem;
    z-index: 100;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;

    input {
      height: 2rem;
      width: 25rem;
      border-radius: 2rem;
      border: 2px solid #606c38;
      outline: none;
      padding: 1rem;
      color: #000;
      font-size: 0.9rem;
      font-weight: 400;
      background: #fff;

      transition: all 0.3s;

      &:focus {
        width: 25rem;
      }
      /* box-shadow: 2px 5px 0px 2px rgba(0, 0, 0, 0.4); */
    }

    .buttons {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      margin-left: -4.2rem;
    }
    .btns {
      height: 2rem;
      font-size: 1.3rem;
      transition: all 0.3s;

      &:hover {
        opacity: 0.5;
        transform: scale(1.1);
      }

      &-search {
      }

      &-direction {
      }
    }
  }

  .direction-inputs {
    display: flex;
    position: absolute;
    flex-direction: row;
    z-index: 100;
    gap: 0.4rem;
    margin-left: 40rem;
    margin-top: 0.6rem;

    .inputs {
      display: flex;
      gap: 0.4rem;

      input {
        border: 2px solid #606c38;
        outline: none;
        padding: 1rem;
        color: #000;
        font-size: 0.9rem;
        font-weight: 400;
        background: #fff;
        border-radius: 2rem;
        height: 2rem;
        width: 14rem;
      }
    }
    .select {
      border: 2px solid #606c38;
      outline: none;
      background: #fff;
      border-radius: 2rem;
      height: 2.1rem;
      width: 10rem;
      padding: 0rem 0.3rem;
      color: #000;

      option {
        color: #000;
        font-size: 0.9rem;
        font-weight: 400;
      }
    }
    .get {
      padding: 0rem 0.9rem;
      border-radius: 4rem;
      background: #606c38;
      color: #fff;
      transition: all 0.3s;

      &:hover {
        background: #283618;
        transform: scale(1.1);
      }
    }
  }
`;
