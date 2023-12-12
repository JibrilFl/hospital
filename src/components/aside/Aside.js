import './aside.scss';
import {useDispatch, useSelector} from "react-redux";
import {addRoom, fetchMap, onCurrentFloor, onCurrentRoom, addEquipment, selectAll, selectIds} from "../map/sliceMap";
import {useEffect} from "react";
import Rooms from "../rooms/Rooms";

const Aside = () => {

	const dispatch = useDispatch();
	const allFloors = useSelector(selectIds);
	const data = useSelector(selectAll);

	const {currentFloor} = useSelector(state => state);

	useEffect(() => {
		dispatch(fetchMap())

		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		dispatch(onCurrentRoom(''));
		dispatch(addRoom({}));
		dispatch(addEquipment(''));
	}, [currentFloor]);

	const onFloor = (e) => {
		const target = e.target
		if (+target.value !== currentFloor) {
			dispatch(onCurrentFloor(+target.value))
		} else {
			dispatch(onCurrentFloor(''))
		}
	}

	const createFloors = (arr) => {

		return arr.map(item => {

			let classList = 'aside__floor_btn'

			if (currentFloor === item) {
				classList += ' aside__floor_btn_active'
			}

			const {id, ...rest} = data[item];

			return (
				<div key={id} className="aside__floors">
					<div className="aside__floor">
						<button onClick={(e) => onFloor(e)} value={item} className={classList}>{item + 1} этаж</button>
						{currentFloor === item ? <Rooms data={rest}/> : ''}
					</div>
				</div>
			)
		});
	};

	const floors = createFloors(allFloors);


	return (
		<div className="aside">
			<h1 className="aside__title"><span>С</span>тационар</h1>
			{floors}
		</div>
	)
}

export default Aside;