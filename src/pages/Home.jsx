import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Alert, Box, Button, IconButton, Link, Snackbar, TextField, Typography } from '@mui/material'
import sonuImage from "../assets/sonu.jpeg"
import computerImg from "../assets/comp.gif"
import projectImg from "../assets/project.gif"
import constactImg from "../assets/constact.gif"
import resume from "../assets/Resume-Sonu Kumar.pdf"
import { TypeAnimation } from 'react-type-animation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useMediaQuery } from '@mui/material'

const ExampleComponent = ({ isSmallDevice }) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a full stack developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I work with mern stack',
        1000,
        'I am a react native developer',
        1000,
        "I develop web applications",
        1000,
        "I develop mobile applications",
        1000,
      ]}
      wrapper="code"
      speed={50}
      style={{ fontSize: isSmallDevice ? "14px" : '20px', display: 'inline-block', }}
      repeat={Infinity}
    />
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const isSmallDevice = useMediaQuery('(max-width:425px)');
  const [scrollPosition, setScrollPosition] = useState(0)
  const [open, setOpen] = React.useState(false);
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [message, setMessage]= useState('')
  const [alertData, setAlertData]= useState({severity:"success", alertMessage:''})

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  console.log(scrollPosition, 'this is scroll')


  const handleIndex = (ind) => {
    setIndex(ind)
    if (ind == 0) {
      homeRef.current.scrollIntoView();
    } else if (ind == 1) {

      aboutRef.current.scrollIntoView();

    } else if (ind == 2) {
      projectRef.current.scrollIntoView();


    } else if (ind == 3) {
      contactRef.current.scrollIntoView();

    }
  }

  const handleClick = (type) => {
    if(type == 'resume'){
      setAlertData({severity:"success", alertMessage:"Resume downloaded successfully"})
    }else if("validation"){
      setAlertData({severity:"error", alertMessage:'All fields is required'})
    }
    setOpen(true);

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handelSend = () => {
    if(name == '' || email == '' || message == ''){
      handleClick('validation')
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {

      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }

  }, [])

  useEffect(() => {
    if (scrollPosition == 0) {
      setIndex(0)
    }
  }, [scrollPosition])


  return (
    <div>
      {<Navbar index={index} handleIndex={handleIndex} isSmallDevice={isSmallDevice} />}

      {/* Home page main section */}
      <Box sx={{ backgroundColor: 'white', width: "100vw", display: 'flex', flexDirection: isSmallDevice ? "column" : "row" }} ref={homeRef}>
        <Box sx={{ width: isSmallDevice ? "100%" : "50%", backgroundColor: "white", justifyContent: 'space-between', display: 'flex', flexDirection: "column", alignItems: isSmallDevice ? "center" : 'flex-end' }}>
          <Box sx={{ fontSize: '50px', fontWeight: 800, color: '#003140', display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
            <Typography sx={{ fontSize: isSmallDevice ? "20px" : '30px', fontWeight: 400, color: '#003140' }}>Hi there!</Typography>
            <Typography sx={{ fontSize: isSmallDevice ? "30px" : '50px', fontWeight: 800, color: '#003140' }}>I am sonu kumar</Typography>
            <ExampleComponent isSmallDevice={isSmallDevice} />
            <Button variant='contained' sx={{ marginTop: "50px",padding:'0px', backgroundColor: "#00719C", '&:hover': { backgroundColor: "#003140" } }} onClick={()=>handleClick('resume')}>
              <a className="button" style={{color:'white', textDecoration:'none', padding:"5px 10px"}} href={resume} download="sonu-kumar-resume.pdf">
              Resume
              </a>
            </Button>
          </Box>
          {!isSmallDevice && <Box sx={{ backgroundColor: '#003140', width: "100%", height: "4.5vw" }}></Box>}
        </Box>
        <Box
          component="img"
          sx={{
            // height: 233,
            width: isSmallDevice ? "100%" : "50%",
            height: 'auto',
            // maxHeight: { xs: 233, md: 233 },
            // minHeight: { xs: 233, md: 233 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={computerImg}>
        </Box>
      </Box>

      {/* About section */}
      <Box sx={{ minHeight: "100vh", display: 'flex', alignItems: "center" }} ref={aboutRef}>
        {!isSmallDevice && <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            sx={{
              // height: 233,
              width: "50%",
              height: 'auto',
              borderRadius: "50%"
              // maxHeight: { xs: 233, md: 233 },
              // minHeight: { xs: 233, md: 233 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={sonuImage}>
          </Box>
        </Box>}
        <Box sx={{ width: isSmallDevice ? "100%" : "50%", minHeight: "100vh", display: 'flex', flexDirection: "column", alignItems: isSmallDevice ? "flex-start" : 'flex-start', paddingTop: '50px', color: "white", padding: isSmallDevice ? "20px" : "0px" }}>
          <Typography variant={isSmallDevice ? "h4" : 'h3'} style={{ marginTop: '50px', width: "100%", textAlign: isSmallDevice ? 'center' : "initial" }}>About me</Typography>
          <Typography sx={{ width: "100%", paddingRight: isSmallDevice ? "0px" : "100px", marginTop: "20px", textAlign: "justify" }}>I'm a passionate and results-driven Full Stack Developer with a knack for creating robust and scalable web applications. With a diverse skill set that spans both front-end and back-end technologies, I bring a holistic approach to web development. Explore my portfolio to discover the projects I've worked on and the skills I bring to the table</Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant='h6' sx={{}}>Educatiion</Typography>
            <ul style={{ paddingLeft: '50px', display: 'flex', flexDirection: "column", gap: '10px' }}>
              <li>I have done BCA</li>
              <li>I have done full stack web development course from Newton School</li>
            </ul>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant='h6'>Skills</Typography>
            <Box sx={{ display: 'flex', }}>
              <ul style={{ paddingLeft: '50px', display: 'flex', flexDirection: "column", gap: '10px' }}>
                <li>React</li>
                <li>React Native</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
              <ul style={{ paddingLeft: '50px', display: 'flex', flexDirection: "column", gap: '10px' }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Tailwind css</li>
                <li>MUI</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* project section */}
      <Box sx={{ minHeight: "100vh", display: 'flex', alignItems: "center", backgroundColor: "white", flexDirection: isSmallDevice ? "column" : "row" }} ref={projectRef}>



        <Box sx={{ width: isSmallDevice ? "100%" : "60%", minHeight: "100vh", display: 'flex', flexDirection: "column", alignItems: isSmallDevice ? "center" : 'flex-start', paddingTop: '50px', color: "#003140", paddingLeft: isSmallDevice ? "20px" : '100px', paddingRight: isSmallDevice ? "20px" : '0px' }}>
          <Typography variant={isSmallDevice ? "h4" : 'h3'}>projects</Typography>

          {isSmallDevice && <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "30px" }}>
            <Box
              component="img"
              sx={{
                // height: 233,
                width: "100%",
                height: 'auto',
                // maxHeight: { xs: 233, md: 233 },
                // minHeight: { xs: 233, md: 233 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={projectImg}>
            </Box>
          </Box>}

          <Box sx={{ width: '100%', display: "flex", flexWrap: "wrap", gap: "20px", marginTop: '50px', color: 'white', marginBottom: isSmallDevice ? "20px" : '0px' }}>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
            <Box sx={{ width: isSmallDevice ? "100%" : "40%", height: '100px', backgroundColor: "#003140", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>comming soon</Box>
          </Box>
        </Box>
        {!isSmallDevice && <Box sx={{ width: "40%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <Box
            component="img"
            sx={{
              // height: 233,
              width: "60%",
              height: 'auto',
              // maxHeight: { xs: 233, md: 233 },
              // minHeight: { xs: 233, md: 233 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={projectImg}>
          </Box>
        </Box>}
      </Box>

      {/* contact us section */}
      <Box sx={{ minHeight: "100vh", display: 'flex', alignItems: "center" }} ref={contactRef}>
        {!isSmallDevice && <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            sx={{
              // height: 233,
              width: "80%",
              height: 'auto',
              borderRadius: "10%"
            }}
            alt="The house from the offer."
            src={constactImg}>
          </Box>
        </Box>}
        <Box sx={{ width: isSmallDevice ? "100%" : "50%", minHeight: "100vh", display: 'flex', flexDirection: "column", alignItems: isSmallDevice ? "center" : 'flex-start', paddingTop: '50px', color: "white", paddingX: isSmallDevice ? "20px" : "0px" }}>
          <Typography variant={isSmallDevice ? "h4" : 'h3'}>Contact us</Typography>
          {isSmallDevice && <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Box
              component="img"
              sx={{
                // height: 233,
                width: "95%",
                height: 'auto',
                borderRadius: "10%"
              }}
              alt="The house from the offer."
              src={constactImg}>
            </Box>
          </Box>}
          <Box sx={{ marginTop: "50px", display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", marginBottom: isSmallDevice ? '50px' : '0px' }}>

            <Box>
              <Typography>Name:</Typography>
              <TextField id="outlined-basic" sx={{ backgroundColor: 'white', borderRadius: "10px", width: isSmallDevice ? "85vw" : '300px' }} size='small' variant="outlined" value={name} onChange={(e)=> setName(e.target.value)} />
            </Box>
            <Box>
              <Typography>Email:</Typography>
              <TextField id="outlined-basic" sx={{ backgroundColor: 'white', borderRadius: "10px", width: isSmallDevice ? "85vw" : '300px' }} size='small' variant="outlined" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </Box>
            <Box>
              <Typography>Message:</Typography>
              <TextField id="outlined-basic" multiline minRows={3} sx={{ backgroundColor: 'white', borderRadius: "10px", width: isSmallDevice ? "85vw" : '300px' }} size='small' variant="outlined" 
              value={message} onChange={(e)=> setMessage(e.target.value)}/>
            </Box>
            <Box sx={{ width: isSmallDevice ? "85vw" : "300px", display: 'flex', justifyContent: "flex-end" }}>
              <Button variant='contained' sx={{ backgroundColor: "#00719C", '&:hover': { backgroundColor: "#003140" } }} onClick={handelSend} >send</Button>
            </Box>
          </Box>

        </Box>
      </Box>

      {/* footer section */}
      <Box sx={{ minHeight: "100px", display: 'flex', alignItems: "center", justifyContent: 'space-between', backgroundColor: "lightgray", padding: isSmallDevice ? '10px 0px' : "0px 100px", flexDirection: isSmallDevice ? 'column-reverse' : "row", }}>
        <Box>
          <Typography sx={{ display: 'flex', alignItems: "center" }}><CopyrightIcon /> All rights reserved 2024</Typography>
        </Box>
        <Box >
          <Typography>ysonu1071@gmial.com</Typography>

          <Box>
            <Link href="https://github.com/ysonu1071" target="_blank" rel="noopener">
              <IconButton>
                <GitHubIcon sx={{ color: '#003140' }} />
              </IconButton>
            </Link>

            <Link href="https://www.linkedin.com/in/sonu-kumar-40a09315b/" target="_blank" rel="noopener">
              <IconButton>
                <LinkedInIcon sx={{ color: '#003140' }} />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>

      <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"right"}} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertData.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertData.alertMessage}
        </Alert>
      </Snackbar>

    </div>
  )
}

export default Home