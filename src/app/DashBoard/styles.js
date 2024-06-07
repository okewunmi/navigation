import styled from "styled-components";

export const Content = styled.div`
  margin: 1.7rem 1.5rem;

  .head {
    font-size: 1.5rem;
    font-weight: bolder;
    border-bottom: 4px solid #283618;
    color: #283618;
    width: 7rem;
  }
  .container {
    padding-top: 1rem;
    display: flex;
    gap: 0.5rem;

    .btn {
      padding: 0.4rem 1.5rem;
      border-radius: 1rem;
      background: #538392;
      font-weight: 400;
      transition: all 0.2s;
      color: #fff;
      font-size: 0.8rem;

      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
  }
`;
