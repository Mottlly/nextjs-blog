import Greeting from './Greeting.jsx'

function OpeningCrawl () {
const text = '"I swear by my pretty floral bonnet, I will end you."'
    return (
//need a parent container/element
      <> 
      <Greeting text={text}/>
        <>
        <div id="header">
  <h1> Welcome to the not-so-distant future.... </h1>
<img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/0c7eb6ed-663b-4ce4-bfbd-18239a38ba1b" width="500"></img>
</div>

<div id="intro">
  <h3> After the resource wars of the late 21st Century, Earth's nations are desperate for new deposits of rare minerals, gas, and water. While asteroid mining has been effective, it just isn't enough to support the Earth's still-growing 
    population (and many refuse to speak about what happened on Mars). The last hopes of humanity are increasingly placed in the results of explorers, who bravely delve deep into the space between galaxys. Earth's days are limited, may we 
    find our salvation among the stars. In Obscurum! </h3>
</div>

<div id="summary">
  <h1> I hope you enjoy the game! </h1>
</div>
</>
</>
    )
}

export default OpeningCrawl;