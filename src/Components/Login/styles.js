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
  border-radius: 1.5rem;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
  .Overlay {
    position: absolute;
    border-radius: 1.5rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(96, 108, 56, 0.7),
      rgba(40, 54, 24, 0.6)
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
    gap: 0.8rem;

    input {
      background: transparent;
      outline: 1px solid white;
      border-radius: 2rem;
      color: #fff;
      padding: 0.3rem 1rem;
      width: 18rem;
      transition: all 0.1s;

      &:focus {
        /* background: #283618; */
        /* opacity: 0.5; */
        /* outline-offset: 0.25rem; */
        color: #fff;
        outline: 2px solid white;
      }
    }

    .btn-login {
      /* background: #606c38; */
      background: #fff;
      width: 18rem;
      border-radius: 2rem;
      padding: 0.4rem 1rem;
      margin-top: 0.8rem;
      color: #000;
      transition: all 0.4s;
      font-weight: bold;

      &:hover,
      :focus,
      :active {
        background: #283618;
        color: #fff;
        outline-offset: 4px;
        transform: translateX(-5px);
        outline: 2px solid #283618;
      }
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
`;
