import styled from "styled-components";

const NavBar = styled.div`
    width: 100%;
    height: 100px;
    background-color: 	#E8E8E8;
    z-index: 1000;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        height:100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover{
            background-color: 	#D0D0D0;
        }
    }
`

export default NavBar