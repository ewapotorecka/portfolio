import React from 'react';
import './AboutMe.css';
import Running from '../../images/run.png';
import Climbing from '../../images/climbing.png';
import Poodle from '../../images/poodle.png';

function AboutMe() {
	return(
		<div className="section about">
			<div className="about-container">
				<div>
					<img src={ Running } alt="running" className="abut-pic"></img>
				</div>
				<div>
					<h2>Long distance running</h2>
					<p>
						All my life I’ve hated running. Then COVID came and all of the climbing gyms were closed
						and I was looking for some kind of activity. My first runs were a total disaster (in my opinion)
						- I wasn’t able to run 4km without mixing it with walking. But as it turned out, I’m a totally persistent person.
						Soon came first 10km, which I thought was a very long distance. And then a climbing trip to Austrian Alps.
						A climbing trip, where I couldn’t climb because of a finger injury. So as before - I’ve continued with running, in mountains.
						I’ve always thought that long distance mountain runs is an activity for sick masochists.
						Imagine my surprise, when I made first 17km with 750m elevation and felt great.
						Long distance mountain runs turned out to be totally my activity.
						I’ve started training and finished my first run in September (27km).
						Right now I’m training to run my first ultra distance (something longer than marathon).
					</p>
					<p>
						Long distance running brought many good changes to my life.
						Physically I feel much better, even when I’m tired.
						But most of the changes are in my head. This kind of activity gives you a lot of time to think,
						you discover yourself as a person, the traits that you never thought you have.
						I’ve became (or I always were?) very persistent in pursuing my goals, not only during training or races,
						in real-life situations too. I’m a master of planning and implementing the plans.
						Time management became my thing too, when I had to squeeze training, work, learning and household duties in one day.
					</p>
				</div>
			</div>
			<div className="about-container">
				<div>
					<h2>Climbing</h2>
					<p>
						I’ve discovered climbing pretty late. I wasn’t a sport person.
						As a teenager my main sport activities were windsurfing in summer and snowboarding in winter.
						Not very „active” activities in my opinion. Climbing was a love at first sight.
						Honey moon phase lasted for about two years and then came the fear.
						Specifically the fear of falling, which blocked my development.
						I’m struggling till now. There are a lot of times that I’m so frustrated, that I want to quit.
						But something keeps me going. I love the movement, the state that you get in your head,
						when the only thing that matters is the next move, that you’re gonna make.
					</p>
					<p>
						Climbing gives me chances to travel to all of the beautiful destinations, time spent in nature.
						It also gave me a chance to meet very different, but totally beautiful people including my husband.
					</p>
				</div>
				<div>
					<img src={ Climbing } alt="climbing" className="abut-pic"></img>
				</div>
			</div>
			<div className="about-container">
				<div>
					<img src={ Poodle } alt="poodle" className="abut-pic"></img>
				</div>
				<div>
					<h2>Poodle</h2>
					<p>
						I’m a dog person. My last dog was an English bulldog - not very active kind of dog.
						After her me and my boyfriend (husband now) decided to get a dog, that will fit our lifestyle -
						lots of travelling and activities. After meeting our friends poodle, we’ve decided that the breed is a perfect choice.
						We gave him a name Forest and that’s not the coincidence - when he was young he had only two states: he stood,
						like he was frozen or he run. Hence the name (remember „Forest Gump”?). I could write the whole book about Forest.
						Poodles are believed to be second smartest dogs. And I think that’s true. If you add very strong personality,
						a clear opinion of what he wants and total hyperactivity - you get Forest.
					</p>
					<p>
						I’ve always imagined me climbing and my dog waiting calmly under the rock - not my dog,
						Forest will be barking and protecting „his” rock from other people.
						Me running and my dog running with me - not my dog too. Forest loves running, but he has some preferences
						- morning runs are not for him, he prefers to run with two people and most of all he’s a sprinter,
						but we are working on his long distance endurance.
						Me walking in the park and my dog happily playing with other dogs - even that is not my dog.
						Forest loves other dogs but he gets so excited, that it is not pleasant nor safe for other dogs.
					</p>
					<p>
						So my dog is not perfect. But I love him with all my heart. When he lies down on my lap
						(he still thinks, that he is small dog) all of his faults go away. Forest is a unique. He loves to travel.
						He was already in France, Austria, Slovenia and many places in Poland. When he’s happy he jumps on two feet
						(sometimes problematic giving his size, but adorable). He loves to cuddle and sit on my lap.
						Forest has a perfect smell and enjoys using it. We can hide his toy around the house and he will always find it.
						He’s great in communicating - he can always show, when he wants something,
						and even more clearly when he doesn’t want to do something.
					</p>
					<p>
						Right now I’m spending lots of my time on teaching Forest that he can control himself in many situations.
						I’ve done a lots of reading on reactivity in dogs. Forest even has some dog friends -
						he only needs some more time to control his joy.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;