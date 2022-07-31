import "./listOfTextsListening.css"
import React, {useState} from "react";
export let ListOfTexts = () => {
    const [premium, setPremium] = useState<boolean>(false)
    const [premiumTwo, setPremiumTwo] = useState<boolean>(false)
    const [premiumThree, setPremiumThree] = useState<boolean>(false)
    const [premiumFour, setPremiumFour] = useState<boolean>(false)
    return  <div className="containerListeningTexts">
            <div style={{padding:"0px 20px"}}>
                <div className="contentTexts">
                    <div className="contentTextsListening__title"><h2 style={{paddingTop:"20px"}}>Level A1</h2></div>
                    <div className="contentTextsListening__titleAndTest">
                        <div style={{paddingRight:"150px"}} className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                        <div className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                    </div>
                    <div className="blockContent__nameOfTextsAndButton">
                        <div className="nameOfTextsAndButton">
                            <div style={{marginTop:"10px"}}><a>Deutsch lernen</a><p>I like being able to communicate in different languages.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div  style={{marginTop:"10px"}}><a>Grüße aus dem Urlaub</a><p>I'm telling my friend Thomas about my holidays</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premium ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div  style={{marginTop:"10px"}}><a>Ein Besuch bei den Eltern</a>
                                <label className="iconPremium">Premium</label>
                                <p>A long way to my parents' house</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premium ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Im Supermarkt</a>      <label className="iconPremium">Premium</label>
                                <p>Christine needs to buy some things from the grocery store.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premium ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Geburstag</a>
                                <label className="iconPremium">Premium</label>
                                <p>Markus is eager to celebrate his birthday.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockButtonPremium"><button
                        onClick={()=>premium?setPremium(false):setPremium(true)}>
                        Premium: 2 more Texts</button></div>
                    <div className="contentTextsListening__title"><h2>Level A2</h2></div>
                    <div className="contentTextsListening__titleAndTest">
                        <div style={{paddingRight:"150px"}} className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                        <div className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                    </div>
                    <div className="blockContent__nameOfTextsAndButton">
                        <div className="nameOfTextsAndButton">
                            <div style={{marginTop:"10px"}}><a>Bei den Großeltern</a>
                                <p>When I don't see them, I miss them a lot.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div  style={{marginTop:"10px"}}><a>Eine lange Reise</a>
                                <p>I'm taking the train to visit my grandma</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div  style={{marginTop:"10px"}}><a>Im Einkaufszentrum</a>
                                <p>Trying on clothes at the mall</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div style={{marginTop:"10px"}}><a>Im Wald</a>
                                <p>A weekend in the woods</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumTwo ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Auf Flughafen</a>
                                <label className="iconPremium">Premium</label>
                                <p>Sebastián is anxious to get on the plane.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumTwo ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Im Kinoe</a>
                                <label className="iconPremium">Premium</label>
                                <p>The movie we saw was very enjoyable.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockButtonPremium"><button
                        onClick={()=>premiumTwo?setPremiumTwo(false):setPremiumTwo(true)}>
                        Premium: 3 more Texts</button></div>
                    <div className="contentTextsListening__title"><h2>Level B1</h2></div>
                    <div className="contentTextsListening__titleAndTest">
                        <div style={{paddingRight:"150px"}} className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                        <div className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                    </div>
                    <div className="blockContent__nameOfTextsAndButton">
                        <div className="nameOfTextsAndButton">
                            <div style={{marginTop:"10px"}}><a>Ein Tag im Schwimmbad</a>
                                <p>Let's swim for a while and sunbathe.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div  style={{marginTop:"10px"}}><a>Jana geht zum Zahnarzt</a>
                                <p>Jana has a hole in her molar.</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumThree ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Ein Freund aus dem Tierheim</a>
                                <label className="iconPremium">Premium</label>
                                <p>Animal shelters in Germany</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumThree ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>A well-deserved vacation to really relax</a>
                                <label className="iconPremium">Premium</label>
                                <p>Eine Reise nach Schweden</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockButtonPremium"><button
                        onClick={()=>premiumThree?setPremiumThree(false):setPremiumThree(true)}>
                        Premium: 2 more Texts</button></div>
                    <div className="contentTextsListening__title"><h2>Level B2</h2></div>
                    <div className="contentTextsListening__titleAndTest">
                        <div style={{paddingRight:"150px"}} className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                        <div className="titleAndText">
                            <div>Title</div>
                            <div>Test</div>
                        </div>
                    </div>
                    <div className="blockContent__nameOfTextsAndButton">
                        <div className="nameOfTextsAndButton">
                            <div style={{marginTop:"10px"}}><a>Ein toller Geburtstag</a>
                                <p>Tobias is happy with his birthday presents</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className="nameOfTextsAndButton">
                            <div  style={{marginTop:"10px"}}><a>Das Brandenburger Tor</a>
                                <p>One of the most important monuments in Berlin.</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumFour ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Hund und Besitzerin wieder vereint</a>
                                <label className="iconPremium">Premium</label>
                                <p>They were both excited to see each other again.</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                        <div className={premiumFour ? "nameOfTextsAndButton" : "nameOfTextsAndButton premium"}>
                            <div style={{marginTop:"10px"}}><a>Hund und Besitzerin wieder vereint</a>
                                <label className="iconPremium">Premium</label>
                                <p>They were both excited to see each other again</p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}><div><span>?</span></div>
                                <div>
                                    <button>start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockButtonPremium"><button
                        onClick={()=>premiumFour?setPremiumFour(false):setPremiumFour(true)}>
                        Premium: 2 more Texts</button></div>
                </div>
            </div>
        </div>
}
