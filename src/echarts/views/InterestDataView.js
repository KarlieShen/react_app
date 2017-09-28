import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import BarStack from '../BarStack'
import { barStackInterest } from '../Echarts-demo/EchartsFactory' 
import { getGradeClassInfo } from "../../../common/DataAnalysisContext"


export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    constructor(props) {
        super(props);               
    }
    
    componentWillMount() {                   
        this.setState({
            dataBarStackInterest: 
            {
                "abilityAndInterest": [
                    {
                        "name": "物化生政史地",
                        "num": 10,
                        "range": "0-30"
                    },
                    {
                        "name": "物化生政史地",
                        "num": 20,
                        "range": "30-60"
                    },
                    {
                        "name": "物化生政史地",
                        "num": 30,
                        "range": "60-90"
                    },
                    {
                        "name": "物化地生政史",
                        "num": 22,
                        "range": "60-90"
                    },
                    {
                        "name": "物化地生政史",
                        "num": 55,
                        "range": "30-60"
                    },
                    {
                        "name": "物化生政地史",
                        "num": 40,
                        "range": "0-30"
                    },
                    {
                        "name": "物化生政地史",
                        "num": 30,
                        "range": "30-60"
                    },
                    {
                        "name": "物化生政史地",
                        "num": 20,
                        "range": "60-90"
                    },
                    {
                        "name": "物化生政史地",
                        "num": 10,
                        "range": "90-100"
                    }
                ]
            }
        })
    }

	handleInterestGradeChange = (value) => {
        
    }
    handleInterestClassChange = (value) => {
            
    }
    
    render() {
        let { dataBarStackInterest } = this.state; 
        let dataGradeClassInfo = getGradeClassInfo();
        let GradeInfo = dataGradeClassInfo.map((item) => {
            return item["gradeName"];
        })
        let trans = [];
        dataGradeClassInfo.forEach((item) => {
            item["classes"].forEach((cal) => {
                trans.push( cal.className )
            })
        })
        let ClassInfo = trans.filter((item, index, arr) => {
            return arr.indexOf(item) === index
        })
        
        
        return (
            <div >                      
                <p className="text-bar-stack">学习能力与学科兴趣比例</p>
                <div className="bar-stack">
                    <BarStack  dataBarStack={dataBarStackInterest} barStackType={barStackInterest} echartID="barStack1" />                                
                </div>
            </div>                  
       
        )
    }
}