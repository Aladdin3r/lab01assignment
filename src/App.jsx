import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='heading'>MyTunes</h1>
      <div className="grid-container">
        <div className='grid-item'><img src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png' alt='taylor swift' width={200} height={250} /></div>
        <div className='grid-item'>
          <h3>Taylor Swift's albums</h3>
          <details>
            <summary>1989</summary>
            <ol>
              <li>"Shake It Off"</li>
              <li>"Blank Space"</li>
              <li>"Style"</li>
              <li>"Bad Blood"</li>
              <li>"Wildest Dreams"</li>
              <li>"Out of the Woods"</li>
              <li>"New Romantics"</li>
            </ol>
          </details>
          <details>
            <summary>Evermore</summary>
            <ol>
              <li>"Willow"</li>
              <li>"No Body, No Crime"</li>
              <li>"Coney Island"</li>
            </ol>
          </details>
          <details>
            <summary>Fearless</summary>
            <ol>
              <li>"Love Story"</li>
              <li>"White Horse"</li>
              <li>"You Belong with Me"</li>
              <li>"Fifteen"</li>
              <li>"Fearless"</li>
            </ol>
          </details>
          <details>
            <summary>Fearless (Taylor's Version)</summary>
            <ol>
              <li>"Fearless"</li>
              <li>"Fifteen"</li>
              <li>"Love Story"</li>
              <li>"Hey Stephen"</li>
              <li>"White Horse"</li>
              <li>"You Belong with Me"</li>
              <li>"Breathe"</li>
              <li>"Tell Me Why"</li>
              <li>"You're Not Sorry"</li>
              <li>"The Way I Loved You"</li>
              <li>"Forever & Always"</li>
              <li>"The Best Day"</li>
              <li>"Change"</li>
              <li>"Jump Then Fall"</li>
              <li>"Untouchable"</li>
              <li>"Forever & Always" (Piano Version)</li>
              <li>"Come In with the Rain"</li>
              <li>"The Other Side of the Door"</li>
              <li>"Today was a Fairytale"</li>
              <li>"You All Over Me"</li>
              <li>"Mr. Perfectly Fine"</li>
              <li>"We Were Happy"</li>
              <li>"That's When"</li>
              <li>"Don't You"</li>
              <li>"Bye Bye Baby"</li>
            </ol>
          </details>
          <details>
            <summary>Folklore</summary>
            <ol>
              <li>"Cardigan"</li>
              <li>"Exile"</li>
              <li>"Betty"</li>
            </ol>
          </details>
          <details>
            <summary>Lover</summary>
            <ol>
              <li>"Me!"</li>
              <li>"You Need to Calm Down"</li>
              <li>"Lover"</li>
              <li>"The Man"</li>
              <li>"Cruel Summer"</li>
            </ol>
          </details>
          <details>
            <summary>Midnights</summary>
            <ol>
              <li>"Anti-Hero"</li>
              <li>"Lavender Haze"</li>
              <li>"Karma"</li>
            </ol>
          </details>
          <details>
            <summary>Red</summary>
            <ol>
              <li>"We Are Never Ever Getting Back Together"</li>
              <li>"Begin Again"</li>
              <li>"I Knew You Were Trouble"</li>
              <li>"22"</li>
              <li>"Red"</li>
              <li>"Everything Has Changed"</li>
              <li>"The Last Time"</li>
            </ol>
          </details>
          <details>
            <summary>Red (Taylor's Version)</summary>
            <ol>
              <li>"I Bet You Think About Me"</li>
              <li>"Message in a Bottle"</li>
            </ol>
          </details>
          <details>
            <summary>Reputation</summary>
            <ol>
              <li>"Look What You Made Me Do"</li>
              <li>"...Ready for It?"</li>
              <li>"End Game"</li>
              <li>"New Year's Day"</li>
              <li>"Delicate"</li>
              <li>"Getaway Car"</li>
            </ol>
          </details>
          <details>
            <summary>Speak Now</summary>
            <ol>
              <li>"Mine"</li>
              <li>"Back to December"</li>
              <li>"Mean"</li>
              <li>"The Story of Us"</li>
              <li>"Sparks Fly"</li>
              <li>"Ours"</li>
            </ol>
          </details>
          <details>
            <summary>Speak Now (Taylor's Version)</summary>
            <ol>
              <li>"Mine"</li>
              <li>"Sparks Fly"</li>
              <li>"Back to December"</li>
              <li>"Speak Now"</li>
              <li>"Dear John"</li>
              <li>"Mean"</li>
              <li>"The Story of Us"</li>
              <li>"Never Grow Up"</li>
              <li>"Enchanted"</li>
              <li>"Better than Revenge"</li>
              <li>"Innocent"</li>
              <li>"Haunted"</li>
              <li>"Last Kiss"</li>
              <li>"Long Live"</li>
              <li>"Ours"</li>
              <li>"Superman"</li>
              <li>"Electric Touch"</li>
              <li>"When Emma Falls in Love"</li>
              <li>"I Can See You"</li>
              <li>"Castles Crumbling"</li>
              <li>"Foolish One"</li>
              <li>"Timeless"</li>
            </ol>
          </details>
          <details>
            <summary>Taylor Swift</summary>
            <ol>
              <li>"Tim McGraw"</li>
              <li>"Teardrops On My Guitar"</li>
              <li>"Our Song"</li>
              <li>"Picture to Burn"</li>
              <li>"Should've Said No"</li>
            </ol>
          </details>
          
        </div>
      </div>
    </>
  )
}

export default App
