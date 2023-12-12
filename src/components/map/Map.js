import {useSelector} from "react-redux";
import './map.scss';
import {Desctop, Monoblock, Printer} from "../logos/Logos";

const Map = () => {

	const {room, currentRoom, activeEquipment} = useSelector(state => state);

	function createEequipments(obj) {
		return Object.keys(obj).map((item, i) => {
			let style = {
				'grid-column': `${obj[item].x} / ${obj[item].x + 1}`,
				'grid-row': `${obj[item].y} / ${obj[item].y + 1}`
			}

			let svgClass = 'map__grid_svg';

			if (Object.keys(obj)[i] === activeEquipment) {
				svgClass += ' map__grid_svg_active';
			}

			let typ;

			switch (obj[item].type) {
				case 'моноблок':
					typ = <Monoblock name={Object.keys(obj)[i]} className={svgClass}/>
					break
				case 'принтер':
					typ = <Printer name={Object.keys(obj)[i]} className={svgClass}/>
					break
				default:
					typ = <Desctop name={Object.keys(obj)[i]} className={svgClass} />
			}

			return (
				<div className="map__grid_item" style={style}>
					{typ}
				</div>
			)
		});
	}



	function createClose() {
		function onCloseMap() {
			document.querySelector('.map').style.display = 'none'
		}

		return (
			<div className="map__close" onClick={onCloseMap} >&#8617;</div>
		)
	}

	const close = createClose();

	const equipments = createEequipments(room);

	return (
		<div className="map">
			<h2 className="map__title">{currentRoom}</h2>
			{window.innerWidth <= 400 ? close: ''}
			<div className="map__grid">
				{equipments}
			</div>
		</div>
	)

}

export default Map;