import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ToolTipClosingEvent Field


The event raised when a ToolTip on an element that was shown should now be hidden.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly RoutedEvent ToolTipClosingEvent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ToolTipClosingEvent As RoutedEvent
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ToolTipClosingEvent: RoutedEvent
```
</TabItem>
</Tabs>



#### Field Value
RoutedEventMarking the ToolTipClosing event as handled does not cancel closing the tooltip. Once the tooltip is displayed, closing the tooltip is done only in response to user interaction with the UI.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
