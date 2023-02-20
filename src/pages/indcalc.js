import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { motion } from "framer-motion";
import Button from '../components/Button'
import { Range } from 'react-range';


export async function getServerSideProps  (context) {
    console.log(context.query) 
    // returns { id: episode.itunes.episode, title: episode.title}
    

    //you can make DB queries using the data in context.query
    return {
        props: { 
           sum: context.query.sum,
           term: context.query.term,
           rate: context.query.rate
            //pass it to the page props
        }
    }
}

const itemVariants = {
	open: {
	  opacity: 1,
	  y: 0,
	  transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  

const IndCalc = (props) => {

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

    const [isOpen, setIsOpen] = useState(false);
	const [choosenService, setChoosenService] = useState(1)
	const [sum, setSum] = useState(props.sum)
	const [term, setTerm] = useState(props.term)
	const [rate, setRate] = useState(props.rate)
	const [result, setResult] = useState(0)
    const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, isOpen);


    function calc(sum, term, rate) {



		let S = sum
		let p = term
		let n = rate

		p = p / 1200;
		n = n * 12;

		let calcResult = Math.round((S * p / (1 - Math.pow(1 + p, -n))).toFixed(2));

		if (isNaN(calcResult)) {
			setResult(0)
		} else {
			setResult(calcResult)
		}

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


    useEffect(() => {

		const timer = setTimeout(() => {
			calc(sum, term, rate)
		  }, 800);
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


  return (
    <div className='indcalcblock'>
      		<div className="calcblock-left flex flex-col">
			<div className='top-text flex flex-col'>
				<h2 className='font-5-regular'>Рассчитайте свой платёж</h2>
				<p className='font-2-regular'>Группа компаний <span className='font-2-bold'>"Зелёный свет"</span> создана, чтобы оказывать качественные финансовые услуги.</p>
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
							<a className='font-2-regular' href="">Ипотечный кредит</a>
							<motion.div
								variants={{
								open: { rotate: 180 },
								closed: { rotate: 0 }
								}}
								transition={{ duration: 0.2 }}
								style={{ originY: 0.55 }}
							>
								<svg width="15" height="15" viewBox="0 0 20 20">
								<path d="M0 7 L 20 7 L 10 16" />
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
						<p className='rate-value font-4-bold'>от {rate}%</p>
					</div>
				</div>
				<div className="sum flex flex-col">
					<p className='font-2-regular'>Сумма кредита</p>
					<input
						className='font-3-regular calc-input'
						type="text"
						value={sum}
						onChange={sumHandler}
					/>

					<RangeSlider {...sliderProps} classes="additional-css-classes" />
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
						value={term}
						onChange={termHandler}
					/>
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
						href={'/'}					
						className='font-2-regular' 
						>
							На главную
					</Link>
				</div>
			</div>
		</div>
    </div>
  )
}

export default IndCalc
