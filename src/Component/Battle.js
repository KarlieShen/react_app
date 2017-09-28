import * as React from 'react';

export default class Battle extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        } 
        this.displayNotice = this.displayNotice.bind(this);
    }
    displayNotice = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }
    render() {
        let {visible} = this.state;
        return (
          <div className="eprint-container">
            <div className="eprint-wrapper">
                <div className={visible === false?"eprint-notice-dialog-face disappear":"eprint-notice-dialog-face"} id="eprint-notice-dialog-face">
                    <div className="eprint-notice-content" id="eprint-notice-content">
                        <p className="eprint-notice-content-t">用戶打印須知</p>
                        <p>尊敬的CocoRobo用戶：</p>
                        <p>我們強烈建議您在打印下單前，仔細閱讀以下六條打印須知，這將利於縮短您的訂單處理時間，提高打印成功率和打印時效，可為您節省時間和金錢！</p>
                        <p>本須知詳情如下，請仔細閱讀：</p>
                        <p>一、模型文件格式只能為STL</p>
                        <p>二、模型寬和高均不可以超過30cm, 雲平臺單次最多可上傳1個文件,且文件大小不超過64M；</p>
                        <p>三、快遞費用視情況而定 新用戶下單前請先查看材料介紹，了解每種材料性能和可以進行打印的最低標準，並確認好打印材料； </p>
                        <p>四、異形文件的打印過程和後處理過程都較為復雜，增加了壞件率，我們會根據模型復雜度額外加收適當費用；</p>
                        <p>五、請在上傳STL文件前對3D文件進行自檢，是否適應打印條件，以避免延遲訂單處理速度；</p>
                        <p>六、文件壁厚十分重要，通常壁厚須達到1.2mm以上</p>
                        <input type="button" value="已閱讀" className="eprint-notice-cancel" onClick={this.displayNotice} />
                    </div>
                </div>
                <div className="eprint-main-title">
                    <div className="eprint-header">雲打印</div>
                    <div className="eprint-notice-btn">
                      <a href="./view" className="print-btn">我的打印</a>
                      <input type="button" className="print-btn" value="打印須知" onClick={this.displayNotice}/>
                    </div>    
                </div>
                <div className="eprint-main">
                    <div className="eprint-main-left">
                        <div id="stlviewer" className="stlviewer"></div>
                        <div className="settings">
                            Background: <input className="color" id="backround_colour" value="ffffff" /> &nbsp;   Model: <input className="color" id="model_colour" value="C0D8F0" />           
                       </div>
                    </div>
                    <div className="eprint-main-right">
                        <p className="eprint-main-right-t">模型信息</p>
                        <div className="eprint-main-right-file">
                            <div className="eprint-file-info">
                                <p className="part-one">
                                    <span>顏色選擇:</span>
                                    <select name="color-hex" className="form-option">
                                        <option value="#ffffff">白色</option>
                                        <option value="#ff9800">黄色</option>
                                        <option value="#1d37c3">蓝色</option>
                                        <option value="#e5edef">银色</option>
                                        <option value="#000000">黑色</option>
                                        <option value="#9fa5a7">灰色</option>
                                        <option value="#d61e2f">红色</option>
                                        <option value="#0bb537">绿色</option>
                                        <option value="#9a511d">棕色</option>
                                        <option value="#ef5d2f">橙色</option>
                                        <option value="#840963">紫色</option>
                                        <option value="#00e9f5">天空蓝</option>
                                    </select>
                                </p>
                                <p className="part-one">
                                    <span>材料選擇:</span>
                                    <select name="material" className="form-option">
                                        <option value="PLA">PLA</option>
                                        <option value="ABS">ABS</option>
                                    </select>
                                </p>
                            </div>
                            <p className="eprint-file-info">
                                <span className="eprint-file-info-span">總體積:</span>
                                <span className="eprint-file-info-span">---</span>
                            </p>
                            <p className="eprint-file-info">
                                <span className="eprint-file-info-span">表面積:</span>
                                <span className="eprint-file-info-span">---</span>
                            </p>
                            <p className="eprint-file-info">
                                <span className="eprint-file-info-span">總價格:</span>
                                <span className="eprint-file-info-span">---(單價:0.75RMB/cm^3)</span>
                            </p>
                            <p className="eprint-file-info">
                                <a href="">上傳3D文件(STL格式)<input type="file" name="file" className="eprint-file-input" id="eprint-file-input" accept=".stl" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="eprint-form-wrapper">
                    <form acceptCharset="utf-8" className="eprint-form" id="eprint-form" >
                      <p className="eprint-form-t">材料說明</p>
                        <table className="eprint-form-table">
                            <thead className="eprint-form-table-head">
                                <tr className="eprint-table-head-row">
                                    <th className="cell">材料類型</th>
                                    <th className="cell">精準度</th>
                                    <th className="cell">材料特性</th>
                                    <th className="cell">預計交貨時間</th>
                                    <th className="cell">(單價:0.75RMB/cm^3)</th>
                                </tr>
                            </thead>
                            <tbody className="eprint-form-table-body">
                                <tr className="eprint-table-body-row">    
                                    <td className="cell">PLA</td>
                                    <td className="cell">0.15-0.3mm</td>
                                    <td className="cell">PLA（聚乳酸），擁有良好的光澤性和透明度及良好的抗拉強度及延展度。</td>
                                    <td className="cell">三天-五天</td>
                                    <td className="cell">0.75RMB/cm^3</td>
                                </tr>
                                <tr className="eprint-table-body-row">
                                    <td className="cell">ABS</td>
                                    <td className="cell">0.2-0.4mm</td>
                                    <td className="cell">ABS，擁有強度、耐沖擊性、抗老化、硬度等性能指標兼顧的平衡優點。</td>
                                    <td className="cell">三天-五天</td>
                                    <td className="cell">0.75RMB/cm^3</td>
                                </tr>
                                <tr className="eprint-table-comming-row">
                                    <td className="cell">金屬(即將推出)</td>
                                    <td className="cell">0.1-0.2mm</td>
                                    <td className="cell">金屬打印，高精度，成型快以及各種極限的優良特性              </td>
                                    <td className="cell">三天-五天</td>
                                    <td className="cell">視情況</td>
                                </tr>
                                <tr className="eprint-table-comming-row">
                                    <td className="cell">激光(即將推出)</td>
                                    <td className="cell">0.1-0.2mm</td>
                                    <td className="cell">激光打印，高精度，成型快以及各種優良特性              </td>
                                    <td className="cell">三天-五天</td>
                                    <td className="cell">視情況</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="eprint-remark">
                            <textarea className="eprint-remark-text" name="remark"  rows={10} placeholder="可以寫一下你的備註"></textarea>
                            <div className="eprint-form-submit">
                                <input type="submit" name="" value="確認提交" className="submit-button" id="submit-button" />
                            </div>
                        </div>
                    </form>
              </div>
            </div>
          </div>
        );
    }
}
