import { useState } from "react";


export default function TournamentBracket() {


  return (
    <>
      <div className="header">
        <h1>Llaves de torneo Pokemon</h1>
      </div>
      <div className="bracket-container">
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Fordam</div>
              <div className="bracket-score">44</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Sacred Heart</div>
              <div className="bracket-score">22</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-name">Eastern Kentucky</div>
              <div className="bracket-score">16</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-name">Indiana State</div>
              <div className="bracket-score">36</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">UNI</div>
              <div className="bracket-score">44</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Stephen F. Austin</div>
              <div className="bracket-score">10</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Montana</div>
              <div className="bracket-score">52</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">San Diego</div>
              <div className="bracket-score">14</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">New Hampshire</div>
              <div className="bracket-score">44</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Fordham</div>
              <div className="bracket-score">19</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Chattanooga</div>
              <div className="bracket-score">35</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Indiana State</div>
              <div className="bracket-score">14</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Illinois State</div>
              <div className="bracket-score">41</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">UNI</div>
              <div className="bracket-score">21</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Eastern Washington</div>
              <div className="bracket-score">37</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Montana</div>
              <div className="bracket-score">20</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">New Hampshire</div>
              <div className="bracket-score">35</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Chattanooga</div>
              <div className="bracket-score">30</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-name">Illinois State</div>
              <div className="bracket-score">59</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-name">Eastern Washington</div>
              <div className="bracket-score">46</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team">
              <div className="bracket-name">New Hampshire</div>
              <div className="bracket-score">--</div>
            </div>
            <div className="bracket-team">
              <div className="bracket-name">Illinois State</div>
              <div className="bracket-score">--</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team">
              <div className="bracket-name" />
              <div className="bracket-score" />
            </div>
            <div className="bracket-team">
              <div className="bracket-name">North Dakota State</div>
              <div className="bracket-score">--</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-score">3</div>
              <div className="bracket-name">Sam Houston State</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-score">35</div>
              <div className="bracket-name">North Dakota State</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">34</div>
              <div className="bracket-name">Sam Houston State</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">31</div>
              <div className="bracket-name">Villanova</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-score">32</div>
              <div className="bracket-name">Coastal Carolina</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-score">39</div>
              <div className="bracket-name">North Dakota State</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-score">26</div>
              <div className="bracket-name">Jacksonville State</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-score">37</div>
              <div className="bracket-name">Sam Houston State</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">29</div>
              <div className="bracket-name">Villanova</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">22</div>
              <div className="bracket-name">Liberty</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">36</div>
              <div className="bracket-name">Coastal Carolina</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">15</div>
              <div className="bracket-name">Richmond</div>
            </div>
          </div>
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">27</div>
              <div className="bracket-name">North Dakota State</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">24</div>
              <div className="bracket-name">South Dakota State</div>
            </div>
          </div>
        </div>
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">21</div>
              <div className="bracket-name">Sam Houston State</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">17</div>
              <div className="bracket-name">Southeastern Louisiana</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-score">21</div>
              <div className="bracket-name">James Madison</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-score">26</div>
              <div className="bracket-name">Liberty</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team winner">
              <div className="bracket-score">46</div>
              <div className="bracket-name">Richmond</div>
            </div>
            <div className="bracket-team loser">
              <div className="bracket-score">24</div>
              <div className="bracket-name">Morgan State</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div className="bracket-team loser">
              <div className="bracket-score">40</div>
              <div className="bracket-name">Montana State</div>
            </div>
            <div className="bracket-team winner">
              <div className="bracket-score">47</div>
              <div className="bracket-name">South Dakota State</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
