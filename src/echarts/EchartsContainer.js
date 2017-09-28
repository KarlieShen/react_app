import * as React from 'react'
import echarts from 'echarts'

export default class EchartsContainer extends React.Component<EchartsContainerProps,EchartsContainerState>
{
	constructor(props){
        super( props );
        this.state={};      
    }
    componentDidMount() {
    	let myChart = echarts.init(document.getElementById(this.props.id));
        let option = this.props.echartOption;
        myChart.setOption(option);
    	this.setState({
    		Chart: myChart
    	})    	
    }

    render() {
    	let { id } = this.props;
    	return (
			<div id={id} style={{ width: '100%', height:'100%' }}>
			</div>                                                             
    	)
    }
}
