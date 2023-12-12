import {useDispatch, useSelector} from "react-redux";
import {addEquipment} from "../map/sliceMap";

function onActiveEquipment(dispatch, activeEquipment, name) {
	if (activeEquipment !== name) {
		dispatch(addEquipment(name));
	}

	if (window.innerWidth <= 400) {
		document.querySelector('.map').style.display = 'none'
		document.querySelector('.params').style.display = 'block'
	}
}

export const Desctop = ({className, name}) => {

	const {activeEquipment} = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<>
			<svg onClick={() => onActiveEquipment(dispatch, activeEquipment, name)} className={className} viewBox="5 5 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M5 19C5 16.7909 6.79086 15 9 15H36.2143C38.4234 15 40.2143 16.7909 40.2143 19V39.5714C40.2143 41.7806 38.4234 43.5714 36.2143 43.5714H25.8635C25.9304 43.7507 26.0155 43.9237 26.1178 44.0874L28.5632 48H16.6511L19.0965 44.0874C19.1988 43.9237 19.2838 43.7507 19.3508 43.5714H9C6.79086 43.5714 5 41.7806 5 39.5714V19ZM36.2143 41.5714C37.3189 41.5714 38.2143 40.676 38.2143 39.5714V38.2571H7V39.5714C7 40.676 7.89543 41.5714 9 41.5714H36.2143ZM7 36.2571H38.2143V19C38.2143 17.8954 37.3189 17 36.2143 17H9C7.89543 17 7 17.8954 7 19V36.2571ZM21.4273 43.5714C21.3104 44.1274 21.0963 44.6612 20.7925 45.1474L20.2596 46H24.9547L24.4218 45.1474C24.1179 44.6612 23.9039 44.1274 23.787 43.5714H21.4273Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9762 39.381C22.8447 39.381 22.7381 39.4876 22.7381 39.619C22.7381 39.7505 22.8447 39.8571 22.9762 39.8571C23.1077 39.8571 23.2143 39.7505 23.2143 39.619C23.2143 39.4876 23.1077 39.381 22.9762 39.381ZM21.7381 39.619C21.7381 38.9353 22.2924 38.381 22.9762 38.381C23.66 38.381 24.2143 38.9353 24.2143 39.619C24.2143 40.3028 23.66 40.8571 22.9762 40.8571C22.2924 40.8571 21.7381 40.3028 21.7381 39.619Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M41 17C41 15.8954 41.8954 15 43 15H58C59.1046 15 60 15.8954 60 17V46C60 47.1046 59.1046 48 58 48H43C41.8954 48 41 47.1046 41 46V17ZM58 17H43V21H58V17ZM58 23H43V46H58V23Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M44 28C44 27.4477 44.4477 27 45 27H52C52.5523 27 53 27.4477 53 28C53 28.5523 52.5523 29 52 29H45C44.4477 29 44 28.5523 44 28Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M44 31C44 30.4477 44.4477 30 45 30H52C52.5523 30 53 30.4477 53 31C53 31.5523 52.5523 32 52 32H45C44.4477 32 44 31.5523 44 31Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M44 34C44 33.4477 44.4477 33 45 33H52C52.5523 33 53 33.4477 53 34C53 34.5523 52.5523 35 52 35H45C44.4477 35 44 34.5523 44 34Z" fill="black"/>
			</svg>
			<p>{name}</p>
		</>
	)
}

export const Monoblock = ({className, name}) => {

	const {activeEquipment} = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<>
			<svg onClick={() => onActiveEquipment(dispatch, activeEquipment, name)} className={className} viewBox="5 4 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M9 14C9 11.7909 10.7909 10 13 10H52C54.2091 10 56 11.7909 56 14V44C56 46.2091 54.2091 48 52 48H36.4324C36.5388 48.4372 36.7147 48.8568 36.9555 49.242L39.9292 54H25.0708L28.0445 49.242C28.2853 48.8568 28.4612 48.4372 28.5676 48H13C10.7909 48 9 46.2091 9 44V14ZM52 46C53.1046 46 54 45.1046 54 44V40.8H11V44C11 45.1046 11.8954 46 13 46H52ZM11 38.8H54V14C54 12.8954 53.1046 12 52 12H13C11.8954 12 11 12.8954 11 14V38.8ZM30.6067 48C30.4744 48.814 30.1811 49.597 29.7405 50.302L28.6792 52H36.3208L35.2595 50.302C34.8189 49.597 34.5256 48.814 34.3933 48H30.6067Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7551 15.0857V35.7143L41.6837 35.7143C42.236 35.7143 42.6837 36.162 42.6837 36.7143C42.6837 37.2666 42.236 37.7143 41.6837 37.7143H13.7551C12.6505 37.7143 11.7551 36.8189 11.7551 35.7143V15.0857C11.7551 13.9811 12.6505 13.0857 13.7551 13.0857H51.2449C52.3495 13.0857 53.2449 13.9811 53.2449 15.0857V35.7143C53.2449 36.8189 52.3495 37.7143 51.2449 37.7143H45.8163C45.264 37.7143 44.8163 37.2666 44.8163 36.7143C44.8163 36.162 45.264 35.7143 45.8163 35.7143H51.2449V15.0857H13.7551Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M33 42.5C32.7239 42.5 32.5 42.7239 32.5 43C32.5 43.2761 32.7239 43.5 33 43.5C33.2761 43.5 33.5 43.2761 33.5 43C33.5 42.7239 33.2761 42.5 33 42.5ZM31.5 43C31.5 42.1716 32.1716 41.5 33 41.5C33.8284 41.5 34.5 42.1716 34.5 43C34.5 43.8284 33.8284 44.5 33 44.5C32.1716 44.5 31.5 43.8284 31.5 43Z" fill="black"/>
			</svg>
			<p>{name}</p>
		</>
	)
}

export const Printer = ({className, name}) => {

	const {activeEquipment} = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<>
			<svg onClick={() => onActiveEquipment(dispatch, activeEquipment, name)} className={className} viewBox="5 11 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10 27C8.89543 27 8 27.8954 8 29V44C8 45.1046 8.89543 46 10 46H21.5V48H10C7.79086 48 6 46.2091 6 44V29C6 26.7909 7.79086 25 10 25H53.5C55.7091 25 57.5 26.7909 57.5 29V44C57.5 46.2091 55.7091 48 53.5 48H43.5V46H53.5C54.6046 46 55.5 45.1046 55.5 44V29C55.5 27.8954 54.6046 27 53.5 27H10Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 13H47V27H18V13ZM20 15V25H45V15H20Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 35H47V44H43V42H45V37H20V42H22.5V44H18V35Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 30C12.2239 30 12 30.2239 12 30.5C12 30.7761 12.2239 31 12.5 31C12.7761 31 13 30.7761 13 30.5C13 30.2239 12.7761 30 12.5 30ZM10 30.5C10 29.1193 11.1193 28 12.5 28C13.8807 28 15 29.1193 15 30.5C15 31.8807 13.8807 33 12.5 33C11.1193 33 10 31.8807 10 30.5Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M21 38.5C21 37.9477 21.4477 37.5 22 37.5H43C43.5523 37.5 44 37.9477 44 38.5C44 39.0523 43.5523 39.5 43 39.5H22C21.4477 39.5 21 39.0523 21 38.5Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1644 38.0136C23.7092 38.1044 24.0772 38.6196 23.9864 39.1644L21.1805 56H43.8195L41.0136 39.1644C40.9228 38.6196 41.2908 38.1044 41.8356 38.0136C42.3804 37.9228 42.8956 38.2908 42.9864 38.8356L46.1805 58H18.8195L22.0136 38.8356C22.1044 38.2908 22.6196 37.9228 23.1644 38.0136Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 42.5C25.5 41.9477 25.9477 41.5 26.5 41.5H37.5C38.0523 41.5 38.5 41.9477 38.5 42.5C38.5 43.0523 38.0523 43.5 37.5 43.5H26.5C25.9477 43.5 25.5 43.0523 25.5 42.5Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M25 47C25 46.4477 25.4477 46 26 46H38C38.5523 46 39 46.4477 39 47C39 47.5523 38.5523 48 38 48H26C25.4477 48 25 47.5523 25 47Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 51.5C24.5 50.9477 24.9477 50.5 25.5 50.5H38.5C39.0523 50.5 39.5 50.9477 39.5 51.5C39.5 52.0523 39.0523 52.5 38.5 52.5H25.5C24.9477 52.5 24.5 52.0523 24.5 51.5Z" fill="black"/>
			</svg>
			<p>{name}</p>
		</>

	)
}