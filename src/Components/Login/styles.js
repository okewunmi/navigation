import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  position: relative;
  border-radius: 1.5rem;

  /* justify-content: center;  */

  width: 100%;
  height: 100%;

  .box {
    background-color: #000;
    height: 3rem;
    width: 4rem;
    p {
      color: #000;
      font-size: 4rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(96, 108, 56, 0.6),
      rgba(40, 54, 24, 0.4)
    );
    z-index: 2;
  }

  .login {
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    input {
      background: transparent;
      outline: 1px solid gainsboro;
      border-radius: 2rem;
      color: #fff;
      padding: 0.4rem 1rem;
      width: 18rem;

      &:focus {
        background: #283618;
        opacity: 0.5;
      }
    }

    .btn-login {
      /* background: #606c38; */
      background: #fff;
      width: 18rem;
      border-radius: 2rem;
      padding: 0.4rem 1rem;
      margin-top: 0.5rem;

      color: #000;
      transition: all 0.4s;
      font-weight: bold;

      &:hover {
        background: #283618;
        color: #fff;
      }
    }
    .btn-create {
      color: #fff;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;

      .icon {
        font-size: 1rem;
      }
    }
  }
`;
