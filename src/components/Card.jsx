import React, { useState } from "react";
import "./Card.css";

function Card({
  title,
  subtitle,
  linkedinUrl,
  instaUrl,
  email,
  ImgUrl,
  twitterUrl,
}) {
  //creating URL for blurred loading Image

  return (
    <div className="rounded-3xl h-fit w-fit m-4 border overflow-hidden hover:border-slate-300 duration-150 hover:shadow-md">
      <div className="blur-wrapper h-fit relative w-fit duration-150 hover:after:animate-zigZag1 hover:before:animate-zigZag2">
        <div className="card-container px-1 py-16 cursor-pointer">
          <div className="card-elements flex flex-col gap-3 lg:gap-4 items-center px-5">
            <div className="img-container w-fit">
              <img
                className={`object-cover w-[250px] rounded-full aspect-square img-container`}
                src={ImgUrl}
                onLoad={() => setLoaded(true)}
                alt="Thumb_Img"
              />
            </div>
            <div className="title-container text-center font-josefin font-bold text-xl uppercase">
              <h1>{title}</h1>
            </div>
            <div className="subtitle-container font-josefin text-lg font-semibold text-slate-800 capitalize">
              <h1>{subtitle}</h1>
            </div>
            <div className="socials-container text-2xl">
              <div className="socials">
                {email ? (
                  <a href={`mailto:${email}`}>
                    <i class="bi bi-envelope-at-fill px-2 hover:text-[#a9a9ff] duration-150"></i>
                  </a>
                ) : null}
                {instaUrl ? (
                  <a href={instaUrl} target="_blank">
                    <i class="bi bi-instagram px-2 hover:text-[#a9a9ff] duration-150"></i>
                  </a>
                ) : null}
                {linkedinUrl ? (
                  <a href={linkedinUrl} target="_blank">
                    <i class="bi bi-linkedin px-2 hover:text-[#a9a9ff] duration-150"></i>
                  </a>
                ) : null}
                {twitterUrl ? (
                  <a href={twitterUrl} target="_blank">
                    <i class="bi bi-twitter-x px-2 hover:text-[#a9a9ff] duration-150"></i>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
