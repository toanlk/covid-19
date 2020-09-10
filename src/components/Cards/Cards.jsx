import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, date } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="Infected"
                    value={confirmed}
                    lastUpdate={date}
                    cardSubtitle="Number of active cases from COVID-19."
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered}
                    lastUpdate={date}
                    cardSubtitle="Number of recoveries from COVID-19."
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths}
                    lastUpdate={date}
                    cardSubtitle="Number of deaths caused by COVID-19."
                />
            </Grid>
        </div>
    );
};
export default Info;