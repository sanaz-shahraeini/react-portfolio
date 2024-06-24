import sanazshahraeini from "../../assets/sanazshahraeini.png";
import { Avatar, Typography, Box, Divider, Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  FaceRounded,
  CopyrightRounded,
  FavoriteRounded,
  TextSnippetRounded,
  MessageRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

const DrawerContent = ({ value, handleChange, setOpenDrawer }) => {
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  return (
    <Box
      sx={{
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: grey[900],
      }}
    >
      <Avatar
        alt="Sanaz Shahraeini"
        src={sanazshahraeini}
        variant="rounded"
        sx={{
          m: "0 auto",
          mt: 2,
          width: 150,
          height: 150,
          display: {
            xs: "none",
            md: "block",
          },
        }}
      />
      <Typography
        variant="h5"
        
        sx={{ color: "whitesmoke", mt: 2}}
      >
        ساناز شهرآئینی
      </Typography>
      <Typography variant="caption" sx={{ color: "whitesmoke", mt: 3 }}>
        مدرس و توسعه دهنده فول استک
      </Typography>
      <Divider variant="middle" sx={{ borderColor: "whitesmoke", mt: 3 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollbuttons
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(0)}
        />

        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(1)}
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(2)}
        />
        <Tab
          label="نظر دانشجو"
          icon={<MessageRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(3)}
        />
        <Tab
          label="دوره های من"
          icon={<TerminalRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          sx={{ color: "whitesmoke" }}
          onClick={() => setOpenDrawer(false)}
          {...a11yProps(5)}
        />
      </Tabs>
      <Divider variant="middle" sx={{ borderColor: "whitesmoke", mt: 2 }} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{
              verticalAlign: "middle",
              color: "tomato",
              height: 20,
            }}
          />
        </Typography>

        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          کپی رایت ۱۴۰۲{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
