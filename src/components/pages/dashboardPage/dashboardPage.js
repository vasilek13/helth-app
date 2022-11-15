import React from "react";
import './dashboardPage.scss';
import Search from "../blokSearch/blokSearch";
import Card from "../../UI/card/card";
import bag from '../../../img/bag.svg';
import human1 from '../../../img/human1.svg';
import human2 from '../../../img/human2.svg';
import bank from '../../../img/bank.svg';

const DashboardPage = () =>{
    return(
        <div className="page">
            <div className="page__serch_blok"><Search/></div>
            <div className="page__bloks">
                <Card icon={bag} title="Appointments" volum="213"/>
                <Card icon={human1} title="New Patients" volum="104"/>
                <Card icon={human2} title="Operations" volum="24"/>
                <Card icon={bank} title="Hospital Earnings" volum="$ 12,174"/>
            </div>
        </div>
    )
}

export default DashboardPage;