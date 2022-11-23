import styled from "@emotion/styled";

export const SectionStatistic = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
border: 1px solid rgb(74, 72, 72);
box-shadow: 0px 0px 5px 5px #6b6b6bbf;
margin-top: 15px;
hieght: auto;
`



export const StaticList = styled.ul`
display:flex;
padding-left:0;
width: 100%;
`

const itemColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
};

export const Item = styled.li`
display: flex;
flex-direction: column;
font-size: 20px;
width:100%;
background-color:#${itemColor};
align-items: center;
padding:5px;
`