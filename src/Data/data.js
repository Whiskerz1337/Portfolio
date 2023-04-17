import { FaGithub, FaLinkedinIn, FaFileDownload } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

const cvPath = `${process.env.PUBLIC_URL}/LukeBaileyCV.pdf`

export const skillsList = [
  {
    title: 'Vulnerability Scans',
    items: ['Nessus', 'openVAS', 'Nikto'],
  },
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'Bash', 'JSX'],
  },
  {
    title: 'CLIs',
    items: ['Cisco IOS', 'Cmd', 'Powershell', 'Linux shells'],
  },
  {
    title: 'Offensive Security',
    items: ['Kali Linux + tools', 'Nmap', 'Netcat', 'Metasploit', 'Wireshark', 'Aircrack-ng'],
  },
  {
    title: 'Networking',
    items: [
      'Network Design',
      'Network Security',
      'Segmentation and Subnetting',
      'Cloud Networking',
      'Network Troubleshooting',
      'Network and Security Devices',
      'IDPS',
      'Firewalls',
    ],
  },
  {
    title: 'Protocols',
    items: ['IP', 'TCP/UDP', 'SSH', 'RDP', 'DNS', 'DHCP', 'HTTP/HTTPS/SSL/TLS', 'SFTP'],
  },
  {
    title: 'Incident Response',
    items: [
      'MITRE ATT&CK Framework',
      'Cyber Kill Chain',
      'NIST SP 800-61',
      'NIST Cybersec Framework',
      'SANS',
    ],
  },
  {
    title: 'Software/Web Dev',
    items: [
      'NodeJS, npm',
      'React, React-Native, Redux',
      'Express',
      'Tailwind CSS',
      'Bash Scripting',
      'APIs and Requests',
      'Docker',
      'Google Cloud, AWS',
    ],
  },
  {
    title: 'Cybersecurity Concepts',
    items: [
      'CIA',
      'AAA',
      'Encryption',
      'Compliance',
      'Security Policies',
      'Risk Assessments',
      'SIEM',
    ],
  },
]

export const links = [
  {
    label: 'GitHub',
    url: 'https://github.com/Whiskerz1337',
    icon: <FaGithub className='cursor-pointer' style={{ fontSize: '4rem' }} />,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luke-bailey-cybersec/',
    icon: <FaLinkedinIn className='cursor-pointer' style={{ fontSize: '4rem' }} />,
  },
  {
    label: 'Mail me',
    url: 'mailto:lukejbailey2014@gmail.com',
    icon: <ImMail className='cursor-pointer' style={{ fontSize: '4rem' }} />,
  },
  {
    label: 'My Resume',
    url: cvPath,
    icon: <FaFileDownload className='cursor-pointer' style={{ fontSize: '4rem' }} />,
  },
]

export const projectData = [
  {
    title: 'CSGraphs',
    description:
      'Currently in development, this project uses the Steam Community API to track CSGO skin prices over time, and display them in various ways.',
    imageUrl: `${process.env.PUBLIC_URL}/CSGraphs/CSGO_thumb.jpg`,
    technologies: [
      'Team Project',
      'NodeJS',
      'Concurrently',
      'React',
      'Tailwind CSS',
      'Express',
      'Firebase',
    ],
  },
  {
    title: 'Automated Camera Array',
    description:
      "A near-completion project I'm building for a client which triggers an array of cameras to fire upon submission of a Google Form. This system then grabs information from the form (via web-hook), creates a folder on Google Drive, and uploads the images into the folder. A link to the folder is then added as a new column onto the form response.",
    imageUrl: `${process.env.PUBLIC_URL}/Automated_Camera_Array/Cam_pic.jpg`,
    technologies: [
      'Solo Project',
      'Google Drive API',
      'Google Forms API',
      'Raspberry Pi OS',
      'Python',
      'pip-env',
      'Ubuntu Server',
      'Quart',
      'Web-Hooks',
    ],
  },
  {
    title: 'My Portfolio Site',
    description:
      'This site! I wanted a place to display my projects and band together my contact information.',
    imageUrl: `${process.env.PUBLIC_URL}/Portfolio/Portfolio_thumb.png`,
    technologies: [
      'Solo Project',
      'NodeJS',
      'React',
      'Tailwind CSS',
      'Prop-types',
      'ESLint',
      'Prettier',
    ],
  },
  {
    title: 'IP_variables',
    description:
      'A CLI tool I built for Kali Linux. I designed this to allow saving a target IP address to an environment variable which can persist through shell instances and reboots.',
    imageUrl: `${process.env.PUBLIC_URL}/kali_logo.png`,
    technologies: ['Solo Project', 'bash', 'zsh', 'Kali Linux', 'git', 'GitHub'],
    link: 'https://github.com/Whiskerz1337/IP_variables',
  },
  {
    title: 'Time/Attendance App',
    description:
      'A time, attendance and shift planning application designed for a removals company. This application was designed by myself and developed in collaboration with a professional back-end engineer.',
    imageUrl: `${process.env.PUBLIC_URL}/CRM_App/login_page.png`,
    technologies: [
      'Team Project',
      'Docker',
      'NodeJS',
      'React',
      'React-Router',
      'Prop-types',
      'Express',
      'sqlite3',
      'Authentication',
      'Authorisation',
      'Accounting',
    ],
  },
  {
    title: 'Game Developer Portfolio Site',
    description:
      'A team developed portfolio site for a UK based game developer, built using wordpress.',
    imageUrl: `${process.env.PUBLIC_URL}/Game_Dev_Portfolio/Game_dev_thumb.png`,
    technologies: ['Team Project', 'Wordpress', 'HTML', 'JavaScript', 'CSS'],
    link: 'https://seanhumphreys.com',
  },
]
