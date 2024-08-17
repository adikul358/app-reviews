import React, { useState } from "react"
import Modal from "react-modal"
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa6";
import StarRating from "../StarRating"


export default function ReviewCard({ rating, date, text, sentiment, platform }) {
  const [showModal, setShowModal] = useState(false)


  function SentimentPill({ sentiment }) {
    const bgColor = {
      "Positive": "bg-green-700",
      "Neutral": "bg-sky-700",
      "Negative": "bg-red-700",
    }
    return (
      <div className={`${bgColor[sentiment]} flex items-center rounded-full px-4 py-2 text-sm text-white space-x-2`}>
        <span>{sentiment}</span>
      </div>
    )
  }

  function PlatformPill({ platform }) {
    return (
      <div className="flex items-center rounded-full px-4 py-2 text-sm text-white bg-slate-700 space-x-2">
        {platform == "Play Store" && <FaGooglePlay />}
        {platform == "App Store" && <FaAppStoreIos />}
        <span>{platform}</span>
      </div>
    )
  }

  function ReviewModal() {
    return (
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="p-6 pb-8 bg-white/90 max-h-full overflow-y-scroll w-full max-w-5xl mx-6 flex flex-col focus:outline-none"
        overlayClassName="flex items-center justify-center bg-black/50 backdrop-blur fixed inset-0 py-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-slate-700 font-semibold text">{rating.toFixed(1)}</span>
            <StarRating rating={rating} className="text-xl invert-rating" />
          </div>
          <span className="text-slate-700 text-sm">{date}</span>
        </div>
        <p className="text-gray-800 mt-6">{text}</p>
        <div className="flex justify-end items-center space-x-3 mt-8">
          <SentimentPill sentiment={sentiment} />
          <PlatformPill platform={platform} />
        </div>
      </Modal>
    )
  }

  return (
    <>
      <div className="p-6 pb-8 bg-white/70 hover:bg-white/80 transition-color ease-out duration-150 cursor-pointer flex flex-col" onClick={() => setShowModal(true)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-slate-700 font-semibold text">{rating.toFixed(1)}</span>
            <StarRating rating={rating} className="text-xl invert-rating" />
          </div>
          <span className="text-slate-700 text-sm">{date}</span>
        </div>
        <p className="text-gray-800 mt-6 line-clamp-2">{text}</p>
        <div className="flex justify-end items-center space-x-3 mt-8">
          <SentimentPill sentiment={sentiment} />
          <PlatformPill platform={platform} />
        </div>
      </div>
      <ReviewModal />
    </>
  )
}