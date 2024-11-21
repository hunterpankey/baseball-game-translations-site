---
title: During a Game
date: 2024-11-18
author: hunter-baun
excerpt: How to actually play a game of baseball in Hakkyuu no Kiseki mode
series:
  title: Pro Yakyuu Spirits
  url: /games/Prospi/
game: 
  title: Pro Yakyuu Spirits 2024-2025
  url: "/games/Prospi/Prospi20242025/"
mode: 
  title: Hakkyuu no Kiseki
  url: "/games/Prospi/Prospi20242025/Modes/HakkyuuNoKiseki"
category: Gameplay
draft: 
seo:
  title: During a Game
  description: How to actually play a game of baseball in Hakkyuu no Kiseki mode
  image: games/Prospi/Prospi20242025/general/school-courtyard.png
images: # relative to /src/assets/images/
  feature: games/Prospi/Prospi20242025/general/school-courtyard.png
  thumb: games/Prospi/Prospi20242025/general/school-courtyard.png
  slide: games/Prospi/Prospi20242025/general/school-courtyard.png
  align: object-bottom
tags:
  - game
  - baseball
  - prospi
  - prospi-2024
  - hakkyuu-no-kiseki
  - gameplay
layout: game
imageFolder: /assets/images/games/Prospi/Prospi20242025/HakkyuNoKiseki/Gameplay/During-a-Game
---
[[toc]]
<article class="prose max-w-xl lg:max-w-4xl lg:prose-lg">

OK, we've covered how to get your team practicing well and efficiently, how to set your order and strategy, and how the game determines when you play vs when it simulates, so now let's talk about playing the actual game.

## Pregame
Once you hit the "Play" button, the game takes you onto the field for the action. First, it shows you an introduction sequence with the tournament info, your opponent, and the pregame ceremonies.

[1]: {{ imageFolder }}/1-game-title-card.png
[2]: {{ imageFolder }}/2-pregame-charge.png
[3]: {{ imageFolder }}/3-pregame-ceremony.png
[4]: {{ imageFolder }}/4-pregame-ceremony-bow.png
[5]: {{ imageFolder }}/5-opponent-rating.png
[6]: {{ imageFolder }}/6-opposing-pitcher.png

![Game title card][1]
*Note: You can skip all of this by pressing X.*
First, the game shows the title card with some overview information:
* Tournament name/type: {% jisho "夏の県大会" %} - Summer ({% jisho "夏" %}) Prefectural ({% jisho "県" %}) Tournament ({% jisho "大会" %})
* Round: {% jisho "準準決勝", "準々決勝" %} - Quarterfinal (literally, "semi-semi-deciding victory". If the "deciding victory" is the final, then the "semi-deciding victory" is the semifinal, then the "semi-semi-deciding victory" is the quarterfinal.)
* Tournament day: 8{% jisho "日" %}{% jisho "目" %} - eighth day of the tournament (「目」 is the ordinal number suffix, so it turns 8日, "eight days", into, 8日目, "the eighth day".)
* Team game number: {% jishoSearch "第4試合" %} - team's fourth game of the tournament. (From this, we can infer that there are 6 games to win the tournament: this quarterfinal is the 4th, semi is the 5th, final is the 6th. From there, we can deduce that I'm playing in a "normal" size prefecture, which Aomori is.)
* 1st base dugout team ({% jisho "一塁" %}{% jisho "側" %})

![Pregame charge][2]
There are some interesting ceremonial aspects of high school baseball games in Japan. First is the charge: Both teams gather in a line in front of their dugout, roughly in starting lineup order, and then they simultaneously sprint toward a line running from the mound to the plate.

![Pregame ceremony lineup][3]
Once they reach the line, they line up a few steps across, facing their opponent.


![Bowing to the opponents][4]
After a few seconds, they shout and bow to each other before heading off, home team taking the field, and visitors returning to the dugout. The PA plays the air-raid siren.


![Opponent lineup and info][5]
The game then shows you your opponent, with team ranking, spiderweb ratings, and starting lineup with basic stats. The lineup rows are [position](../../General/Lists/#positions), last name, first name, batting handedness, average, and HR.

![Starting pitcher information][6]
Last, it shows the starting pitcher with some basic info as well. This guy is Shougo Morimoto ("{% jisho "森本" %} {% jisho "翔吾" %}"), a senior (3rd year, {% jisho "三年生", "3年" %}), a starting pitcher ("{% jisho "先発" %}"), and a pitcher ("{% jisho "投手" %}).

[13]: {{ imageFolder }}/13-sim-screen.png

[15]: {{ imageFolder }}/15-pitching-warmup.png
[16]: {{ imageFolder }}/16-facing-a-batter.png
[17]: {{ imageFolder }}/17-facing-a-batter-pitch.png
[18]: {{ imageFolder }}/18-end-of-inning.png
[19]: {{ imageFolder }}/19-pitching-moment.png
[20]: {{ imageFolder }}/20-final-score-card.png
[21]: {{ imageFolder }}/21-final-line-score.png

## Gameplay
![Pitching warmup interface][15]
If you're the home team, you can take three warmup pitches to find the zone on your various pitches. If you're the visitors, this won't happen until the bottom of the first inning. I usually throw one each of three offspeed pitches to remind myself of how far they break. You can skip this with triangle/Y.

First, the score bug in the top left. It contains the following:
* Inning indicator: numeral for the inning number and top ({% jisho "表" %}) and bottom ({% jisho "裏", "ウラ" %}). Japanese uses "front" and "back" instead of top and bottom. Unfortunately the characters for front and back are very similar (「{% jisho "表" %}」 and 「{% jisho "裏" %}」), so historically on an SDTV, the bottom is written in katakana (「{% jisho "裏", "ウラ" %}」)instead of kanji, which continues as tradition.
* Teams and score: In Japan, the home team is listed first, rather than second as it is in the US, so in the screen my team ({% jisho "大島" %}) is the visitors, listed second. I've scored 4 in the top of the first on two two-run homers in this game, and I'm playing a team that uses 「{% jisho "大" %}」 as it's insignia.
* Bases occupied: When runners reach base the base diagram in the top-left lights up the appropriate base.
* Balls, strikes, and outs: These work like you'd expect, lighting up the indicators.

Next, the pitch type indicator in the top middle, which shows:
* Pitches available: The L-stick directions with pitches that your pitcher can throw are lit up. You can reach the second pitch in a direction with L-stick in that direction followed by L1.
* Pitches unavailable: the L-stick directions without pitches available are still shown but with a black line instead. You can train pitches that use that direction using practice orders.
* Pitch quality and control: in the center of the indicator, you'll see two letters. These correspond to the sharpness and control of the pitch and will also correspond to the general sizes of the gray "good zone" and the white "best pitch" line when delivering the pitch.

Below the strike zone is an indicator showing pitch velocity information:
* Pitch velocity indicator: The magenta dot shows the velocity of the selected pitch type.
* Expectation indicator: Later, when there's a batter, the small background dots will enlarge to indicate the velocity that the batter seems to expect based on the pitch sequence. Strategically, you want to change speed, break, and location as you pitch to keep the batter off balance. 
* The words on the indicator are "slow" ({% jisho "遅い" %}) on the left and "fast" ({% jisho "早い", "速い" %}) on the right.

On the right is the wind indicator:
* Direction indicator: Shown with the arrow on the field diagram. Here it's blowing in from left field.
* Speed: "1m" is one meter/second, about 2.25 mph. This is just enough to be noticeable, but won't affect the flight of the ball too significantly.

Finally, at the bottom is the pitcher information:
* Stamina meter: In the top left, the stamina meter shows the energy/fatigue level. This will decrease as you pitch, and the special catcher skill level will slow down or speed up the decrease of your stamina.
* Pitch count: In the top right is the total count of game pitches thrown. Warmup pitches don't count toward this or the stamina. The character is the one for "ball", 「{% jisho "球" %}」.
* Pitcher type: In the left middle, the word 「{% jisho "先発" %}」 indicates that this is the starting pitcher.
* School year: Just to the right, 「{% jisho "三年生", "3年" %}」 says that this pitcher is a senior.
* Name: The pitcher's name is shown in the center. This guy is Akitaka Fukushima (「{% jisho "福島" %}{% jisho "明孝" %}」). As usual, surname is listed before given name in Japanese. Keep in mind that you can set this to the reverse for created players in their player creation screen.
* Mood indicator: In the right middle, the mood icon is displayed. This one is the middle mood of the five, shown in text as 「{% jisho "普通", "ふつう" %}」, which means "normal" or "ordinary". The game give a benefit for good moods and makes it more difficult for players with bad moods, and this one means "no change".
* ERA: Fukushima's ERA is 1.93, shown by the character 「{% jisho "防御率", "防" %}」, which means "defend" or "protect".
* Strikeouts and hits: Strikeouts and hits allowed in this game are shown in the bottom right.

Next, the first batter will step in and the game will start. 

### Facing a Batter
![Facing a batter][16]

When the game starts, some additional information appears for the batter, the following batters, and fielder positions.

First, the batter information in the bottom right, next to the pitcher information:
* Batter ratings: The top row shows the batter's contact vs. your pitcher's handedness (right, in this case), followed by power, followed by speed.
* Lineup position: On the left side of the middle row is the ordinal position in the lineup. This guy is the leadoff hitter, so "1".
* Field position: This is the right fielder, shown as the character for "right" ({% jisho "右" %}).
* School year: Just to the right, 「{% jisho "三年生", "3年" %}」 says that this batter is a senior.
* Name: The batter's name is shown in the center. This guy is Mitsunobu Hosomi (「{% jisho "細見" %}{% jisho "光信" %}」). As with the pitcher, the surname is listed first.
* Mood indicator: In the right middle is the mood icon. This batter is in a bad mood, but not the worst, so he'll be debuffed by a bit because of that.
* Batting average: .059 is pretty pitiful, here. Average is shown with the 「{% jisho "率" %}」 character, which means "ratio".
* Homers and RBI: Shown with the 「{% jisho "本" %}」 character, which has the pronunciation "hon" for home runs, and the 「{% jisho "点" %}」 character, meaning "point" or "mark".

Next, the following batters, at the top of the screen next to the score bug:
* Next batter and hole batter: Shows the name and handedness of the next two batters to assist you in making pitching change decisions.

Last, the field positions diagram, which shows the position of all the fielders as well as baserunners when the ball is in play:
* Fielder position: Accurate field position is shown for fielders. This comes into play when you hit a ball to the wall, and the throw is coming back to the infield. The player covering the base will move to where the ball is thrown, so an offline throw to second base will let you safely advance to second most of the time. If you see the fielder move off of the base, you can advance.
* Ball position: Shown in this diagram with a moving circle indicator. If it's not obvious by the actual ball on the screen, the diagram would show you if the throw is headed for the cutoff man vs. directly to the base.
* Runner position: Runners will be accurately depicted between bases, changing to arrows when they are advancing or retreating, and shown as circles when they're going to stop at the next base they reach. The runner indicators will flash as you spam L1 and R1 to sprint.
* Baserunning instruction indicators: When baserunners are instructed to advance, a white curved arrow will appear and flash around the outside of the base to be rounded.

### Throwing a Pitch
Maybe you noticed that within the strike zone, where you'd usually see the hot and cold indicators is just a bunch of gray boxes. That's because you don't actually know much about the batter in terms of a scouting report. Whereas the pros are all 100% scouted, so that information is known, these high schoolers really aren't known. 

![Throwing pitches][17]
Here, I've thrown a pitch into the top-right part of the zone, and the display has updated that box and the two adjacent ones with the new scouting information. As I throw more pitches in more locations, the rest of the zone will become hot/cold zones.

Another thing you might notice is the small cards below the pitcher information area. These are the additional, non-point-based attributes that players can have. Here I have:
* {% jisho "リリース" %}: Good release, i.e., less likely to throw wild, "!" pitches.
* {% jisho "内攻" %}: Inner aggression, i.e., competitive spirit, to help with runners on (I assume. I don't actually know this for sure.)
* {% jisho "フライ-1", "フライ" %}: Tendency to produce fly balls from batters

Batters will get these as well, but this batter doesn't have any/I haven't scouted them to know about them. Generally, good attributes will have a light background and bad attributes will have a dark background. When there are a lot of them, they're overlapped, which makes them hard to read.

![End of the half-inning][18]
When the inning ends, you'll see the first three batters in the next half as well as the line score so far. Here, I have the 9th batter 福島 (Fukushima) leading off, followed by 1st batter 湯浅 (Yuasa) and 2nd batter 北方 (Kitakata).

### Menus
At some point, you're going to want to call time out and do something. The game will manage relief pitchers and whatnot during the simulated parts, but if you want to do them yourself, hit Start/Option, and you'll get the pause menu at the next break in the action. If a play is currently happening, you'll see a small "Time out" message in the top corner of the screen.

[7]: {{ imageFolder }}/7-pause-menu.png
[8]: {{ imageFolder }}/8-messenger-menu.png
[9]: {{ imageFolder }}/9-pinch-hitting-menu.png
[10]: {{ imageFolder }}/10-pinch-running-menu.png

#### Pause Menu
![Standard pause menu][7]
Here's the pause menu:
Left side:
* Play ball (プレイ)
* Pinch Hitter (代打)
* Pinch Runner (代走)
* Batting Data (打者データ)
* Pitching Data (とうしゅでーた)
* Intentional Walk (申告敬遠)
* Strength Analysis (戦力分析)
* Messenger (伝令)

Right side:
* Replay (リプレイ)
* Digest Settings (ダイジェスト設定)
* User Settings (ユーザー設定)
* Game Settings (試合設定)
* Sound Settings (サウンド設定)
* Manual/Guide (操作ガイド)
* Simulate to the end (自動試合で最後まで)
* Quit/Save and Quit (試合中止)

#### Messenger Menu
![Messenger menu][8]
You can also coach players during the game. Rather than going out yourself, you send in another player to take the message to the batter or pitcher. From the pause menu, select "Messenger" in the bottom-left. You'll see a list of your players, along with their school year and what kind of message they will send. 

In the status bar at the bottom, the effect they'll have is shown. This one says, 「打者能力をものすごく上げます （１打席、打者のミートアップ特大）」, which means "Batter's ability will rise greatly (For one at bat, the batter's contact will go up an extra-large amount)". The part we care about is in the middle, 「{% jishoSearch "ミートアップ" %}」.

Possible effects are:
* Improve contact (ミート)
* Improve power (パワー)
* Improve mood
* Change cold zones to neutral/hot

#### Pinch Hitter Menu
![Pinch hitter menu][9]
Here's the pinch hitter menu. Just pick a guy from the bottom list to replace the batter on the top. You can see the batter's lineup position, fielding position, name, mood, school year, and reliability in the light rectangle. To the right is contact vs. righties, contact vs. lefties, and power. The last column indicates whether a player is designated as a pinch hitter. Look for a circle icon to indicate this. (A player can receive this skill through play, from a book or other item (probably), or through being taught by you in special training.)

If you want to look at batter data (打者データ) or pitcher data (投手データ) from here, those buttons are available on the top row. You can switch to the pinch running menu with the secont button (代走). Once you select the pinch hitter, select OK to confirm, or reset (リセット) to revert to the regular batter. After reverting, select OK or press circle twice to exit the menu. (The first press highlights the OK button, the second actually backs out.) If you don't reset but want to cancel out, press circle twice, and then select 「はい」 from the dialog asking you to confirm that you'll lose these changes.

#### Pinch Runner Menu
![Pinch runner menu][10]
The pinch runner menu is similar, but you have to pick which runner you want to replace with who. Select which base you want to replace the runner on (1塁 is first base, 2塁 is second base, 3塁 is third base), then select the runner from the list below. You can see the player's name, mood, school year, and reliability in the light rectangle. To the right is running speed (top speed, acceleration on hits), baserunning ability (fly ball reads, reaction time, etc.), and stealing ability (quick jumps, acceleration, avoiding pickoffs, etc.). If you want to steal, and you have two guys with the same speed rating, take the one with higher stealing and better baserunning. Even if you're not stealing, you want your runner to react to liners and fly balls in the gaps as quickly as possible to get the extra base.

As in the pinch hitter menu, you can switch back to the pinch hitting menu, look at pitcher and batter data from the middle buttons on top, and reset to the original baserunners with the button on the right. Confirm changes with OK, or reset and OK to cancel, or circle twice to cancel (confirm the dialog if you previously made changes).

### Simulation
![Beginning simulation][13]
After the first inning is complete, the CPU will take over and simulate the game until one of the [sim rules](../Sim-Rules) is hit. The sim screen shows the two teams with lineups, including batting order number, field position and associated color, name, and mood for each player. The line score is along the top, and the game situation is shown in the center.

* The control in the top right is to control how substitutions are made. 「{% jishoSearch "選手交代切替" %}」. Press square/X to change. This is currently set to auto (「{% jisho "オート" %}」).
* Inning: Shown with the numeral, the counter 「回」, and the top (表) or bottom (ウラ) indicator.
* Current pitcher: Shown just below the field diagram with the 投手 label. The current pitcher is Morimoto (森本).
* Simulation speed: Below the pitcher is the simulation speed, varying between painfully slow and blindingly fast. The label is 「{% jishoSearch "試合速度" %}」, and the value is 「{% jisho "標準" %}」, or "standard".
* Time out button indicator: Press the right half of the touchpad to call time and make your own substitutions.
* Play indicators: As plays happen, they'll be shown on the field diagram, and the runners, score, and outs will update. Unless you read Japanese well, they disappear to fast to see much information, but generally, outs are gray, hits are red, and other stuff is gold (HBP, sac bunt, etc.).

#### Returning to Live Play
![Returning to live play][19]
When one of the [live play criteria](../Sim-Rules) is hit, you'll see a screen like this that gives you the game situation before sending you back to the field. In this case, I'll be pitching with two outs and no runners in the bottom of the seventh. My pitcher has thrown 69 pitches (「{% jisho "投球" %}{% jisho "数" %}」), he's given up 1 hit (「{% jisho "被" %}{% jisho "安打" %}」), has 6 strikeouts (「{% jisho "奪三振" %}」), and 1 walk (「{% jisho "四死球" %}」). Press X here to go back to the field.

### Finishing the Game
![Game over card][20]
When the game is over, you'll see something like this screen for a win, or a similar one for a loss with different characters in the middle. In this case, {% jisho "勝利" %} means "victory", and {% jisho "対" %} means "vs." or "against".

![Final line score][21]
Next you'll get the final line score as everyone trots off the field. This one was a good one for my team. They don't all go like this, for sure. Also, note the 2000VP that I earned for this game. I can go back to the mode select menu into the VP store and buy items or unlock stadiums, coaches, and OB players with this. Press X to wrap it up and go to the post-game.


</article>