import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Scroll Method


Scrolls the visible region of the content area horizontally and vertically.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Scroll(
	ScrollAmount horizontalAmount,
	ScrollAmount verticalAmount
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Scroll ( 
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
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Automation_Provider_ScrollAmount">ScrollAmount</a></dt><dd>The horizontal increment specific to the control.</dd><dt>  <a href="T_Avalonia_Automation_Provider_ScrollAmount">ScrollAmount</a></dt><dd>The vertical increment specific to the control.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Provider_IScrollProvider">IScrollProvider Interface</a>  
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
