NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/GPSTimeUpdate.h",{1387:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1387\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GPSTimeUpdate</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GPSTimeUpdate command.</div></div>",1389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandId() <span class=\"SHKeyword\">const override</span></div></div>",1391:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represnt type of time being sent/received.&nbsp; GPS_WEEK_NUMBER - used to identify time being sent or received as a week number type.&nbsp; GPS_SECONDS&nbsp; - used to identify time being sent or received as a seconds type.</div></div>",1393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1393\" class=\"NDPrototype NoParameterForm\">GPSTimeUpdate()</div><div class=\"TTSummary\">Creates a GPSTimeUpdate object.</div></div>",1394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~GPSTimeUpdate()</div></div>",1395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1395\" class=\"NDPrototype NoParameterForm\">ByteStream GetWeekValue()</div><div class=\"TTSummary\">Builds the bytes to get the GPS week value.</div></div>",1396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1396\" class=\"NDPrototype NoParameterForm\">ByteStream GetSecondsValue()</div><div class=\"TTSummary\">Builds the bytes to get the GPS seconds value.</div></div>",1397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1397\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream SetWeekValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">timeData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",1398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1398\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream SetSecondsValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">timeData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",1399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1399\" class=\"NDPrototype NoParameterForm\">ByteStream resetToFactorySettings()</div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",1400:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1400\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GPSTimeUpdate command.</div></div>",1402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1402\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",1403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1403\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">fieldDataByte,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">ackNackExpected,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">dataResponseExpected</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GPSTimeUpdate Response object</div></div>",1404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1404\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">unsigned long</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the assist time result</div></div>",1406:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1406\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">uint8 byte to identify field data.</div></div>"});