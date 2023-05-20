import { Link } from "react-router-dom";

export default function NavBarMobile({
  links,
  close,
}: {
  links: {
    path: string;
    text: string;
  }[];
  close: () => void;
}) {
  return (
    <div className="fixed inset-0 top-0 left-0 z-50 w-full h-screen">
      <div className="fixed inset-0 top-0 left-0 p-7">
        <div className="flex justify-between w-full p-5 bg-white rounded-xl">
          <div className="flex flex-col gap-4">
            {links?.map(({ text, path }, index) => {
              return (
                <Link key={index} to={path}>
                  {text}
                </Link>
              );
            })}
          </div>
          <div onClick={close} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
