import React from "react";
import Radio from "../atoms/Radio";

const MovieFilterSelector = ({
  state,
  onChange,
}: {
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const languages = [
    { code: "ko-KR", label: "🇰🇷 한국어" },
    { code: "en-US", label: "🇺🇸 영어" },
  ];
  return (
    <ul className="w-full ">
      <li className="flex gap-2 items-center p-2">
        {languages.map(({ code, label }) => {
          return (
            <Radio
              key={code}
              name="lang"
              value={code}
              label={label}
              id={code}
              checked={state === code}
              onChange={onChange}
              className="flex-1 cursor-pointer min-w-fit"
            />
          );
        })}
      </li>
    </ul>
  );
};

export default MovieFilterSelector;
