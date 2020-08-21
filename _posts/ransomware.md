---
title: 'Ransomware'
excerpt: 'A brief history of ransomware and how we can protect ourselves.'
coverImage: '/assets/blog/ransomware/cover.jpg'
date: '2020-04-18T00:00:00+03:00'
author:
  name: Nikolaos Kamarinakis, Ethan Hoadley, Brendan Miller, Dave L, Joshua Mezh
  picture: '/assets/blog/authors/terp.png'
ogImage:
  url: '/assets/blog/ransomware/cover.jpg'
---

## What is Ransomware

*Ransomware* is malicious software that infects computers and denies access to files until a certain amount of money (or ransom) is paid. The malware, or *Trojan* as it is commonly called, is disguised as a legitimate file in order to trick a computer user into opening it. The file is commonly sent via email, but not only. Once the Trojan has been downloaded and runs on the victim's device(s), it will encrypt any files it finds with a secret key, making them unreadable without the key. The victim will then receive a message stating that their computer is now inaccessible and they will have to pay the attacker to receive the key and regain access. 

![ransom-exchange](/assets/blog/ransomware/ransom-exchange.png)

## Brief History of Ransomware

The first ransomware attack was documented in 1989, developed by Harvard-trained evolutionary biologist Joseph L. Popp. This early infection was called the AIDSInfo Trojan. After approximately 90 computer reboots, the user would have to pay in order to gain access to the computer. Since the birth of the AIDSInfo Trojan, ransomware has only continued to grow. However, ransomware really began to take off in the early 2000's. In 2014-2015, Kapersky's (a prominent cybersecurity firm) research reported that between the top ten forms of ransomware, **101,568 computer** users were attacked worldwide. Most recently, there were 151.9 million attacks worldwide in the first three quarters of 2019.

## Popular Examples

### AIDSInfo Trojan

Not to be confused with another PC virus known as "AIDS," the earliest known example of ransomware - known as **PC Cyborg**, or the **AIDSInfo trojan** - was distributed by mail on floppy diskettes. These disks were labelled "AIDS Information Introductory Diskette." The trojan would, when run on compatible devices, scramble the names of files on the hard disk, rendering the system unusable. The device's user would subsequently be greeted with the following message:

![aidsinfo-trojan](/assets/blog/ransomware/aidsinfo-trojan.png)

Popp demanded a payment of $378 to restore an infected computer's functionality, making AIDSInfo an early example of ransomware. Eventually, the biologist was arrested on 11 counts of blackmail; he claimed the money would be used for AIDS research.

As the AIDSInfo trojan relied on floppy disks for distribution and was designed to run on systems that run , it poses little or no threat today. However, more advanced threats have followed in AIDSInfo's footsteps, holding your computer hostage for money - hence the name "ransomware."

### CryptoLocker

![cryptolocker](/assets/blog/ransomware/cryptolocker.png)

CryptoLocker is a more recent example of ransomware. It originated in 2013, distributed by the **GameOver Zeus botnet** (a network of compromised computers under the control of hackers, often used to send spam). Like most modern ransomware, CryptoLocker is far more insidious than AIDSInfo ever was, using *RSA-2048 encryption* - one of the toughest encryption methods to crack - to scramble victims' files. The key to decrypt them was stored somewhere in the botnet, and the CryptoLocker Trojan would demand a steep sum to recover it, threatening to destroy the decryption key if payment was not made in time.

CryptoLocker is thought to have extorted upwards of **$27 million** *just in the first two months* of its distribution, but its luck quickly ran out. In 2014, law enforcement agencies around the world teamed up for *Operation Tovar*, successfully taking control of the GameOver Zeus botnet and cutting off the spread of CryptoLocker. The prime suspect, Evgeniy Bogachev from Russia, is now [wanted by the FBI](https://www.fbi.gov/wanted/cyber/evgeniy-mikhailovich-bogachev/@@download.pdf) for a laundry list of charges including bank fraud, computer fraud, wire fraud, money laundering, and identity theft.

While CryptoLocker itself has been sidelined by the valiant efforts of law enforcement, [numerous copycats](https://sensorstechforum.com/cryptolocker-ransomware-2016-update-copycats-versions/) have sprung up in the days since. It is more important than ever to be vigilant and prepared for ransomware attacks.

### Chimera

![chimera](/assets/blog/ransomware/chimera.png)

Chimera is considered a game changing ransomware, because not only does it ask for a ransom in return for the decryption key, but it also adds **extortion** to the table. This malware, which was first spotted spreading in Germany, is distributed through malicious *[Dropbox](https://www.dropbox.com/) links* in targeted phishing attacks to employees, with job offers or business proposals. The malware authors claim that they will [publish the victim's files on the Internet](https://blog.malwarebytes.com/threat-analysis/2015/12/inside-chimera-ransomware-the-first-doxingware-in-wild/), unless the ransom is paid.

Many businesses that have fallen victims to the Chimera ransomware have been paying the ransom even if they have been keeping backups of their files. This is the case because such businesses (especially small ones) do not want to risk important and possibly even confidential files from leaking, turning into an expensive data breach with its plethora of unpleasant consequences.

## Scope and **Implications**

In an age where privacy is becoming more and more of a luxury, the benefits that come with evolving technology bring even more threats. We will discuss three key points about ransomware's implications: (1) _what are the actual **costs** of being affected_, (2) _**who** gets affected_, and (3) _what should be **expected** in the future_.

Simply put, anyone can be affected by ransomware. You can click on a malicious link and be put into *cyber lock-down*. But, who gets the most affected by such attacks? In early 2019, a study  done by [Trend Micro](https://www.scmagazine.com/home/security-news/ransomware/captives-of-industry/) found that nearly 27 percent of these ransomware attacks targeted *governments*, 20 percent targeted the *manufacturing industry*, and 14 percent attacked *healthcare*. Obviously, both big and small businesses are affected, but the main distinction is by volume of loss. Large businesses and smaller municipalities also took big hits.

As this type of hacking expects compensation in return for user data, there are huge costs associated with ransomware. In 2019 alone, nearly $11.5 billion dollars in damage resulted from ransomware, as portrayed by the chart below:

![annual-ransomware-damage](/assets/blog/ransomware/annual-ransomware-damage.png)

This chart shows the staggering growth in damage caused by ransomware. With higher volume of these types of attacks, such a trend makes sense. (Source: [Spinbackup](https://spinbackup.com/))

In 2019, the average ransomware payment from victim organizations was around $84,000, which actually doubled from 2018, according to [Dark Reading](https://www.darkreading.com/risk/average-ransomware-payments-more-than-doubled-in-q4-2019/d/d-id/1336893). In 2018, the average victim paid was $44,000, some paid as little as $1,500 and some ended up paying into the high six-figures. As the chart shows above, there has been a consistent increase in ransomware damage, and it shows no sign of slowing down. This malware has the potential to increase transaction costs associated with affected industries - it disrupts the natural cycle of business, which then causes a mix of short term catastrophes and long term paranoia.

The future is never certain with these types of ongoing threats. However, it is important to be vigilant and prepare. In 2021 a corporate ransomware attack is projected to occur [every 11 seconds](https://www.jdsupra.com/legalnews/ransomware-attacks-predicted-to-occur-48655/), racking up total costs up to $20 billion dollars.

See how an effective ransomware attack comes together (by [Cisco](https://www.cisco.com/)):

<iframe width="560" height="315" src="https://www.youtube.com/embed/j0EZpH_eIsY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Protecting Ourselves

So, ransomware is scary. It affects households and businesses alike, and it is an extremely devastating form of cyber attack. But, the good news is that there's a variety of steps you can take to mitigate your risk of exposure. In fact, the vast majority of successful attacks are only possible because of employee or end-user mistakes. Here are a variety of some of the most effective methods to protect yourself and your company from ransomware.

1.  **Do not pay the ransom**. Think of yourself as a consumer - when you pay off a hacker for their product (your data), you are encouraging their business model. In the long run, paying off hackers for your data makes ransomware more lucrative and increases your long-term risk factor. 
2.  **Restore any impacted files from backup**. Thankfully, data storage today is easier than ever. Make sure that you properly back up your data to prevent loss to ransomware attacks. Remember, ransomware can be in your system for a long time before it strikes, so make backups often, and keep files somewhere that is known to be secure.
3.  **Do not provide personal information** when answering an email, phone call, text or instant message. Sometimes, hackers aren't interested in stealing money from you - they're interested in stealing your identity. Keep as much of your PII (Personally Identifiable Information) private as possible. 
4.  **Use reputable antivirus software and a firewall**. Outsource your security to professionals and update your antivirus definitions regularly. Also make sure to scan your device at least once per week to avoid data loss. 
5.  **Employ content scanning and filtering on your mail servers**. Phishing emails are a known method of infiltration, and training your email filters to remove malicious emails is always a good thing to do. 
6.  Be sure to **keep all systems and software up-to-date**. Over time, vulnerabilities in old software are a given, so be sure to update your drivers, software, and firmware regularly. 
7.  Finally, **if traveling, alert your IT department beforehand**. Connections made to internet sources abroad can be rife with hackers, corporate agents and government espionage. Be sure to set up a virtual private network (VPN) when connecting to a public WiFi network and accessing confidential or personal data. 
8.  *More tips* about data security can be found here: [**https://ransomware-awareness.com**](https://ransomware-awareness.now.sh/)

![custom-wannacry](/assets/blog/ransomware/custom-wannacry.png)

## Sources

-   Jahewi, *[Jahewi's Anti-Malware Information](https://web.archive.org/web/20140728130733/http://www.probertencyclopaedia.com/L21.HTM)*
-   DigitalCommons @ KSU, *[Ransomware: Evolution, Mitigation and Prevention](https://digitalcommons.kennesaw.edu/facpubs/4276/)*
-   Varonis, *[A Brief History of Ransomware](https://www.varonis.com/blog/a-brief-history-of-ransomware/)*
-   Security Magazine, *[First Three Quarters of 2019: 7.2 Billion Malware Attacks, 151.9 Million Ransomware Attacks](https://www.securitymagazine.com/articles/91133-first-three-quarters-of-2019-72-billion-malware-attacks-1519-million-ransomware-attacks)*
-   CIAC, *[THE COMPUTER INCIDENT ADVISORY CAPABILITY](https://web.archive.org/web/20060610040400/http://ciac.org/ciac/bulletins/a-10.shtml)*
-   Computer World, [*Wham bam: Global Operation Tovar whacks CryptoLocker ransomware & GameOver Zeus botnet*](https://web.archive.org/web/20140703092912/http://blogs.computerworld.com/cybercrime-and-hacking/23980/wham-bam-global-operation-tovar-whacks-cryptolocker-ransomware-gameover-zeus-botnet)
-   Computer World, *[Massive botnet takedown stops spread of Cryptolocker ransomware](https://www.computerworld.com/article/2490343/massive-botnet-takedown-stops-spread-of-cryptolocker-ransomware.html?page=2)*
-   Federal Bureau of Investigation, *[EVGENIY MIKHAILOVICH BOGACHEV](https://www.fbi.gov/wanted/cyber/evgeniy-mikhailovich-bogachev)*
-   SC Magazine, [*Captives of industry*](https://www.scmagazine.com/home/security-news/ransomware/captives-of-industry/)
-   Spinbackup, *[24 Recent Ransomware Attacks in 2019](https://spinbackup.com/blog/24-biggest-ransomware-attacks-in-2019/)*
-   Dark Reading, *[Average Ransomware Payments More Than Doubled in Q4 2019](https://www.darkreading.com/risk/average-ransomware-payments-more-than-doubled-in-q4-2019/d/d-id/1336893)*
-   JD Supra, *[Ransomware Attacks Predicted to Occur Every 11 Seconds in 2021 with a Cost of $20 Billion](https://www.jdsupra.com/legalnews/ransomware-attacks-predicted-to-occur-48655/)*
-   Kaspersky, *[Tips on how to prevent ransomware attacks](https://usa.kaspersky.com/resource-center/threats/how-to-prevent-ransomware)*
-   U.S. Cybersecurity and Infrastructure Security Agency, *[Security Tip (ST19-001) - Protecting Against Ransomware](https://www.us-cert.gov/ncas/tips/ST19-001)*
-   KnowBe4, *[Chimera Ransomware](https://www.knowbe4.com/chimera-ransomware)*
-   MalwareBytes, *[Inside Chimera Ransomware – the first ‘doxingware’ in wild](https://blog.malwarebytes.com/threat-analysis/2015/12/inside-chimera-ransomware-the-first-doxingware-in-wild/)*
