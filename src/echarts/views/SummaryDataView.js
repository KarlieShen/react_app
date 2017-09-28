import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import { circle } from '../Echarts-demo/EchartsFactory' 


export default class SummaryDataview extends React.Component<SummaryDataviewProps, SummaryDataviewState> {
    constructor(props) {
        super(props);                      
    }
    
    componentWillMount() {            
        this.setState({
            SummaryData:  
               {
                    "genderStat": {
                        "female": 200,
                        "male": 200,
                        "unknown": 0
                    },
                    "gradeStuStatistic": [
                        {
                            "gradeName": "高一",
                            "stuCount": 100
                        },
                        {
                            "gradeName": "高二",
                            "stuCount": 200
                        },
                        {
                            "gradeName": "高三",
                            "stuCount": 100
                        }
                    ],
                    "total": 400
               }
        });                                              
    }
    render() {
        let {SummaryData} = this.state     
        let gradeStuStat = SummaryData["gradeStuStatistic"];

        return (
                <div >    
                    <div className="contain" >
                        <div className="stu-grade">
                            <div className="stu-sum">
                                <p className="label">学生总数</p>
                                <p className="number">{SummaryData["total"]}</p>
                            </div>
                            {
                                gradeStuStat.map((item, index) => {
                                    return (
                                        <div className="stu-sum" key={index}>
                                            <p className="label">{item.gradeName}</p>
                                            <p className="number">{item.stuCount}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gender-radio">
                            <EchartsContainer echartOption={circle(SummaryData["genderStat"])} id="genderRadio"/>
                        </div>
                    </div>                     
                </div>                     
        )
    }
}