import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000;
  margin-top: 3rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #538392;
    padding: 1rem;
    border-radius: 0.9rem;
    width: 40rem;

    .box {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    label {
      /* width: 5rem; */
      color: #538392;
      font-weight: 600;
    }
    textarea {
      border: 1px solid #538392;
      border-radius: 0.5rem;
      outline: none;
      padding: 0.5rem;
      width: 100%;
      height: 5rem;
    }
    input {
      outline: none;
      border: 1px solid #538392;
      width: 100%;
      height: 1.2rem;
      padding: 1rem 0.6rem;
      border-radius: 0.5rem;
    }
  }
  .btn {
    padding: 0.5rem 2rem;
    border-radius: 5rem;
    background: #538392;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`;
