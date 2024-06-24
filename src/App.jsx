import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/ui/Sidebar";
import Maincontent from "./components/ui/Maincontent";
import { useState } from "react";
import Tabpanel from "./components/tabs/Tabpanel";

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MainLayout>
        <Sidebar value={value} handleChange={handleChange} />

        <Maincontent>
          <Tabpanel value={value} index={0}>
            صفحه اصلی
          </Tabpanel>

          <Tabpanel value={value} index={1}>
            درباره من
          </Tabpanel>

          <Tabpanel value={value} index={2}>
            رزومه من
          </Tabpanel>
          <Tabpanel value={value} index={3}>
            نظرات
          </Tabpanel>
          <Tabpanel value={value} index={4}>
            دوره های من
          </Tabpanel>
          <Tabpanel value={value} index={5}>
            ارتباط با من
          </Tabpanel>
        </Maincontent>
      </MainLayout>
    </>
  );
};

export default App;

{
  /* <Header/>
<Button variant="dashed" size="large" mt>  کلیک کن  </Button>
<Button variant="dashed" size="large" color="secondary">  کلیک کن  </Button> */
}
