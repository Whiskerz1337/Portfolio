import { FaGithub, FaLinkedinIn, FaFileDownload } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

const cvPath = `${process.env.PUBLIC_URL}/LukeBaileyCV.pdf`

export const skillsList = [
  {
    title: 'Vulnerability Scans',
    items: ['Nessus', 'openVAS', 'Nikto'],
  },
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'Bash', 'JSX', 'Rust'],
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
      'Subnetting',
      'Cloud Networking',
      'Troubleshooting',
      'Security Devices',
    ],
  },
  {
    title: 'Protocols',
    items: ['IP', 'TCP/UDP', 'SSH/RDP/SFTP', 'DNS', 'DHCP', 'HTTPS/SSL/TLS'],
  },
  {
    title: 'Incident Response',
    items: ['MITRE ATT&CK', 'Cyber Kill Chain', 'NIST SP 800-61', 'NIST Framework', 'SANS'],
  },
  {
    title: 'Software/Web Dev',
    items: [
      'NodeJS, npm',
      'React, Redux',
      'Express',
      'Tailwind CSS',
      'APIs and Requests',
      'Docker',
      'Google Cloud, AWS',
    ],
  },
  {
    title: 'Concepts',
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
    icon: <FaGithub className='cursor-pointer' style={{ fontSize: '6rem' }} />,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luke-bailey-cybersec/',
    icon: <FaLinkedinIn className='cursor-pointer' style={{ fontSize: '6rem' }} />,
  },
  {
    label: 'Email',
    url: 'mailto:lukejbailey2014@gmail.com',
    icon: <ImMail className='cursor-pointer' style={{ fontSize: '6rem' }} />,
  },
  {
    label: 'Resume',
    url: cvPath,
    icon: <FaFileDownload className='cursor-pointer' style={{ fontSize: '6rem' }} />,
  },
]

export const footerLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/Whiskerz1337',
    icon: <FaGithub className='cursor-pointer' style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luke-bailey-cybersec/',
    icon: <FaLinkedinIn className='cursor-pointer' style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'Mail me',
    url: 'mailto:lukejbailey2014@gmail.com',
    icon: <ImMail className='cursor-pointer' style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'My Resume',
    url: cvPath,
    icon: <FaFileDownload className='cursor-pointer' style={{ fontSize: '3rem' }} />,
  },
]

export const projectData = [
  {
    id: 0,
    title: 'Automated Camera Array',
    description: 'System to trigger Raspi cameras via Google Form Submission.',
    imageUrl: `${process.env.PUBLIC_URL}/Automated_Camera_Array/Cam_pic.jpg`,
    technologies: [
      'Solo Project',
      'Drive API',
      'Forms API',
      'Python',
      'Ubuntu Server',
      'Quart',
      'Web-Hooks',
    ],
    gitHubLink: 'https://github.com/Whiskerz1337/raspicam_array',
    externalLink: '',
  },
  {
    id: 1,
    title: 'TIP',
    description: 'A CLI based target IP address management for penetration testers.',
    imageUrl: `${process.env.PUBLIC_URL}/kali_logo.png`,
    technologies: ['Solo Project', 'Rust', 'zsh', 'bash', 'Kali Linux'],
    gitHubLink: 'https://github.com/Whiskerz1337/tip',
  },
  {
    id: 2,
    title: 'CSGraphs',
    description: 'In development, track CSGO skin prices, and display them in various ways.',
    imageUrl: `${process.env.PUBLIC_URL}/CSGraphs/CSGO_thumb.jpg`,
    technologies: ['Team Project', 'NodeJS', 'React', 'Tailwind CSS', 'Express', 'Firebase'],
    gitHubLink: 'https://github.com/Jimslazy/csgraphs',
    externalLink: '',
  },
  {
    id: 3,
    title: 'Time/Attendance App',
    description: 'Co-developed with a professional back-end engineer.',
    imageUrl: `${process.env.PUBLIC_URL}/CRM_App/login_page.png`,
    technologies: ['Team Project', 'Docker', 'NodeJS', 'React', 'React-Router'],
    gitHubLink: 'https://github.com/tomstrat/CRM_Table_View',
    externalLink: '',
  },
]
