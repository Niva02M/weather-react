import { styled } from "styled-components";

export const MainWrapper = styled.div`
  height: 120vh;
  background: linear-gradient(to top, #f0f8ff, #5f9ea0);

  .container {
    border: 1px solid rgb(219, 215, 215);
    width: 450px;
    height: 850px;
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 20px 25px #5f9ea0;
    background-blend-mode: overlay;
    color: darkblue;
    margin-top: 100px;
    background-color: #ffffff7d;
    display: inline-block;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 2px solid grey;
    padding: 13px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
    font-size: 20px;
  }

  .searchCircle {
    border: 1px solid grey;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 20px;
      color: grey;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    > .icons {
      font-size: 9rem;
    }

    > h1 {
      font-size: 3rem;

      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      margin-bottom: 5px;
      font-family: "Inter", sans-serif;
      font-size: 2rem;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .infoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px lightblue;
    background: linear-gradient(90deg, wheat 0%, lightblue 100%);
    border-radius: 22px;
    // padding: 2px;
  }
  .humidity,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
    }
  }

  .windIcon {
    font-size: 3rem;
    margin-right: 10px;
  }

  .loading {
    height: 500px;
    // width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;

      animation: spin 2s linear infinite;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
