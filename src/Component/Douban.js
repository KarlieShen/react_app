import * as React from 'react';
const imgSrc1 = require("../style/photos/1.jpg");
const imgSrc2 = require("../style/photos/2.jpg");
const imgSrc3 = require("../style/photos/3.jpg");
const imgSrc4 = require("../style/photos/4.jpg");
const imgSrc5 = require("../style/photos/5.jpg");
const imgSrc6 = require("../style/photos/6.jpg");
const imgSrc7 = require("../style/photos/7.jpg");
const imgSrc8 = require("../style/photos/8.jpg");
const imgSrc9 = require("../style/photos/9.jpg");
const imgSrc10 = require("../style/photos/10.jpg");
const imgSrc11 = require("../style/photos/11.jpg");
const imgSrc12 = require("../style/photos/12.jpg");
const imgSrc13 = require("../style/photos/13.jpg");
const imgSrc14 = require("../style/photos/14.jpg");
const imgSrc15 = require("../style/photos/15.jpg");
const imgSrc16 = require("../style/photos/16.jpg");
const imgSrc17 = require("../style/photos/17.jpg");
const imgSrc18 = require("../style/photos/18.jpg");
const imgSrc19 = require("../style/photos/19.jpg");
const imgSrc20 = require("../style/photos/20.jpg");

export default class Douban extends React.Component{
	render() {
		return (
		<div className="reading-container">
			<div className="popular-books">
				<h3 className="hd">最受关注图书榜</h3>
				<div className="book">
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc1}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">不可思议的朋友</a>
								<p className="author">作者：[日] 田岛征彦</p>
								<p className="genre">自闭症 / 绘本 / 日本</p>
							</div>
						</div>
						<div className="down">
							没有嘲笑、没有嫌弃、没有欺凌，甚至没有打扰。我想，这就是对自闭症儿童最大的尊重。
						</div>
					</div>
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc2}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">荒野之歌</a>
								<p className="author">作者：[英] 罗莎蒙德·基德曼</p>
								<p className="genre">摄影 / 自然 / 野生动物</p>
							</div>
						</div>
						<div className="down">
							动物身上的美与丑，都最终返照到人类的身上。
						</div>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc3}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">醒来的女性</a>
								<p className="author">作者：[美] 玛丽莲·弗伦奇</p>
								<p className="genre">女性 / 小说 / 美国文学</p>
							</div>
						</div>
						<div className="down">
							你看，我没有答案，但我将用余生来寻找答案——与其麻木地沉睡，不如痛苦地醒来。
						</div>
					</div>
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc4}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">七根凶简</a>
								<p className="author">尾鱼</p>
								<p className="genre">悬疑 / 推理 / 少年文学</p>
							</div>
						</div>
						<div className="down">
							上古之时，有七则恶念，凡接触之人，总会心性突变，犯下不赦命案。
						</div>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc5}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">遗产</a>								<p className="author">作者：[以] 露图·莫丹</p>
								<p className="genre">漫画 / 以色列 / 图像小说</p>
							</div>
						</div>
						<div className="down">
							我们必将带着面对生活河流的无可奈何生活下去，而不论是故作的还是自然的幽默感，都是我们抗击悲伤的武器。
						</div>
					</div>
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc6}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">此生多珍重</a>
								<p className="author">作者：丰子恺</p>
								<p className="genre">丰子恺 / 散文 / 漫画</p>
							</div>
						</div>
						<div className="down">
							艰难的是，在不断被毁坏的事物上，建造属于自己的美好，哪怕它是微小的，却代表着人无法被摧毁的意志
						</div>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc7}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">上锁的房子</a>
								<p className="author">作者：[日] 三岛由纪夫</p>
								<p className="genre">三岛由纪夫 / 日本 / 短篇</p>
							</div>
						</div>
						<div className="down">
							三岛是这纷扰人世间的寂寞独行者，他的文学人生，由美而诞生，随美而终结，因美而不朽。
						</div>
					</div>
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc8}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">厨艺的常识</a>
								<p className="author">作者：[美] 迈克尔·鲁尔曼</p>
								<p className="genre">烹饪 / 美食 / 生活</p>
							</div>
						</div>
						<div className="down">
							当一个好厨娘，不是“用心做菜”就够了的，但首先，你要“有心”，而且还要“用心”。
						</div>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc9}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">故事的终结</a>
								<p className="author">作者：[美] 莉迪亚·戴维斯</p>
								<p className="genre">小说 / 莉迪亚·戴维斯 / 美国</p>
							</div>
						</div>
						<div className="down">
							莉迪亚·戴维斯的个性和叙述风格是合二为一的，这是她身上最为突出和原创性的方面。
						</div>
					</div>
					<div className="single">
						<div className="up">
							<p className="photo">
								<img src={imgSrc10}  />
							</p>
							<div className="photo-info">
								<a href="#" className="book-name">东京一年</a>
								<p className="author">作者：蒋方舟</p>
								<p className="genre">蒋方舟 / 日本 / 随笔</p>
							</div>
						</div>
						<div className="down">
							有些读者不待见蒋方舟，因为她“毒舌”。可这恰恰是我喜欢她的地方。她真实、勇敢，对问题有独到见解。 
						</div>
					</div>
				</div>
			</div>
			<div className="aside">
				<h4 className="hd">豆瓣图书250</h4>			
				<div className="book">
					<div className="single">
						<p className="up">
							<img src={imgSrc11}  />							
						</p>
						<p className="name">
							洛丽塔
						</p>
					</div>
					<div className="single">
						<p className="up">
							<img src={imgSrc12}  />							
						</p>
						<p className="name">
							人间失格
						</p>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<p className="up">
							<img src={imgSrc13}  />							
						</p>
						<p className="name">
							飘
						</p>
					</div>
					<div className="single">
						<p className="up">
							<img src={imgSrc14}  />							
						</p>
						<p className="name">
							荆棘鸟
						</p>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<p className="up">
							<img src={imgSrc15}  />							
						</p>
						<p className="name">
							大地之灯
						</p>
					</div>
					<div className="single">
						<p className="up">
							<img src={imgSrc16}  />							
						</p>
						<p className="name">
							今夜必有暴雪
						</p>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<p className="up">
							<img src={imgSrc17}  />							
						</p>
						<p className="name">
							我循着火光而来
						</p>
					</div>
					<div className="single">
						<p className="up">
							<img src={imgSrc18}  />							
						</p>
						<p className="name">
							春天大概需要你
						</p>
					</div>
				</div>
				<div className="book">
					<div className="single">
						<p className="up">
							<img src={imgSrc19}  />							
						</p>
						<p className="name">
							这里
						</p>
					</div>
					<div className="single">
						<p className="up">
							<img src={imgSrc20}  />							
						</p>
						<p className="name">
							羊脂球
						</p>
					</div>
				</div>
			</div>
		</div>		
		)
	}
}
