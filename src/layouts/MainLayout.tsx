import { ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="mt-6 mx-auto max-w-[80%] text-left mb-6">
      <div className="border-l-white border-t-white border-r-black border-b-black border-x-[1px] border-y-[1px] bg-white">
        <div className="border-l-[#dfdfdf] border-t-[#dfdfdf] border-r-[#7f7f7f] border-b-[#7f7f7f] border-x-[1px] border-y-[1px] bg-[#dfdfdf]">
          <div className="border-[#c0c0c0] border-x-2 border-y-[1px] bg-[#C0C0C0]">
            <div className="bg-[#000080] text-white flex items-center">
              <img
                src="notepad.png"
                alt="Logo"
                className="h-6 w-6 ml-2 mr-1 my-1 rendering-pixelated"
              />
              <p className="text-xl">CherryYeti</p>
              <div className="flex items-center ml-auto">
                <img
                  src="minimize.png"
                  alt="Minimize"
                  className="h-6 w-6 mr-2 rendering-pixelated"
                />
                <img
                  src="maximize.png"
                  alt="Maximize"
                  className="h-6 w-6 mr-2 rendering-pixelated"
                />
                <img
                  src="close.png"
                  alt="Close"
                  className="h-6 w-6 mr-2 rendering-pixelated"
                />
              </div>
            </div>
            <div className="mt-[4px] border-[1px] border-l-[#808080] border-t-[#808080] border-r-white border-b-white bg-white">
              <div className="border-[1px] border-l-black border-t-black border-r-[#c1c1c1] border-b-[#c1c1c1] p-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
