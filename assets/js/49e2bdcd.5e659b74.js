"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[208],{673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(4848),o=n(8453);const r={id:"key-migration",sidebar_label:"Key Migration",title:"Key Migration",slug:"key-migration"},i="Resharding Overview",a={id:"cluster/key-migration",title:"Key Migration",description:"Garnet cluster supports scale up/down operations as a way to mitigate demand variability or failovers.",source:"@site/docs/cluster/key-migration.md",sourceDirName:"cluster",slug:"/cluster/key-migration",permalink:"/docs/cluster/key-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/cluster/key-migration.md",tags:[],version:"current",frontMatter:{id:"key-migration",sidebar_label:"Key Migration",title:"Key Migration",slug:"key-migration"},sidebar:"garnetDocSidebar",previous:{title:"Replication",permalink:"/docs/cluster/replication"},next:{title:"Onboarding",permalink:"/docs/dev/onboarding"}},l={},c=[{value:"Manual slot migration",id:"manual-slot-migration",level:2},{value:"Automatic slot migration",id:"automatic-slot-migration",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"resharding-overview",children:"Resharding Overview"}),"\n",(0,s.jsx)(t.p,{children:"Garnet cluster supports scale up/down operations as a way to mitigate demand variability or failovers.\nThe cluster operator can add/remove nodes and perform online resharding without any down time (i.e. clients are still able to perform queries while the associated data migrate between nodes).\nUnder the covers, resharding is achieved by utilizing a combination of CLUSTER SETSLOT and MIGRATE commands.\nThis page presents an overview of the options and features supported by these commands and some examples on how to use them to reshard slots among available primary nodes.\nFor more details about the commands mentioned herewith, please consult the cluster commands doc."}),"\n",(0,s.jsx)(t.h1,{id:"slot-migration-overview",children:"Slot Migration Overview"}),"\n",(0,s.jsx)(t.p,{children:"Migrating a slot from a (source) primary node to another (target) primary node involves the following steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Change slot state at target node to IMPORTING state."}),"\n",(0,s.jsx)(t.li,{children:"Change slot state at source node to MIGRATING state."}),"\n",(0,s.jsx)(t.li,{children:"Migrate actual keys from source to target node"}),"\n",(0,s.jsx)(t.li,{children:"Inform target and source nodes of ownership change by changing the slot owner and state."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The cluster operator can either manually perform the above steps using a combination of CLUSTER SETSLOT, MIGRATE, CLUSTER COUNTKEYSINSLOT and CLUSTER GETKEYSINSLOT commands\nor utilize a variant of MIGRATE command to automatically perform all steps of the process."}),"\n",(0,s.jsx)(t.h2,{id:"manual-slot-migration",children:"Manual slot migration"}),"\n",(0,s.jsx)(t.p,{children:"The first step of migrating a slot between two nodes involves setting slot to IMPORTING and MIGRATING respectively.\nThis is achieve using either of the following commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER SETSLOT <slot> <IMPORTING node-id | MIGRATING node-id | NODE node-id | STABLE>\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER SETSLOTRANGE <IMPORTING node-id | MIGRATING node-id | NODE node-id | STABLE> start-slot end-slot [start-slot end-slot ...]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Changing the slot state prevents clients for performing write operations at the source node until migration completes.\nThis ensures write safety, however it does not block reads for existing keys.\nThe source node will redirect reads to non-existent keys and writes to target node.\nClients can use ASKING command in front of every write to override write restrictions.\nHowever, this should be used with care because there are no safeguards implemented to prevent from loosing writes while migration is happening."}),"\n",(0,s.jsx)(t.p,{children:"The next step after changing the state of the slot that is being migrated, is two find all keys hashing to the corresponding migrate slot and transfer them to the target node.\nThis is achieved using the following commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER COUNTKEYSINSLOT slot\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER GETKEYSINSLOT slot\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"migrate <host> <port> [KEY] | [destination-db] [COPY] [REPLACE] [AUTH password] [AUTH2 username password] [KEYS keys]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The operator can utilize the above commands to iterate through existing keys and transfer them to the target node.\nWhen data migration completes the operator should issue ",(0,s.jsx)(t.code,{children:"CLUSTER SETSLOT NODE <node-id>"})," to source and target node to complete slot change of ownernship.\nIf migration fails the cluster operator is responsible for resolving any possible errors to bring the cluster in a stable state.\nThis can be done by using a combination of the following commands as needed"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"CLUSTER SETSLOT STABLE"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"CLUSTER DELKEYSINSLOT <slot>"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CLUSTER DELKEYSINSLOTRANGE start-slot end-slot [start-slot end-slot ...]"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-slot-migration",children:"Automatic slot migration"}),"\n",(0,s.jsx)(t.p,{children:"Manually migrating keys is a cumbersome operation and prone to errors.\nThe cluster operator can overcome this by utilizing a variant of migrate command that migrates entire slots or ranges of slots at a time."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"migrate <host> <port> [KEY] | [destination-db] [COPY] [REPLACE] [AUTH password] [AUTH2 username password] [[SLOTS slot] [SLOTSRANGE start-slot end-slot [start-slot end-slot ...]]\n"})}),"\n",(0,s.jsx)(t.p,{children:"The slots variant of migrate command will perform all the aforementioned operations automatically.\nIt will spawn a background that performs all the necessary operations.\nThe cluster operator can monitor the progress of migration by utilizing the following commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER MTASKS\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CLUSTER SLOTSTATE <slot>\n"})}),"\n",(0,s.jsx)(t.h1,{id:"migrate-slots-example",children:"Migrate slots example"}),"\n",(0,s.jsx)(t.p,{children:"This section presents and example on how to use migrate slots option to migrate multiple slots at once.\nThis example assumes the existence of cluster deployment with 2 nodes, as shown below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"127.0.0.1:7000> cluster nodes\n7e59ecfef6cae5e22b47d8f63c789a1e66031a60 192.168.1.26:7000@17000,test-host1 myself,master - 0 0 1 connected 0-8191\n4cb7e9cb54684d20f777c2916145acfd6be48efe 192.168.1.26:7001@17001,test-host2 master - 0 0 2 connected 8192-16383\n"})}),"\n",(0,s.jsx)(t.p,{children:"After adding data to node 2, we can identify which slots contain the corresponding keys.\nFor the sake of this test case, we will be moving only the associated slots to node 1.\nAlternatively, we can move entire slot ranges or individual keys manually."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'PS C:\\Dev> redis-cli -p 7001\n127.0.0.1:7001> set x 12\nOK\n127.0.0.1:7001> set y 22\nOK\n127.0.0.1:7001> set a 33\nOK\n127.0.0.1:7001> set d 44\nOK\n127.0.0.1:7001> get x\n"12"\n127.0.0.1:7001> get y\n"22"\n127.0.0.1:7001> get a\n"33"\n127.0.0.1:7001> get d\n"44"\n127.0.0.1:7001> cluster nodes\n4cb7e9cb54684d20f777c2916145acfd6be48efe 192.168.1.26:7001@17001,test-host2 myself,master - 0 0 2 connected 8192-16383\n7e59ecfef6cae5e22b47d8f63c789a1e66031a60 192.168.1.26:7000@17000,test-host1 master - 0 0 1 connected 0-8191\n127.0.0.1:7001> cluster keyslot x\n(integer) 16287\n127.0.0.1:7001> cluster keyslot y\n(integer) 12222\n127.0.0.1:7001> cluster keyslot a\n(integer) 15495\n127.0.0.1:7001> cluster keyslot d\n(integer) 11298\n'})}),"\n",(0,s.jsx)(t.p,{children:"To move individual slots, we utilize the SLOTS option as shown below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'127.0.0.1:7001> migrate 192.168.1.26 7000 "" 0 -1 SLOTS 16287 12222 15495 11298\nOK\n127.0.0.1:7001> cluster nodes\n4cb7e9cb54684d20f777c2916145acfd6be48efe 192.168.1.26:7001@17001,test-host2 myself,master - 0 0 2 connected 8192-11297 11299-12221 12223-15494 15496-16286 16288-16383\n7e59ecfef6cae5e22b47d8f63c789a1e66031a60 192.168.1.26:7000@17000,test-host1 master - 0 0 3 connected 0-8191 11298 12222 15495 16287\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After migration completes, we can see the updated configuration by calling ",(0,s.jsx)(t.code,{children:"cluster nodes"})," at each node.\nAt this point if we issue a read request towards node 2, we receive a redirection message to node 1.\nTo access the migrated keys, we have connect to node 1 since it is the owner of the slots associated with corresponding keys."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'127.0.0.1:7001> get x\n(error) MOVED 16287 192.168.1.26:7000\n127.0.0.1:7001> get y\n(error) MOVED 12222 192.168.1.26:7000\n127.0.0.1:7001> get a\n(error) MOVED 15495 192.168.1.26:7000\n127.0.0.1:7001> get d\n(error) MOVED 11298 192.168.1.26:7000\n127.0.0.1:7001> exit\nPS C:\\Dev> redis-cli -p 7000\n127.0.0.1:7000> get x\n"12"\n127.0.0.1:7000> get y\n"22"\n127.0.0.1:7000> get a\n"33"\n127.0.0.1:7000> get d\n"44"\n127.0.0.1:7000> cluster nodes\n7e59ecfef6cae5e22b47d8f63c789a1e66031a60 192.168.1.26:7000@17000,test-host1 myself,master - 0 0 3 connected 0-8191 11298 12222 15495 16287\n4cb7e9cb54684d20f777c2916145acfd6be48efe 192.168.1.26:7001@17001,test-host2 master - 0 0 2 connected 8192-11297 11299-12221 12223-15494 15496-16286 16288-16383\n127.0.0.1:7000>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);