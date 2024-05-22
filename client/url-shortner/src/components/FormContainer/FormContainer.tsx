import * as React from "react";
import axios from "axios";
import { servUrl } from "./../../helpers/Constants";

interface IFormContainerProps {
  updateReload: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [fullUrl, setfullUrl] = React.useState<string>("");
  const { updateReload } = props;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(fullUrl);
      await axios.post(`${servUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });

      setfullUrl("");
      updateReload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          {" "}
          <h1 className="text-white text-4xl text-center pb-4">URL Shortner</h1>
          <p className="text-white text-center pb-2 text-2xl font-extralight">
            paste your untidy link to shorten it
          </p>
          <p className="text-white text-center pb-4 text-xl font-bold">
            Free tool to shorten a url or reduce link
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>
                <input
                  type="text"
                  name=""
                  placeholder="Add Your Link"
                  id=""
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setfullUrl(e.target.value)
                  }
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus: ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
