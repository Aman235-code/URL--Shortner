import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "./../../interface/UrlData";
import axios from "axios";
import { servUrl } from "./../../helpers/Constants";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setdata] = React.useState<UrlData[]>([]);
  const [reload, setreload] = React.useState<boolean>(false);
  const updateReload = (): void => {
    setreload(true);
  };
  const fetchTableData = async () => {
    const response = await axios.get(`${servUrl}/shortUrl`);

    setdata(response.data);
    setreload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);
  return (
    <>
      <FormContainer updateReload={updateReload} />
      <DataTable updateReload={updateReload} data={data} />
    </>
  );
};

export default Container;
