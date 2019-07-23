NDSummary.OnToolTipsLoaded("CClass:ResponseCollector",{7158:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7158\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ResponseCollector</div></div></div><div class=\"TTSummary\">Stores all the expected command responses</div></div>",7160:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7160\" class=\"NDPrototype NoParameterForm\">std::vector&lt;ResponseInfo&gt; m_expectedResponses</div><div class=\"TTSummary\">Holds the response patterns that, if matched, belong to this collector</div></div>",7161:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7161\" class=\"NDPrototype NoParameterForm\">std::mutex m_responseMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_expectedResponses vector</div></div>",7162:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7162\" class=\"NDPrototype NoParameterForm\">Connection* m_connection</div><div class=\"TTSummary\">The Connection pointer to use for retrieving byte information.</div></div>",7164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7164\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the connection points to use for retrieving byte information.</div></div>",7165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7165\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> registerResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponsePattern&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Registers a ResponsePattern with this collector</div></div>",7166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7166\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> unregisterResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponsePattern&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Unregisters a ResponsePattern that is within this collector</div></div>",7167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> waitingForResponse()</div><div class=\"TTSummary\">Gets whether or not this response collector currently has any response patterns to match</div></div>",7168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchExpected(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks to see if the byte(s) passed in match any of the expected responses</div></div>",7169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7169\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchExpected(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">lastReadPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks to see if the wireless packet passed in matches any of the expected responses</div></div>",7170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7170\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchExpected(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks to see if the MipDataField passed in matches any of the expected responses</div></div>"});