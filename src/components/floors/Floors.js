import {useSelector} from "react-redux";
import {selectIds, selectAll} from "../map/sliceMap";
import Rooms from "../rooms/Rooms";

const Floors = () => {

	const {currentFloor, currentRoom, room} = useSelector(state => state)
	const floors = useSelector(selectIds);
	const data = useSelector(selectAll);


	const createFloors = (arr) => {

		return arr.map(floor => {

			let {id, ...rest} = data[floor];

			return (
				<div key={id}>
					<p>Этаж: {floor + 1}</p>
					<div>
						< Rooms data={rest}/>
					</div>
				</div>
			)
		});
	};

	const floor = createFloors(floors)

	return (
		<div>
			{floor}
		</div>
	)
}

export default Floors;