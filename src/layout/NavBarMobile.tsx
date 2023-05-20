import { Link } from "react-router-dom";

export default function NavBarMobile({ links, close }) {
  return (
    <div className="fixed inset-0 top-0 left-0 h-screen w-full bg-gray-200 ">
      <div className="fixed inset-0 top-0 left-0 p-7">
        <div className="w-full bg-white rounded-xl p-5 flex justify-between">
          <div className="flex flex-col gap-4">
            {links?.map(({ text, path }, index) => {
              return (
                <Link key={index} to={path}>
                  {text}
                </Link>
              );
            })}
          </div>
          <div onClick={close}>
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
