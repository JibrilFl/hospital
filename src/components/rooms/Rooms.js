import {useDispatch, useSelector} from "react-redux";
import {addRoom, onCurrentRoom, addEquipment} from "../map/sliceMap";


const Rooms = ({data}) => {
	const {currentRoom} = useSelector(state => state);

	const dispatch = useDispatch();

	const onRoom = (e) => {
		const target = e.target

		if (target.value !== currentRoom) {
			dispatch(onCurrentRoom(target.value))
			dispatch(addEquipment(''))

			if (data[target.value]) {
				dispatch(addRoom(data[target.value]))
			}
		}

		if (window.innerWidth <= 400) {
			document.querySelector('.map').style.display = 'block'
		}
	}


	const createRooms = (obj) => {


		return Object.keys(obj).map(room => {

			let clas = 'aside__room';
			let text = '';

			if (currentRoom === room) {
				clas += ' aside__room_active'
			}

			if (room.length > 20) {
				text = room.slice(0, 20)
			} else {
				text = room
			}

			return (
			<button
				key={room}
				value={room}
				className={clas}
				key={room + 13}
				onClick={(e) => onRoom(e)}
			>
				{text}
			</button>
			)
		});
	};

	const rooms = createRooms(data)

	return (
		<div className="aside__rooms">
			{rooms}
		</div>
	)
}

export default Rooms;