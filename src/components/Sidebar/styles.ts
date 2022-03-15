import styled from "styled-components";

export const Container = styled.div`

  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179,179,179);
  }

  .sidebarWrapper {
    padding: 20px;

    .sidebarList {
      padding: 0;
      margin: 0;
      list-style: none;

      .sidebarListItem {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .sidebarIcon {
          margin-right: 10px;
      }
    }
    
  }

  .sidebarButton {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-weigth: 400;
  }

  .sidebarButton:hover {
      background: #fff; 
  }

  .sidebarSeparator {
    margin: 20px 0;
  }

  .sidebarFriendList {
    padding: 0;
    amrgin: 0;
    list-style: none;

    .sidebarFriendListItem {
      display: flex;  
      align-itens: center;
      margin-bottom: 15px;

      .sidebarFriendImage {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }

      .sidebarFriendName {
        font-size: 14px;
      }

    }

  }

`;
