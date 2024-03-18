"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"msr-blog-announcement","metadata":{"permalink":"/blog/msr-blog-announcement","editUrl":"https://github.com/microsoft/garnet/tree/main/website/blog/2024-03-18-oss-announcement.md","source":"@site/blog/2024-03-18-oss-announcement.md","title":"OSS Announcement","description":"The Microsoft Research Blog has just published a new post introducing Garnet. Check it out here. Have fun!","date":"2024-03-18T00:00:00.000Z","formattedDate":"March 18, 2024","tags":[{"label":"garnet","permalink":"/blog/tags/garnet"},{"label":"oss","permalink":"/blog/tags/oss"},{"label":"announcement","permalink":"/blog/tags/announcement"},{"label":"msr","permalink":"/blog/tags/msr"}],"readingTime":0.09,"hasTruncateMarker":false,"authors":[{"name":"Badrish Chandramouli","title":"Partner Research Manager, Microsoft Research","url":"https://badrish.net","imageURL":"https://badrish.net/assets/icons/badrish4.jpg","key":"badrishc"}],"frontMatter":{"slug":"msr-blog-announcement","title":"OSS Announcement","authors":"badrishc","tags":["garnet","oss","announcement","msr"]},"unlisted":false,"nextItem":{"title":"A Brief History of Garnet","permalink":"/blog/brief-history"}},"content":"The Microsoft Research Blog has just published a new post introducing Garnet. Check it out [here](https://www.microsoft.com/en-us/research/blog/). Have fun!"},{"id":"brief-history","metadata":{"permalink":"/blog/brief-history","editUrl":"https://github.com/microsoft/garnet/tree/main/website/blog/2024-03-17-a-brief-history-of-garnet.md","source":"@site/blog/2024-03-17-a-brief-history-of-garnet.md","title":"A Brief History of Garnet","description":"Hi everyone! I just wanted to start off this blog with a short history of Garnet and how it","date":"2024-03-17T00:00:00.000Z","formattedDate":"March 17, 2024","tags":[{"label":"garnet","permalink":"/blog/tags/garnet"},{"label":"history","permalink":"/blog/tags/history"},{"label":"introduction","permalink":"/blog/tags/introduction"}],"readingTime":2.885,"hasTruncateMarker":false,"authors":[{"name":"Badrish Chandramouli","title":"Partner Research Manager, Microsoft Research","url":"https://badrish.net","imageURL":"https://badrish.net/assets/icons/badrish4.jpg","key":"badrishc"}],"frontMatter":{"slug":"brief-history","title":"A Brief History of Garnet","authors":"badrishc","tags":["garnet","history","introduction"]},"unlisted":false,"prevItem":{"title":"OSS Announcement","permalink":"/blog/msr-blog-announcement"}},"content":"Hi everyone! I just wanted to start off this blog with a short history of Garnet and how it\\ncame to exist. At Microsoft Research, we have been working on storage technology\\nfor a while. In 2016, we started working on a new key-value store design based on epoch protection and\\na powerful storage API. This project, called [FASTER](https://github.com/microsoft/FASTER), was \\nopen-sourced in 2018 and gained a lot of traction within Microsoft and in the larger community. FASTER\\nhas over 6k stars and over half a million NuGet downloads. Over the next several years, we built \\nfollow-on capabilities such as recoverability (CPR) and serverless support (Netherite), and the \\nproject was widely adopted.\\n\\nAround 2021, we noticed a huge interest in remote cache-stores, particularly using APIs\\nsuch as the RESP API of Redis. Developers loved the flexibility of both the API and the\\ndeployment model as a separate process/service. The cost savings compared to accessing \\ncloud databases directly drove the adoption of caching layers, and these soon\\ngrew to take up a significant portion of the operating cost of large services. When the\\npandemic hit and online service usage spiked, there was a strong need for lowering costs\\nand improving performance (throughput and latency) for such caching layers.\\n\\nWe took on the challenge of building a new system, called Garnet, which could provide\\nextremely high performance end-to-end in a client-server setup while allowing clients\\nto remain largely unmodified by adopting RESP, the most popular wire protocols out there.\\nAfter a lot of design effort, we came up with a server threading model that could indeed \\nmake a huge end-to-end difference, often by orders-of-magnitude, in performance for \\nbasic get and set operations, with unmodified client code. This gave us the confidence to \\nbuild out Garnet\'s feature set towards use in real scenarios.\\n\\nThe next question was API coverage. The Redis API is vast, and we were just a small research\\nteam. Thankfully, our stack was built on .NET, which made tremendous advances in both performance\\nand richness of libraries. We designed a generic yet powerful way to define and use custom\\ndata structures, and were able to quickly implement complex datatypes such as Sorted Set, List,\\nand Hash by reusing data structures in C#. We then built complex structures such as HyperLogLog\\nand Bitmap as well, and added transactions and extensibility features.\\n\\nThe next requirement was scale-out and recovery, for which we designed write-ahead operation logging,\\nsharding capability, replication, and key migration for dynamic scale-out. By keeping basic compatibility\\nwith the Redis API, we were able to add these features in a way that existing client code could\\nbe largely unchanged.\\n\\nAfter thousands of unit tests and a couple of years working with first-party teams at Microsoft\\ndeploying Garnet in production (more on this in future blog posts!), we felt it was time to release \\nit publicly, just like we did with FASTER five years back. We wanted developers across the planet to \\nbenefit from this powerful technology and contribute back to the codebase as well. We felt that \\nthe modern C# codebase would be particularly attractive here, in terms of ease of expansion, \\nmaintenance, and contribution. Coming from MSR, we also wanted people in academia to conduct research,\\ncollaborate with us, and expand various aspects of the system.\\n\\nSo, explore Garnet, see if you can find use for it in your applications, consider helping us out \\nwith expanding its capabilities, and as always, let us know what you think!"}]}')}}]);