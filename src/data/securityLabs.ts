import { SecurityLab } from '../types';

export const securityLabsData: SecurityLab[] = [
  {
    id: 'lab-owasp-web-audit',
    title: 'Web Application Vulnerability Assessment (OWASP Top 10)',
    category: 'Web Application Security',
    tools: ['Burp Suite Community', 'Firefox DevTools', 'Python Requests', 'OWASP ZAP'],
    objective:
      'Identify and remediate high-severity client and server vulnerabilities in an isolated, authorized web application training lab (OWASP Juice Shop / DVWA).',
    methodology: [
      'Configured Burp Suite as an intercepting HTTP/S proxy with custom CA certificates installed in the browser sandbox.',
      'Mapped application attack surface: analyzed session management, parameter inputs, authorization cookies, and hidden API endpoints.',
      'Tested input sanitization against SQL Injection (error-based and blind payloads) and Reflected / Stored Cross-Site Scripting (XSS).',
      'Investigated Broken Object Level Authorization (BOLA/IDOR) by manipulating user IDs in URL parameters and JSON payloads.'
    ],
    findings: [
      'Identified unparameterized backend query vulnerable to SQL injection on search parameters.',
      'Discovered unsanitized profile comment field leading to persistent DOM-based XSS injection.',
      'Uncovered broken access control allowing cross-user invoice downloads by changing sequential numeric IDs.'
    ],
    keyTakeaways:
      'Reenforced the necessity of server-side parameterized queries (prepared statements), context-aware output encoding, and strict server-enforced object-level authorization checks regardless of UI restrictions.',
    verificationStatus: 'Completed Lab'
  },
  {
    id: 'lab-wireshark-traffic-analysis',
    title: 'Network Traffic Analysis & Protocol Anomaly Inspection',
    category: 'Network Analysis',
    tools: ['Wireshark', 'TCPDump', 'Linux Terminal', 'Bash'],
    objective:
      'Capture and dissect live and archived network PCAP files to inspect unencrypted protocol traffic, analyze TCP three-way handshakes, and identify anomalous beaconing.',
    methodology: [
      'Captured interface traffic using TCPDump and loaded PCAPs into Wireshark with focused display filters (e.g., http, dns, tcp.flags.syn == 1).',
      'Extracted unencrypted legacy credentials transmitted over plain HTTP POST endpoints and FTP sessions to demonstrate plaintext risk.',
      'Reconstructed full TCP conversation streams to evaluate TLS handshake negotiation and cipher suite selection.',
      'Analyzed DNS request frequency and query length to detect potential DNS tunneling and data exfiltration patterns.'
    ],
    findings: [
      'Demonstrated how plaintext authentication transmissions over unencrypted HTTP can be passively intercepted across broadcast domains.',
      'Identified excessive rapid DNS query spikes matching automated domain-generation algorithms (DGA).',
      'Mapped TCP retransmission spikes correlating with network congestion and dropped SYN-ACK packets.'
    ],
    keyTakeaways:
      'Demonstrated why modern secure systems must mandate TLS 1.3 encryption by default, employ HSTS (HTTP Strict Transport Security), and monitor internal network segments for unexpected protocol cleartext.',
    verificationStatus: 'Completed Lab'
  },
  {
    id: 'lab-nmap-network-enumeration',
    title: 'Host & Port Service Enumeration and Security Auditing',
    category: 'Vulnerability Assessment',
    tools: ['Nmap', 'Zenmap', 'Linux CLI', 'Bash Scripting'],
    objective:
      'Conduct authorized network discovery, service identification, and vulnerability surface auditing across local virtual machine subnets.',
    methodology: [
      'Executed stealth TCP SYN scans (-sS) and UDP scans (-sU) to profile active listening ports across target hosts without completing full handshakes.',
      'Applied service version detection (-sV) and OS fingerprinting (-O) to determine outdated software packages and operating system builds.',
      'Leveraged Nmap Scripting Engine (NSE) vulnerability categories (--script vuln) to test for known CVE signatures against target daemons.',
      'Documented open unnecessary services (Telnet, unencrypted FTP) and constructed a firewall remediation plan.'
    ],
    findings: [
      'Discovered outdated Apache and OpenSSH service banners exposing known CVE vulnerabilities.',
      'Identified unauthenticated database ports (MySQL 3306) publicly bound to 0.0.0.0 instead of local loopback 127.0.0.1.',
      'Detected legacy cleartext services operating without encryption wrappers.'
    ],
    keyTakeaways:
      'Service minimization is paramount: default configurations often leave dangerous services open. Hardening requires binding daemons strictly to localhost/private interfaces and enforcing UFW/iptables ingress filtering.',
    verificationStatus: 'Completed Lab'
  },
  {
    id: 'lab-wazuh-siem-monitoring',
    title: 'Host Intrusion Detection & SIEM Event Monitoring with Wazuh',
    category: 'SIEM & SOC Operations',
    tools: ['Wazuh Manager', 'Wazuh Agent', 'Ubuntu Server', 'Syslog'],
    objective:
      'Deploy and configure a centralized Host-based Intrusion Detection System (HIDS) and SIEM architecture to monitor endpoint events, detect brute-force attacks, and alert on integrity violations.',
    methodology: [
      'Provisioned a Wazuh Manager server and deployed lightweight agents on Ubuntu endpoint virtual machines.',
      'Configured File Integrity Monitoring (FIM) across critical system directories (/etc/passwd, /etc/shadow, /var/www).',
      'Simulated repeated failed SSH authentication attempts to trigger automated brute-force detection rules.',
      'Created custom alert dashboards in the Wazuh UI to visualize security event severities and MITRE ATT&CK technique tags.'
    ],
    findings: [
      'Wazuh agent successfully triggered Rule 5712 ("SSHD brute force trying to get access to the system") after 8 consecutive failed login attempts.',
      'FIM engine caught unauthorized modifications to /etc/hosts within 3 seconds of modification.',
      'Normalized syslog streams correlated multiple disparate authentication failures into a single high-priority incident.'
    ],
    keyTakeaways:
      'Effective security requires continuous real-time visibility. Combining automated log correlation with proactive file integrity monitoring provides rapid detection of both active lateral movement and unauthorized persistence.',
    verificationStatus: 'Completed Lab'
  }
];

