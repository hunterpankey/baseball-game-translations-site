---
title: Star Player Options
date: 2024-12-17
author: hunter-baun
excerpt: How can you change how the Star Player mode works?
series:
  title: Pro Yakyuu Spirits
  url: /games/Prospi/
game: 
  title: Pro Yakyuu Spirits 2024-2025
  url: "/games/Prospi/Prospi20242025/"
mode: 
  title: Star Player
  url: "/games/Prospi/Prospi20242025/Modes/Star-Player"
category: Gameplay
draft: 
seo:
  title: Star Player Options
  description: How can you change how the Star Player mode works?
  image: games/Prospi/Prospi20242025/Star-Player/Heading-Images/heading-kobe-nishinomiya.png
images: # relative to /src/assets/images/
  feature: games/Prospi/Prospi20242025/Star-Player/Heading-Images/heading-kobe-nishinomiya.png
  thumb: games/Prospi/Prospi20242025/Star-Player/Heading-Images/heading-kobe-nishinomiya.png
  slide: games/Prospi/Prospi20242025/Star-Player/Heading-Images/heading-kobe-nishinomiya.png
  align: object-center
tags:
  - game
  - baseball
  - prospi
  - prospi-2024
  - star-player
layout: game
imageFolder: /assets/images/games/Prospi/Prospi20242025/Star-Player/General/Star-Player-Settings
---

[[toc]]
<article class="prose max-w-xl lg:max-w-4xl lg:prose-lg">

## Star Player Options
### Pennant Section (ペナント)

| Setting                  | English Name                                         | Description                                                                                                                                                                                            | Values                                                                                                            | Default Value |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------- |
| 捕手リード効果           | Catcher lead effect                                  | Set the special ability effect of catcher lead.                                                                                                                                                        | 普通 - Normal, 大きい - more, 小さい - less                                                                       | 普通          |
| オート試合の投打バランス | Auto match pitching/batting balance                  | Set the pitching/batting balance for skip games and games with fast-forward schedules.                                                                                                                 | レベル１－５ - Level 1-5 (see below for [details](#auto-match-balance-levels))                                    | レベル３      |
| 転生OB選手               | Reincarnated former players                          | Set whether or not to have reborn players who are draft players or new foreign players who are former players rejuvenated. This includes reborn players of real overseas transfer players (WORLDSTAR). | あり - yes, なし - no, 投手あり野手なし - pitchers yes : hitters no, 投資なし野手あり - pitchers no : hitters yes | あり          |
| 転生プロ選手             | Reincarnated professional players                    | Set whether or not draft players and new foreign players will appear as younger versions of active players.                                                                                            | あり - yes, なし - no, 投手あり野手なし - pitchers yes : hitters no, 投資なし野手あり - pitchers no : hitters yes | あり          |
| 交流戦のセ主催試合DH     | DH in interleague games hosted by the Central League | Specifies whether or not a DH will be used when a Central League team is the home team during interleague games.                                                                                       | あり - yes, なし - no                                                                                             | なし          |
| 交流戦のバ主催試合DH     | DH in interleague games hosted by the Pacific League | Specifies whether or not a DH will be used when a Pacific League team is the home team during interleague games.                                                                                       | あり - yes, なし - no                                                                                             | あり          |
| 日本シリーズ DH          | Japan Series DH                                      | Set whether or not to use the DH in Japan Series games.                                                                                                                                                | セなし-パあり - Central League No : Pacific League Yes                                                            | セなし-パあり |

#### Auto-Match Balance Levels
| Level | Description                                                                                                                   |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1     | The pitching/batting balance in skip matches and matches with a fast-forward schedule will be more batting and less pitching. |
| 2     | Slightly more batting and slightly less pitching.                                                                             |
| 3     | Even batting and pitching.                                                                                                    |
| 4     | Slightly more pitching and low batting.                                                                                       |
| 5     | More pitching and less batting.                                                                                               |

### Star Player Section (スタープレイヤー)

| Setting                  | English Name            | Description                                            | Values                                                 | Default Value |
| ------------------------ | ----------------------- | ------------------------------------------------------ | ------------------------------------------------------ | ------------- |
| オートセーブ             | Autosave                | Set whether or not to use autosave.                    | あり - yes, なし - no                                  | あり          |
| スターレベル変動イベント | Star Level change event | Set whether to have star level change events.          | あり - yes, なし - no, 変動時のみ - only when changing | あり          |
| ２軍戦のDH               | 2nd Team DH             | Set whether or not to have a DH in 2nd team games.     | あり - yes, なし - no                                  | あり          |
| ２軍戦の建長             | 2nd Team Tiebreaker     | Set the number of extra innings in 2nd division games. | なし - none (tie after 9 innings), 10/11/12回まで      | なし          |

## Field Options

| Setting          | English Name              | Description                                                     | Values                                                                                                                                                               | Default Value |
| ---------------- | ------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| バッター         | Batting                   | Set how the game will proceed when it is your turn to bat.      | 自分で操作(すべての打席) - bat yourself, オート進行 - auto-advance                                                                                                   |               |
| ランナー         | Baserunning               | Set how you will proceed when you are on base.                  | 自分で操作: すべての出塁 - run yourself every time, 勝ち越し機会 - in lead-change opportunities, 盗塁機会 - base-stealing opportunities. オート進行 - auto-advance.  |               |
| 野手守備         | Fielding                  | Set how the defense will proceed when you are a fielder.        | 自分で操作: 全球 - every pitch, カウントスキップ - skip the count to event situations,　出番おまかせ - let the game choose when you field. オート進行 - auto-advance |               |
| 東急/投手守備    | Pitching/Pitcher Fielding | Set how pitching and defense will proceed when you're pitching. | 自分で操作: 全球 - every pitch, カウントスキップ - skip the count to event situations,　出番おまかせ - let the game choose when you field. オート進行 - auto-advance |               |
| 球種選択         | Pitch Selection           | Set the type of pitch you will pitch when you're pithing.       | 自分で操作 - play yourself, おまかせ - select for me                                                                                                                 |               |
| ネクストバッター | Next Batter               | Set how the game will proceed when you are the next batter.     | 自分で操作 - play yourself, オート進行 - auto-advance                                                                                                                |               |

### Fielding Omakase Setting Details

自分の守備を、自動で進んだカウントからプレイします。
（初回先端打者、ピンチ、試合終了前など）
捕手出場時は投球も行います。

You will play defense from an automatically advanced count. (*Note: I.e., when the batter steps in the box, the count will advance to the point where they hit the ball, finish the at bat, when a runner steals, etc.*)
(First batter of the first inning, in a pinch, before the end of the game, etc.)
When playing as catcher, you also pitch. (*Note: Essentially, when catching, you're calling pitch types and locations for your pitcher.*)

### Pitching Omakase Setting Details

投手出場時に投球と守備を、自動で進んだカウントからプレイします。
(初回先頭打者、ピンチ、試合終了前のみ)

When the pitcher comes in, you will pitch and play defense from an automatically advanced count. 
(Except for first batter in the first inning, in a pinch, or at the end of the game)

</article>