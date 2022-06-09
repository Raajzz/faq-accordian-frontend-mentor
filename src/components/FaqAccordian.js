import React, { useState } from "react";
import "./FaqAccordian.css";
import { qna } from "../assets/qna";
import iconArrowDown from "../assets/icon-arrow-down.svg";

const FaqAccordian = () => {
	const initialArray = Array(qna.length).fill(false);
	const [showAccordian, setShowAccordian] = useState(initialArray);
  
	console.log(showAccordian);
	return (
		<>
			<div className="card-container">
				<main className="card">
					{/* image and other stuff */}
					<div className="image-container"></div>
					<div className="heading">FAQ</div>
					{/* accordian div */}
					<div>
						{qna.map((item, index) => {
							return (
								<>
									<div className="qna-container" key={index}>
										<div className="question-container">
											<p
												className="question"
												onClick={() => {
													let allElements = [...showAccordian];
													allElements[index] = !allElements[index];
													setShowAccordian(allElements);
												}}
                        style={{
                          cursor: "pointer",
                        }}
											>
												{item.question}
											</p>
											<div className="down-arrow-container">
												<img
													src={iconArrowDown}
													alt="Down Arrow Icon"
													className="down-arrow-icon"
												/>
											</div>
										</div>
										<p className="answer">
											{showAccordian[index] && item.answer}
										</p>
									</div>
									<hr />
								</>
							);
						})}
					</div>
					{/* {showAccordian.map((item, index) => {
						return (
							<div key={index}>
								<button
									onClick={() => {
										let accordianArray = [...showAccordian];
										accordianArray[index] = !item;
										setShowAccordian(accordianArray);
									}}
								>
									{showAccordian[index].toString()}
								</button>
							</div>
						);
					})} */}
				</main>
			</div>
		</>
	);
};

export default FaqAccordian;

// {/* <div className="accordian">
//   <div className="qna-container">
//     <div className="question-container">
//       <p className="question">
//         What is the maximum file upload size?
//       </p>
//       <div className="down-arrow-container">
//         <img
//           src={iconArrowDown}
//           alt="Down Arrow Icon"
//           className="down-arrow-icon"
// onClick={()=>{
//   let allElements = [...showAccordian]
//   allElements[index] = !allElements[index]
//   setShowAccordian(allElements)
// }}
//         />
//       </div>
//     </div>
//     <p className="answer">
//       No more than 2GB. All files in your account must fit your
//       allotted storage space.
//     </p>
//     <hr />
//   </div>
// </div> */}
