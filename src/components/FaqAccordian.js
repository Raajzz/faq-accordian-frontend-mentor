import React, { useState } from "react";
import "./FaqAccordian.css";
import { qna } from "../assets/qna";
import iconArrowDown from "../assets/icon-arrow-down.svg";
import illusWomenDesk from "../assets/desktop/illustration-woman-online-desktop.svg";
import illusWomenMobile from "../assets/mobile/illustration-woman-online-mobile.svg";
// import illusMobile from "../assets/mobile/illustration-woman-online-mobile.svg"
// import bgPatternMobile from "../assets/mobile/bg-pattern-mobile.svg"

const FaqAccordian = () => {
  const initialArray = Array(qna.length).fill(false);
  const [showAccordian, setShowAccordian] = useState(initialArray);

  console.log(showAccordian);
  return (
    <>
      <div className="card-container">
        <main className="card">
          {/* image and other stuff */}
          <div className="image-tag">
            <picture>
              <source srcset={illusWomenDesk} media="(min-width: 768px)" />
              <img src={illusWomenMobile} alt="Illustration of a Women" />
            </picture>
          </div>
          <div className="qna-wrapper">
            <div className="heading">FAQ</div>

            {/* accordian div */}
            <div>
              {qna.map((item, index) => {
                return (
                  <>
                    <div className="qna-container" key={index}>
                      <div
                        className="question-container"
                        onClick={() => {
                          let allElements = [...showAccordian];
                          allElements[index] = !allElements[index];
                          setShowAccordian(allElements);
                        }}
                      >
                        <p
                          className={`question ${
                            showAccordian[index]
                              ? "show-margin-utility-question question-bold"
                              : ""
                          }`}
                        >
                          {item.question}
                        </p>
                        <div
                          className={`down-arrow-container
												${showAccordian[index] ? "down-arrow-rotate" : ""}
											`}
                        >
                          <img
                            src={iconArrowDown}
                            alt="Down Arrow Icon"
                            className={`down-arrow-icon`}
                          />
                        </div>
                      </div>
                      <p
                        className={`answer ${
                          showAccordian[index]
                            ? "show-margin-utility-answer"
                            : ""
                        }`}
                      >
                        {showAccordian[index] && item.answer}
                      </p>
                      <hr />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FaqAccordian;

// {showAccordian.map((item, index) => {
// 	return (
// 		<div key={index}>
// 			<button
// 				onClick={() => {
// 					let accordianArray = [...showAccordian];
// 					accordianArray[index] = !item;
// 					setShowAccordian(accordianArray);
// 				}}
// 			>
// 				{showAccordian[index].toString()}
// 			</button>
// 		</div>
// 	);
// })}
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
