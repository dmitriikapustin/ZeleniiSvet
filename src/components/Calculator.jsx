import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { motion, animate } from "framer-motion";
import Button from './Button'
// import { Range } from 'react-range';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import FormС from '@/components/FormС';

import ScrollAnimation from './animationC/ScrollAnimation'

import { Range, getTrackBackground } from 'react-range';

import useDebounce from '../hooks/useDebounce'

const MIN = 500000
const MAX = 20000000
const STEP = 100000


const itemVariants = {
	open: {
	  opacity: 1,
	  y: 0,
	  transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

function prettify(num) {
	var n = num.toString();
	return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

function prettifySum(str) {	return str += " ₽" }
function prettifyTerm(str) { return str += " лет" }

const handleInputFocus = () => {

}

function Counter({ from, to, text }) {
	const nodeRef = useRef();

	useEffect(() => {
		const node = nodeRef.current;

		const controls = animate(from, to, {
		duration: 1,
		onUpdate(value) {
			let newValue = parseInt(value)
			node.textContent = prettify(newValue);
		}
		});

		return () => controls.stop();
	}, [from, to]);
	// return <p ref={nodeRef}/>
	return <div className='div-result font-5-bold'><p className='p-result font-5-bold' ref={nodeRef}/> ₽ в месяц</div>
}

const RangeSlider = ({onChange, value, ...sliderProps}) => {



     //set initial value to 0 this will change inside useEffect in first render also| or you can directly set useState(value)
	 const [sliderVal, setSliderVal] = useState(0);

	 // keep mouse state to determine whether i should call parent onChange or not.
	 // so basically after dragging the slider and then release the mouse then we will call the parent onChange, otherwise parent function will get call each and every change
	 const [mouseState, setMouseState] = useState(null);
 
	 useEffect(() => {
	   setSliderVal(value); // set new value when value gets changed, even when first render
	 }, [value]);
 
	 const changeCallback = (e) => {
	   setSliderVal(e.target.value); // update local state of the value when changing
	 }
 
	 useEffect(() => {
	   if (mouseState === "up") {
		 onChange(sliderVal)// when mouse is up then call the parent onChange
	   }
	 }, [mouseState])

    return (
        <div className="range-slider">
            <motion.input 
				value={sliderVal} 
				// style={{color: 'black !important'}}
				onChange={changeCallback}
				{...sliderProps}
				onMouseDown={() => setMouseState("down")} // When mouse down set the mouseState to 'down'
				onMouseUp={() => setMouseState("up")} // When mouse down set the mouseState to 'up' | now we can call the parent onChnage
			/>
        </div>
    );
}


const CalcBlock = ({rtl}) => {

	const services = [
		{
			id: 0,
			name: 'Услуга 1',
			percentage: 9
		},
		{
			id: 1,
			name: 'Услуга 2',
			percentage: 7
		},
		{
			id: 2,
			name: 'Услуга 3',
			percentage: 5
		}
	]



	const [togglePopup, setTogglePopup] = useState(false)
	const [isOpen, setIsOpen] = useState(false);
	const [choosenService, setChoosenService] = useState(1)
	const [sum, setSum] = useState(MIN*2)
	const [term, setTerm] = useState(5)
	const [rate, setRate] = useState(services[choosenService].percentage)
	const [result, setResult] = useState(0)
	// const [sliderValue, setSliderValue] = useState(5)
	const wrapperRef = useRef(null);
	// const prevCountRef = useRef();
	// useEffect(() => {
	// 	//assign the ref's current value to the count Hook
	// 	prevCountRef.current = sum;
	//   }, [sum])
	useOutsideAlerter(wrapperRef, isOpen);


	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
		  ref.current = value; //assign the value of ref to the argument
		},[value]); //this code will run when the value of 'value' changes
		return ref.current; //in the end, return the current ref value.
	  }

	const prevCount = usePrevious(result)



	const sliderValueChanged = useCallback(val => {
		// console.log("NEW VALUE", val);
		setSum(val);
	  });

	const sliderProps = useMemo(
		() => ({
		  min: 0,
		  max: 100000000,
		  value: sum,
		  step: 10000,
		  onChange: e => sliderValueChanged(e),
		  type: 'range',
		  className: 'slider'
		}),
		// dependency array, this will call useMemo function only when parentVal gets changed,
		// if you 100% confident parentVal only updated from Slider, then you can keep empty dependency array
		// and it will not re-render for any configuration object change 
		[sum]
	  );

	function calc(sum, term, rate) {

		

		let sumString = sum.toString().replace(/\s/g, '')
		let termString = term.toString().replace(/\s/g, '')
		let S = parseInt(sumString)
		let p = parseInt(termString)
		let n = rate

		p = p;
		n = n / 100;

		console.log(S, p, n)

		let calcResult = Math.round((S * n / (1 - Math.pow(1 + n, -p)))/12);

		if (isNaN(calcResult)) {
			setResult(0)
		} else {
			setResult(calcResult)
		}

	}

	// const fetchStrapiPhones = (data) => {
	// 	const phonesArr = [];
	// 	data.data.data?.map((item) => {
	// 		phonesArr.push(item.attributes.PhoneNumber)
	// 		return phonesArr
	// 	})
	// 	// console.log(phonesArr)
	// 	return phonesArr
	// }



	// const schema = Yup.object({
	// 	name: Yup.string()
	// 			.min(3, 'Минимальное количество символов: 3.')
	// 			.required('Обязательное поле'),
	// 	mobilephone: Yup.string()
	// 			.min(10, 'Минимальное количество символов: 10.')
	// 			.required('Обязательное поле')
	// 			.test('existenceNumber', 'Такой номер уже есть в базе.',
	// 				function(value) {
	// 					const arr = fetchStrapiPhones(data)
	// 					const booleanResult = !arr.includes(value)
	// 					// console.log(value, arr, booleanResult)
	// 					return booleanResult
	// 				} 
	// 			)
	//   })



	//   const handleSchemaValue = (nameForm, numberForm) => {
		
	// 	const obj = {
	// 		name: nameForm,
	// 		mobilephone: numberForm
	// 	}

	// 	setIsSchemaValid(schema.isValidSync(obj))
	// 	console.log(schema, schema.isValid(obj), schema.isValidSync(obj))


	// 	// console.log(e.value)
	//   }

	// const formik = useFormik({
	// 	initialValues: {
	// 	  name: '',
	// 	  mobilephone: '',
	// 	},
	// 	validationSchema: schema,
	// 	onSubmit: function (values) {
	// 		const STRAPI_API = "http://localhost:1337/api/form-requests"
	// 		const TOKEN = "5957892134:AAF5p2FfyBeIyVjp1DaMPPUNJ0bzQ2wSffc";
	// 		const CHAT_ID = "582978211";
	// 		const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
	// 		let message = `<b> Отправитель:</b> ${values.name}  <b> Телефон:</b> ${values.mobilephone}`;

	// 		axios.post(URI_API, {
	// 			chat_id: CHAT_ID,
	// 			parse_mode: 'html',
	// 			text: message
	// 		})

	// 		axios.post(STRAPI_API,{
	// 			data: {
	// 				FirstName: values.name,
	// 				PhoneNumber: values.mobilephone
	// 			}
	// 		})

	// 	}
	//   })


	useEffect(() => {

		const timer = setTimeout(() => {
			calc(sum, term, rate)
		  }, 200);
		  return () => clearTimeout(timer);
	}, [sum, term, rate])


	function useOutsideAlerter(ref) {
		useEffect(() => {
		  /**
		   * Alert if clicked on outside of element
		   */
		  function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false)
			}
		  }
		  // Bind the event listener
		  document.addEventListener("mousedown", handleClickOutside);
		  return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		  };
		}, [ref]);
	  }


	const handleSliderValue = (e) => {
		setSum(e.target.value)
	}

	const sumHandler = (e) => {
		const sumInput = e.target.value
		console.log(sumInput)
		setSum(sumInput)
	}

	const termHandler = (e) => {
		const termInput = e.target.value;
		setTerm(termInput)
	}

	const rateHandler = (service) => {
		setIsOpen(false)
		setChoosenService(service.id)
		setRate(service.percentage)
	}

	const [values, setValues] = useState([MIN])

	const handleRange = (values) => {
		setValues(values)
		setSum(values)
	}

  return (
	<div className='calcblock flex flex-row'>
		<div className="calcblock-left flex flex-col">
			<div className='top-text flex flex-col'>
				<h2 className='font-5-regular'>Узнайте свой будущий платёж.</h2>
				<p className='font-2-regular'>Прямо здесь и сейчас выберите необходимую сумму <span className='font-2-bold'>кредита</span> и его срок. А на консультации с нашим сотрудником сможете задать ему любые вопросы по своему расчёту. </p>
			</div>
			<div className="main flex flex-col">
				<div className="service-and-rate flex flex-row">
					<div className="service flex flex-col">
						<p className='p-top font-2-regular'>Услуга</p>
						<motion.nav
							initial={false}
							ref={wrapperRef}
							animate={isOpen ? "open" : "closed"}
							className="menu"
						>
							<motion.button
							whileTap={{ scale: 0.97 }}
							onClick={() => setIsOpen(!isOpen)}
							>
							<a className='font-2-regular'>Ипотечный кредит</a>
							<motion.div
								variants={{
								open: { rotate: 180 },
								closed: { rotate: 0 }
								}}
								transition={{ duration: 0.2 }}
								style={{ originY: 0.55 }}
							>
								<svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
								</svg>

							</motion.div>
							</motion.button>
							<motion.ul
							className=''
							variants={{
								open: {
								clipPath: "inset(0% 0% 0% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.7,
									delayChildren: 0.3,
									staggerChildren: 0.05
								}
								},
								closed: {
								clipPath: "inset(10% 50% 90% 50% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.3
								}
								}
							}}
							style={{ pointerEvents: isOpen ? "auto" : "none" }}
							>
							{services.map((service, index) => {
								return (
									<motion.li key={service.id + index} id={service.id} variants={itemVariants}>
										<a onClick={() => rateHandler(service)}>{service.name}</a>
									</motion.li>
								)
							})}

							</motion.ul>
						</motion.nav>
					</div>
					<div className="rate flex flex-col">
						<p className='p-top font-2-regular'>Процентная ставка</p>
						<p className='rate-value font-4-bold'>от {services[choosenService].percentage}%</p>
					</div>
				</div>
				<div className="sum flex flex-col">
					<p className='font-2-regular'>Сумма кредита</p>
					<input
						className='font-3-regular calc-input'
						type="text"
						value={prettifySum(prettify(sum))}
						onClick={(e) => {e.target.value = sum}}
						onChange={sumHandler}
					/>

					{/* <RangeSlider {...sliderProps} classes="additional-css-classes" /> */}
					<Range
						values={values}
						step={STEP}
						min={MIN}
						max={MAX}
						onChange={(values) => handleRange(values)}
						className={'flex-row range-slider-new'}
						renderTrack={({ props, children }) => (
						<div
							onMouseDown={props.onMouseDown}
							onTouchStart={props.onTouchStart}
							style={{
								...props.style,
								height: '36px',
								display: 'flex',
								width: '100%'
							  }}
							  
						>
							<div
							ref={props.ref}
							style={{
								height: '5px',
								width: '100%',
								borderRadius: '4px',
								background: getTrackBackground({
								  values,
								  colors: ['#548BF4', '#ccc'],
								  min: MIN,
								  max: MAX,
								  rtl
								}),
								alignSelf: 'center'
							  }}
							>
							{children}
							</div>
						</div>
						)}
						renderThumb={({ props, isDragged }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: '42px',
								width: '42px',
								borderRadius: '4px',
								backgroundColor: '#FFF',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								boxShadow: '0px 2px 6px #AAA'
							  }}
						>
							<div
							style={{
								height: '16px',
								width: '5px',
								backgroundColor: isDragged ? '#548BF4' : '#CCC'
							  }}
							/>
						</div>
						)}
					/>
					
					{/* <Slider 
						value={sum}
						// onChange={handleSliderValue}
						min={0}
						max={100000000}
						step={10000}
					/> */}

				</div>
				<div className="term flex flex-col">
					<p className='font-2-regular'>Срок кредита</p>
					<input
						className='font-3-regular calc-input'
						type="text"
						value={prettifyTerm(term)}
						onClick={(e) => {e.target.value = term}}
						onChange={termHandler}
					/>

				{/* <Range
						step={0.1}
						min={0}
						max={100}
						values={term}
						onChange={(e) => setTerm(e.target.value)}
						renderTrack={() => (
						<div
							style={{
							height: '6px',
							width: '100%',
							backgroundColor: '#ccc'
							}}
						>
						
						</div>
						)}
						renderThumb={() => (
						<div

							style={{

							height: '42px',
							width: '42px',
							backgroundColor: '#999'
							}}
						/>
						)}
					/> */}
					{/* <div className="range-slider-2">
						<Slider 
						 	className="RANGE"
							value={term}
							onChange={() => handleSliderValue(term)}
							min={0}
							max={100000000}
							step={10000}
						/>
					</div> */}
				</div>
				<div className="ind-calc flex flex-row">
					<img src="/images/ind-calc.svg" alt="" />
					<Link 
						href={'/indcalc'}					
						className='font-2-regular' 
						as={`indcalc?sum=${sum}&term=${term}&rate=${rate}`}
						>
							Перейти в индивидуальный калькулятор
					</Link>
				</div>
			</div>
		</div>
		<div className="calcblock-right flex flex-col">
			<div className="cover">

			</div>
			<div className="text-cover">
				<p className='p-top font-4-regular'>Ваш ежемесячный платеж составит</p>
				<Counter from={prevCount} to={result} text={'руб'} /> 
				<div style={{width: '70%'}} className='button bc-white flex flex-row' onClick={() => setTogglePopup(true)}>
					<a className='font-1-bold'>Нужна консультация</a>
					<svg width="18" height="19"  fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.5 13.6299L9.45 12.5424L12.1125 9.87988H3V8.37988H12.1125L9.45 5.71738L10.5 4.62988L15 9.12988L10.5 13.6299Z" fill="#35C759"/>
					</svg>
				</div>
			</div>
			<motion.div
				className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}

			>
				<div className="popup-container flex flex-col">
					<FormС 
						props={{sum, term, rate, result}}
					/>
				</div>
			</motion.div>
		</div>
	</div>
  )
}

export default CalcBlock
