
These are notes after inspecting the traffic of the actual game

There's a batch "heartbeat" request response with the following calls:

== Startup Requests in the first 3-4 seconds, Starting at 9:08:28 
* GetPlayer
* CheckChallenge 

* GetPlayer
* CheckChallenge 

* DownloadRemoteConfigVersion
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings

* GetAssetDigest
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings

@ 9:08:32
* LevelUpRewards
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings

4 seconds later @ 9:08:36
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings

3 seconds later @ 9:08:39
* GetDownloadUrls
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings

23 seconds later @ 9:09:02
* Map,Heartbeat

30 seconds later @ 9:09:32
* Map,Heartbeat

29 seconds later @ 9:10:03
* Map,Heartbeat

30 seconds later @ 9:10:33
* Map,Heartbeat

Lots more Map,Heartbeats every 30 seconds

@ 9:12:57 getFortDetails, all in one batch:
* FortDetails
Normal "batch" heartbeat
** CheckChallenge
** GetHatchedEggs
** GetInventory
** CheckAwardedBadges
** DownloadSettings
* Map,Heartbeat

9 seconds later @ 9:13:06
* Map,Heartbeat

