import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(avg) {
    var total = 0;
    for(var i = 0; i < avg.length; i++) {
        total += avg[i];
    }
    var avg = total / avg.length;
    return Math.round(avg)
}

const Chart = (props) => (
    <div style={{ height:'120x', width:'180px' }}>
        <Sparklines height={120} width={180} data = { props.data } >
            <SparklinesLine color = { props.color } />
            <SparklinesReferenceLine type = 'avg' />
        </Sparklines>
        <div>{ average(props.data)  } <strong>{ props.units }</strong></div>
    </div>
)

export default Chart;