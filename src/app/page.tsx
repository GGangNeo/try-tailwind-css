import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <main>
      <div>
        <h1>This is a title.</h1>
        <h2>This is a subtitle.</h2>
        <p>This is a paragraph.</p>
        <a href='https://www.freecodecamp.org/'>This is an anchor.</a>
        <div>
          <button className='btn btn-primary'>This is a button.</button>
        </div>
        <div>
          <button className='btn btn-secondary '>
            This is the secondary button.
          </button>
        </div>
        <div>
          <button disabled className='btn btn-primary'>
            This is the third button.
          </button>
        </div>

        <input type='checkbox'></input>
        <label>Check box</label>
        <div>
          <input type='email' placeholder='E-mail' required></input>
        </div>
        <div>
          <select>
            <option> option 1 </option>
            <option> option 2</option>
            <option> option 3</option>
          </select>
        </div>
        <h1>This is another title.</h1>
      </div>
    </main>
  );
}
