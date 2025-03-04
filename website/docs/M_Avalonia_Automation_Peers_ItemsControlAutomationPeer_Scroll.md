import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Scroll Method




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Scroll(
	ScrollAmount horizontalAmount,
	ScrollAmount verticalAmount
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Scroll ( 
	horizontalAmount As ScrollAmount,
	verticalAmount As ScrollAmount
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Scroll : 
        horizontalAmount : ScrollAmount * 
        verticalAmount : ScrollAmount -> unit 
override Scroll : 
        horizontalAmount : ScrollAmount * 
        verticalAmount : ScrollAmount -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Peers/ItemsControlAutomationPeer.cs#L45" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Automation_Provider_ScrollAmount">ScrollAmount</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Automation_Provider_ScrollAmount">ScrollAmount</a></dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Automation_Provider_IScrollProvider_Scroll">IScrollProvider.Scroll(ScrollAmount, ScrollAmount)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
