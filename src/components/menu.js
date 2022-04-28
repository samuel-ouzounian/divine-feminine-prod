import styled from 'styled-components';

export const MenuWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    list-style:none;
    gap:30px;
    padding:0px;
    @media screen and (max-width:1220px){
        margin-top:10px;

        }
    }
`

export const HeaderMenuWrapper = styled.ul`
display:flex;
flex-direction:row;
list-style:none;
gap:30px;
padding:0px;
margin-top:25px;
margin-left:40px;
@media screen and (max-width:1200px){
    gap: 15px;
    position:absolute;
    top: 0;
    left: 0;
    transform: translate(610%, 15%);
    margin-top:10px;
    flex-direction: column;

    }
}
@media screen and (max-width: 600px) {
    transform: translate(360%, 15%);
}
`
export const HeaderMenuWrapper2 = styled.ul`
display:flex;
flex-direction:row;
list-style:none;
gap:30px;
padding:0px;
@media screen and (max-width:1220px){
    margin-top:10px;
    margin-right:30px
    }
}
`

