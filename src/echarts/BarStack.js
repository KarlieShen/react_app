import * as React from 'react'
import EchartsContainer from './EchartsContainer'
import { getRangesList } from "../../common/DataAnalysisContext"


export default class BarStack extends React.Component<BarStackProps, BarStackState> {
	constructor(props) {
        super(props);
        this.state = {}; 
    }        

    render() {
    	let { barStackType, echartID, dataBarStack } = this.props;
        let rangesList = getRangesList();
        let ranges = [0, ...rangesList, 100];
        
    	return (
    		<EchartsContainer echartOption={barStackType(dataBarStack,ranges)} id={echartID}/>
    	)
    }
}