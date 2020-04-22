import { css } from 'lit-element';

export const styles = css`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Nunito',sans-serif;
}
body{
    background-color: #1e88e5;
}
.wrapper{
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.statistic{
    width: 100%;
}

.total_case_box{
    
    background-color: #fafafa;
    box-shadow: 2px 2px 8px rgba(30,30,30,.2);
    margin: 10px 15px;
    padding: 15px 0;
    text-align: center;
    text-transform: uppercase;
}
.total_case_box p{
    font-size: 3rem;
}
.wrapper .box_wrapper{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

.box_wrapper .box{
    background-color: #fafafa;
    box-shadow: 2px 2px 8px rgba(30,30,30,.2);
    margin: 10px 15px;
    width:25%;
    text-align: center;
    padding: 15px 0;
    border-radius: 8px;
    text-transform: uppercase;
}
.box_wrapper .box p{
    font-size: 2.5rem;
}


/*Styiling the table*/
table{
    width: 100%;
    padding: 15px 10px;
    margin: 10px 0;
    text-align: center;
    border-spacing: 0;
}
tr:first-child{
    /* background-color: #37474f; */
    color: #fafafa;
    text-transform: uppercase;
}
th{
    padding: 15px 0;
    border: 1px solid black;
    border-spacing: 0;
    color:red;
}
tr:nth-child(even){
    background-color: #fafafa;
    
    
}

tr td{
    padding: 15px 0;
}
td{
    border:1px solid black;
}

.header-text{
    text-align:center;
    color:red;
    padding:10px;
}

`;