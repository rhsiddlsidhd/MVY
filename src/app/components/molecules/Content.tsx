// "use client";
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { MovieList } from "@/app/upcoming/page";
// import { HandThumbUp, PersonIcon, StarRateIcon } from "../atoms/Icon";
// import OutlineText from "../atoms/OutlineText";
// import Text from "../atoms/Text";

// type ContentProps = {
//   type: "nowPlaying" | "popular" | "topRated" | "3d" | "default";
//   data: MovieList;
//   genreMap: Record<number, string>;
//   mouseEnter?: boolean;
// };

// const Content = ({ type, data, genreMap, mouseEnter }: ContentProps) => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const {
//     vote_average,
//     original_title,
//     title,
//     genre_ids,
//     popularity,
//     overview,
//     vote_count,
//   } = data;
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLSpanElement>(null);

//   function debounce<T extends (...args: unknown[]) => void>(
//     func: T,
//     delay: number
//   ): (...args: Parameters<T>) => void {
//     let timer: ReturnType<typeof setTimeout>;
//     return (...args: Parameters<T>) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   }

//   useEffect(() => {
//     function updateWidth() {
//       if (containerRef.current && textRef.current) {
//         const width = textRef.current.offsetWidth;
//         containerRef.current.style.width = `${width}px`;
//         setLoading(false);
//       }
//     }

//     const frameId = requestAnimationFrame(updateWidth);

//     const debouncedUpdateWidth = debounce(() => {
//       requestAnimationFrame(updateWidth);
//     }, 200);

//     window.addEventListener("resize", debouncedUpdateWidth);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", debouncedUpdateWidth);
//     };
//   }, [original_title]);

//   switch (type) {
//     case "nowPlaying":
//       return (
//         <div className="relative h-full flex flex-col justify-between">
//           <div>
//             <div className="flex items-center gap-1">
//               <div className="w-[3vw] text-[#FFD34F]">
//                 <StarRateIcon />
//               </div>
//               <OutlineText className="text-[4vw] brightness-200 ">
//                 {vote_average.toFixed(1)}
//               </OutlineText>
//             </div>
//             <OutlineText className="text-[5vw] line-clamp-2 brightness-200">
//               {original_title}
//             </OutlineText>
//             <OutlineText className="text-[4vw] line-clamp-2 brightness-200">
//               ( {title} )
//             </OutlineText>
//           </div>
//           <div className="flex justify-end items-center flex-wrap gap-1">
//             {genre_ids.map((id) => {
//               return (
//                 <OutlineText className="text-[4vw] brightness-200" key={id}>
//                   {genreMap[id]}
//                 </OutlineText>
//               );
//             })}
//           </div>
//         </div>
//       );
//     case "topRated":
//       return (
//         <div
//           className={`relative h-full ${
//             mouseEnter ? "-translate-y-full" : "-translate-y-0"
//           } duration-300 ease-in `}
//         >
//           <div
//             className={`h-full min-h-fit flex justify-center items-center  flex-col  overflow-hidden ${
//               mouseEnter ? "opacity-0" : "opacity-100"
//             } duration-100 ease-in `}
//           >
//             <div
//               className={`overflow-hidden relative ${
//                 loading ? "opacity-0" : "opacity-100"
//               }`}
//               ref={containerRef}
//             >
//               <div className="flex animate-slide-x w-fit text-[var(--text-basic)] text-[1.25vw]">
//                 <span ref={textRef} className="whitespace-nowrap px-[0.5rem]">
//                   {title === "" ? original_title : title}
//                 </span>
//                 <span className="whitespace-nowrap px-[0.5rem]">
//                   {title === "" ? original_title : title}
//                 </span>
//               </div>
//             </div>

//             <Text className="flex items-center gap-[0.25rem] min-w-fit text-[#B7B508] font-bold text-[3vw]">
//               <PersonIcon className="w-[3vw]" />
//               {vote_count}
//             </Text>

//             <Text className="flex items-center gap-[0.25rem] min-w-fit text-[#B7B508] font-bold text-[3vw]">
//               <StarRateIcon className="w-[3vw]" />
//               {vote_average.toFixed(1)}
//             </Text>
//           </div>
//           <div
//             className={`relative h-full w-full text-[var(--text-basic)] text-[1.5vw] overflow-auto scrollbar-hide ${
//               mouseEnter ? "opacity-100" : "opacity-0"
//             } duration-300 ease-in `}
//           >
//             {overview !== "" ? overview : "줄거리 정보가 없습니다."}
//           </div>
//         </div>
//       );
//     case "popular":
//       return (
//         <div
//           className={`relative h-full ${
//             mouseEnter ? "-translate-y-full" : "-translate-y-0"
//           } duration-300 ease-in `}
//         >
//           <div
//             className={`h-full min-h-fit flex justify-center items-center  flex-col  overflow-hidden ${
//               mouseEnter ? "opacity-0" : "opacity-100"
//             } duration-100 ease-in `}
//           >
//             <div
//               className={`overflow-hidden relative ${
//                 loading ? "opacity-0" : "opacity-100"
//               }`}
//               ref={containerRef}
//             >
//               <div className="flex animate-slide-x w-fit text-[var(--text-basic)] text-[1.25vw]">
//                 <span ref={textRef} className="whitespace-nowrap px-[0.5rem]">
//                   {title === "" ? original_title : title}
//                 </span>
//                 <span className="whitespace-nowrap px-[0.5rem]">
//                   {title === "" ? original_title : title}
//                 </span>
//               </div>
//             </div>

//             <Text className="flex items-center gap-[0.25rem] min-w-fit text-[#B7B508] font-bold text-[3vw]">
//               <HandThumbUp className="w-[3vw]" />
//               {popularity}
//             </Text>
//           </div>
//           <div
//             className={`relative h-full w-full text-[var(--text-basic)] text-[1.5vw] overflow-auto scrollbar-hide ${
//               mouseEnter ? "opacity-100" : "opacity-0"
//             } duration-300 ease-in `}
//           >
//             {overview !== "" ? overview : "줄거리 정보가 없습니다."}
//           </div>
//         </div>
//       );
//     case "3d":
//       return (
//         <div
//           className={`relative w-full h-full transition-transform duration-[800ms] transform-3d ${
//             mouseEnter ? "rotate-y-180" : "rotate-y-0"
//           }`}
//         >
//           <div className="absolute w-full h-full rounded-[15px] flex flex-col justify-center items-center p-5  bg-white/10 border border-white/20 backface-hidden">
//             <h2 className="text-2xl text-white mb-2">Front Side</h2>
//             <p className="text-white/70 text-base">Hover to flip</p>
//           </div>

//           <div className="absolute w-full h-full rounded-[15px] flex flex-col justify-center items-center p-5 backdrop-blur-[10px] bg-black/30 border border-white/20 rotate-y-180 backface-hidden">
//             <h2 className="text-2xl text-white mb-2">Back Side</h2>
//             <p className="text-white/70 text-base">This is the back</p>
//           </div>
//         </div>
//       );
//   }
// };

// export default Content;
