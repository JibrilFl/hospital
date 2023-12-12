import {useSelector} from "react-redux";

import './params.scss';


const Params = () => {

	const {room, activeEquipment} = useSelector(state => state);

	function addParams(obj) {
		try {
			return Object.keys(obj).map((item, i) => {

				if (!activeEquipment || item !== activeEquipment) {
					return
				}

				return (
					<ul className="params__box_lists">
						<li className="params__box_list">
							<span>Операционная система:</span> {obj[item].os}
						</li>
						<li className="params__box_list">
							<span>Тип:</span> {obj[item].type}
						</li>
						<li className="params__box_list">
							<span>IP:</span> <input id='ip' value={obj[item].ip} type="text" readOnly/>
						</li>
					</ul>
				)
			})
		} catch (e) {
			console.log(e)
		}
	}

	function copyIp() {
		const ip = document.querySelector('#ip');
		ip.select();
		document.execCommand('copy')
		console.log(ip.innerText.slice(3, ip.innerText.length))
	}

	function closeParams() {
		function onCloseParams() {
			document.querySelector('.params').style.display = 'none'
			document.querySelector('.map').style.display = 'block'
		}

		return (
			<div className="params__close" onClick={onCloseParams}>&#8617;</div>
		)
	}

	const close = closeParams();

	const params = addParams(room);

	return (
		<div className="params">
			{window.innerWidth <= 400 ? close: ''}
			<div className="params__box">
				{activeEquipment ?
					(<>
						<h3 className="params__box_title">Параметры устройства</h3>
						{params}
						<button onClick={copyIp} className="params__box_btn">Скопировать IP</button>
					</>) : null}
			</div>
			<div className="params__box"></div>
			<div className="params__box"></div>
		</div>
	)
}

export default Params;