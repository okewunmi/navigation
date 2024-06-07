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
  .head-3 {
    color: #fff;
  }
  .head {
    color: #fff;
    text-transform: uppercase;
  }
  .head-2 {
    color: #283618;
    font-weight: bold;
    text-transform: uppercase;
  }
  .form-box {
    width: 100%;
    background: red;
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
      border-bottom: 1px solid white;
      /* border-radius: 2rem; */
      color: #fff;
      padding: 0.3rem 1rem 0.3rem 2.4rem;
      width: 19rem;
      transition: all 0.1s;

      &:focus,
      &:hover,
      &:active {
        outline: none;
        color: #fff;
        border-bottom: 3px solid white;
      }
    }

    .input-2 {
      background: transparent;
      border-bottom: 1px solid #283618;
      /* border-radius: 2rem; */
      color: #000;
      padding: 0.3rem 1rem 0.3rem 2.4rem;
      width: 19rem;
      transition: all 0.1s;

      &:focus,
      &:hover,
      &:active {
        outline: none;
        color: #000;
        border-bottom: 3px solid #283618;
      }
    }

    .btn {
      width: 10rem;
      border-radius: 2rem;
      padding: 0.4rem 1rem;
      margin-top: 0.8rem;

      transition: all 0.4s;
      font-weight: bold;

      &:hover,
      :focus,
      :active {
        background: #283618;
        color: #fff;
        outline-offset: 4px;
        transform: translateY(-5px);
        outline: 2px solid #283618;
      }
    }
    .btn-login {
      /* background: #606c38; */
      background: #fff;
      color: #000;
    }
    .input_box {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      &-icon {
        margin-right: -1.75rem;
        color: #fff;
        font-size: 1.2rem;
      }
      &-icon-2 {
        margin-right: -1.75rem;
        color: #283618;
        font-size: 1.2rem;
      }
    }
  }
  .btn-reg {
    background: #283618;
    color: #fff;
  }

  .btn-home {
    color: #000;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
  .btn-create {
    color: #fff;
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-bottom: 0.1rem;
    transition: all 0.3s;

    .icon {
      font-size: 1.6rem;
    }

    /* &:hover {
      border-bottom: 1px solid #fff;
    } */
  }
  .hide {
    display: none;
  }
`;
