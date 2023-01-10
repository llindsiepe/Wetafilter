import styled from "styled-components";

export const Icons = styled.div`
display: flex;
  gap: 10%;
  align-items: center;
  justify-content: center;
  margin-left: 65rem;
  margin-top: 4rem;

  @media (max-width: 720px) {
    display: block;
    margin-left: 2rem;
}

    img {
        @media (max-width: 720px) {
            margin-bottom: 5rem;
            margin-left: 2rem;
        }
    }
`
